import React, { useState, useEffect } from "react";
import { message, Spin, Typography } from "antd";
import { userService } from "../../../services/manageUserService";
import { donationRequestService } from "../../../services/donationRequestService ";
const { Title } = Typography;

const FileText = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const Calendar = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const Package = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

const Bell = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-5 5v-5zM10.97 4.97a.235.235 0 00-.02.022L7.477 9.417 5.384 7.323a.75.75 0 00-1.06 1.061L6.97 10.03a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 00-1.071-1.05z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 3a6.5 6.5 0 00-6.5 6.5c0 .379.081.747.212 1.09l.755 2.077a.75.75 0 00.706.48h9.654a.75.75 0 00.706-.48l.755-2.077c.131-.343.212-.711.212-1.09A6.5 6.5 0 0013.5 3z"
    />
  </svg>
);

const X = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const User = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const Phone = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MapPin = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const Clock = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Dashboard = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [donationRequests, setDonationRequests] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState({
    requests: true,
    inventory: true,
  });
  const [stats, setStats] = useState({
    totalRequests: 0,
    scheduledDonations: 0,
    lowInventory: 0,
    newAnnouncements: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading({ requests: true, inventory: true });

        const requestsResponse =
          await donationRequestService.getAllDonationRequests();
        const requestsData = Array.isArray(requestsResponse.data)
          ? requestsResponse.data
          : requestsResponse.data?.items || requestsResponse.data?.data || [];


        const inventoryResponse = await userService.getBloodStored();
        console.log({ inventoryResponse });

        const inventoryData = inventoryResponse || [];


        const lowInventoryCount = inventoryData.filter((item) => {
          const status = getStatus(item.quantity);
          return status !== "Sufficient";
        }).length;


        setDonationRequests(requestsData);
        setInventory(inventoryData);
        setStats({
          totalRequests: requestsData.length,
          scheduledDonations: requestsData.filter(
            (req) => req.status === "Scheduled"
          ).length,
          lowInventory: lowInventoryCount,
          newAnnouncements: 0,
        });
      } catch (error) {
        console.error("API Error:", error);
        message.error(
          "Không thể tải dữ liệu: " + (error.message || "Lỗi không xác định")
        );
      } finally {
        setLoading({ requests: false, inventory: false });
      }
    };

    fetchData();
  }, []);

  const getStatus = (quantity) => {
    if (quantity >= 30) return "Sufficient";
    if (quantity >= 15) return "Low";
    return "Very Low";
  };

  // const getStatusColor = (status) => {
  //   switch (status) {
  //     case "Sufficient":
  //       return "bg-green-100 text-green-800";
  //     case "Low":
  //       return "bg-yellow-100 text-yellow-800";
  //     case "Very Low":
  //       return "bg-red-100 text-red-800";
  //     default:
  //       return "bg-gray-100 text-gray-800";
  //   }
  // };

  // const getProgressColor = (status) => {
  //   switch (status) {
  //     case "Sufficient":
  //       return "bg-green-500";
  //     case "Low":
  //       return "bg-yellow-500";
  //     case "Very Low":
  //       return "bg-red-500";
  //     default:
  //       return "bg-gray-500";
  //   }
  // };

  const openRequestDetails = (request) => {
    setSelectedRequest(request);

  };

  const closeRequestDetails = () => {
    setSelectedRequest(null);
  };

  const openInventoryDetails = (item) => {
    setSelectedInventory(item);
  };

  const closeInventoryDetails = () => {
    setSelectedInventory(null);
  };

  return (
    <div className="space-y-6 p-10 min-h-screen relative">
      <div className="mb-6 text-center">

        <Title className="text-2xl font-bold" style={{ fontFamily: "Raleway" }}>
          Blood Donation Management Dashboard
        </Title>
        <p className="text-gray-600 mt-2">
          Comprehensive overview of blood donation system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total requests today</p>
              <p className="text-2xl font-bold text-pink-600">
                {stats.totalRequests}
              </p>
              <p className="text-xs text-green-600 mt-1">
                ↑ 20% compared to yesterday
              </p>
            </div>
            <div className="bg-pink-100 p-3 rounded-full">
              <FileText className="h-8 w-8 text-pink-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Scheduled donations today</p>
              <p className="text-2xl font-bold text-pink-600">
                {stats.scheduledDonations}
              </p>
              <p className="text-xs text-blue-600 mt-1">5 completed</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Low blood inventory</p>
              <p className="text-2xl font-bold text-red-600">
                {stats.lowInventory}
              </p>
              <p className="text-xs text-red-600 mt-1">
                Urgent need to replenish
              </p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <Package className="h-8 w-8 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">New announcements</p>
              <p className="text-2xl font-bold text-pink-600">
                {stats.newAnnouncements}
              </p>
              <p className="text-xs text-orange-600 mt-1">
                2 emergency notices
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Bell className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Donation Requests
            </h3>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {donationRequests.length} requests
            </span>
          </div>

          {loading.requests ? (
            <div className="text-center py-8">
              <Spin size="large" />
              <p className="mt-2 text-gray-600">Loading donation requests...</p>
            </div>
          ) : donationRequests.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>No donation requests found.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {donationRequests.slice(0, 5).map((req) => (
                
                <div
                  key={req.id}
                  className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400 hover:bg-blue-100 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">
                      {req.requesterName || "Anonymous Donor"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {req.bloodType} 
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Status: {req.status}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                   
                    <button
                      onClick={() => openRequestDetails(req)}
                      className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      View details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Blood Inventory Status
            </h3>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
              {stats.lowInventory} types low
            </span>
          </div>

          {loading.inventory ? (
            <div className="text-center py-8">
              <Spin size="large" />
              <p className="mt-2 text-gray-600">Loading inventory data...</p>
            </div>
          ) : stats.lowInventory === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>All blood types are sufficiently stocked.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {inventory
                .filter((item) => getStatus(item.quantity) !== "Sufficient")
                .slice(0, 5)
                .map((item) => (
                  <div
                    key={item.bloodTypeId}
                    className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 hover:bg-yellow-100 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">
                        {item.bloodTypeName}
                      </p>
                      <p className="text-sm text-gray-600">
                        Available: {item.quantity} units
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Last updated: {item.lastUpdated || "N/A"}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          getStatus(item.quantity) === "Very Low"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {getStatus(item.quantity)}
                      </span>
                      <button
                        onClick={() => openInventoryDetails(item)}
                        className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Blood Inventory Overview
        </h3>
        {loading.inventory ? (
          console.log({inventory}),
          
          <div className="text-center py-8">
            <Spin size="large" />
            <p className="mt-2 text-gray-600">Loading inventory overview...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {inventory.map((item) => (
              <div
                key={item.bloodTypeId}
                className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-bold text-pink-600 mb-1">
                  {item.bloodTypeName}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {item.quantity} units
                </div>
                <div
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    getStatus(item.quantity) === "Sufficient"
                      ? "bg-green-100 text-green-800"
                      : getStatus(item.quantity) === "Low"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {getStatus(item.quantity)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedInventory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-screen overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                Blood Inventory Details - Type {selectedInventory.bloodType}
              </h2>
              <button
                onClick={closeInventoryDetails}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div
                className={`border rounded-lg p-4 ${
                  getStatus(selectedInventory.quantity) === "Very Low"
                    ? "bg-red-50 border-red-200"
                    : getStatus(selectedInventory.quantity) === "Low"
                    ? "bg-yellow-50 border-yellow-200"
                    : "bg-green-50 border-green-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      getStatus(selectedInventory.quantity) === "Very Low"
                        ? "bg-red-500"
                        : getStatus(selectedInventory.quantity) === "Low"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  ></div>
                  <span
                    className={`font-semibold ${
                      getStatus(selectedInventory.quantity) === "Very Low"
                        ? "text-red-800"
                        : getStatus(selectedInventory.quantity) === "Low"
                        ? "text-yellow-800"
                        : "text-green-800"
                    }`}
                  >
                    Status: {getStatus(selectedInventory.quantity)}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Current Stock:</span>
                    <p className="font-bold text-2xl text-blue-600">
                      {selectedInventory.quantity} units
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600">Minimum Required:</span>
                    <p className="font-bold text-lg text-gray-800">30 units</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Deficit:</span>
                    <p
                      className={`font-bold text-lg ${
                        selectedInventory.quantity < 30
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {selectedInventory.quantity < 30
                        ? `${30 - selectedInventory.quantity} units`
                        : "Sufficient"}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600">Last Updated:</span>
                    <p className="font-medium text-gray-800">
                      {selectedInventory.lastUpdated || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-purple-600" />
                  Usage Statistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-600 block text-xs">
                      Average Monthly Usage
                    </span>
                    <p className="font-bold text-xl text-blue-600">25</p>
                    <span className="text-xs text-gray-500">units</span>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-600 block text-xs">
                      Total Donations This Year
                    </span>
                    <p className="font-bold text-xl text-green-600">120</p>
                    <span className="text-xs text-gray-500">units</span>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-600 block text-xs">
                      Active Donors
                    </span>
                    <p className="font-bold text-xl text-orange-600">45</p>
                    <span className="text-xs text-gray-500">donors</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Storage Location
                </h3>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-800">
                    Main Storage - Refrigerator {selectedInventory.bloodType}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Last donation received:{" "}
                    {selectedInventory.lastDonation || "N/A"}
                  </p>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Batch Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedInventory.batchInfo?.map((batch, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="font-mono text-sm text-gray-800">
                        {batch}
                      </span>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                        Valid
                      </span>
                    </div>
                  )) || (
                    <div className="text-gray-500">
                      No batch information available
                    </div>
                  )}
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Inventory Level
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current: {selectedInventory.quantity} units</span>
                    <span>Target: 30 units</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className={`h-4 rounded-full transition-all duration-500 ${
                        selectedInventory.quantity >= 30
                          ? "bg-green-500"
                          : selectedInventory.quantity >= 15
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{
                        width: `${Math.min(
                          100,
                          (selectedInventory.quantity / 30) * 100
                        )}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    {Math.round((selectedInventory.quantity / 30) * 100)}% of
                    target
                  </div>
                </div>
              </div>

              {getStatus(selectedInventory.quantity) !== "Sufficient" && (
                <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-red-800 mb-2">
                    ⚠️ Action Required
                  </h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    {getStatus(selectedInventory.quantity) === "Very Low" && (
                      <>
                        <li>• Contact regular donors immediately</li>
                        <li>• Organize emergency blood drive</li>
                        <li>• Prioritize for emergency cases only</li>
                      </>
                    )}
                    {getStatus(selectedInventory.quantity) === "Low" && (
                      <>
                        <li>• Plan blood drive for next week</li>
                        <li>• Notify hospitals about inventory status</li>
                        <li>• Increase donor recruitment efforts</li>
                      </>
                    )}
                  </ul>
                </div>
              )}

              <div className="flex gap-3 pt-4 border-t">
                <button className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Organize Emergency Drive
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Contact Donors
                </button>
                <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Update Inventory
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                Donation Request Details
              </h2>
              <button
                onClick={closeRequestDetails}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-blue-800">
                    {selectedRequest.urgency || "Normal"}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Blood Type Needed:</span>
                    <p className="font-bold text-blue-600 text-lg">
                      {selectedRequest.bloodType}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600">Amount Needed:</span>
                    <p className="font-semibold text-gray-800">
                      {selectedRequest.requiredAmount || "2 units"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600" />
                  Donor Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Full Name:</span>
                    <p className="font-medium">
                      {selectedRequest.fullName || "Anonymous Donor"}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600">Donor ID:</span>
                    <p className="font-medium">
                      {selectedRequest.donorId || "N/A"}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-gray-600">Donation Purpose:</span>
                    <p className="font-medium">
                      {selectedRequest.purpose || "Regular donation"}
                    </p>
                  </div>
                </div>
              </div>

            

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-purple-600" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Phone Number:</span>
                    <p className="font-medium text-blue-600">
                      {selectedRequest.phone || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  Timing Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Request Date:</span>
                    <p className="font-medium">
                      {selectedRequest.requestDate ||
                        new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600">Preferred Time:</span>
                    <p className="font-medium">
                      {selectedRequest.preferredTime || "Anytime"}
                    </p>
                  </div>
                </div>
              </div>

              {selectedRequest.notes && (
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Important Notes
                  </h3>
                  <p className="text-sm text-gray-700 bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    {selectedRequest.notes}
                  </p>
                </div>
              )}

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Request Status
                </h3>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedRequest.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {selectedRequest.status || "Pending"}
                  </span>
                  
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <button className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Process Request Now
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Contact Hospital
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
