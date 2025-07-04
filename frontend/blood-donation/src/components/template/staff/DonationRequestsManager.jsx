import React, { useState, useEffect, useMemo } from "react";
import { message, Pagination } from "antd";
import { donationRequestService } from "../../../services/donationRequestService ";

const DonorRequestsManager = () => {
  const [donationRequests, setDonationRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    bloodType: "",
    componentType: "",
    date: "",
  });
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const componentTypes = ["Whole", "Plasma", "Platelets"];

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        const response = await donationRequestService.getAllDonationRequests();
        const items = response.items || response.data?.items || [];
        setDonationRequests(items);
        if (!items.length) message.info("No donation requests found");
      } catch (error) {
        console.error(error);
        message.error("Failed to load donation requests");
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const filteredRequests = useMemo(() => {
    return donationRequests.filter((req) => {
      const reqDate = new Date(req.requestTime).toISOString().split("T")[0];
      return (
        (!filters.bloodType || req.bloodType === filters.bloodType) &&
        (!filters.componentType ||
          req.componentType === filters.componentType) &&
        (!filters.date || reqDate.includes(filters.date))
      );
    });
  }, [donationRequests, filters]);

  const paginatedRequests = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredRequests.slice(startIndex, startIndex + pageSize);
  }, [filteredRequests, currentPage, pageSize]);

  const handleFilterChange = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));
  const clearFilters = () =>
    setFilters({ bloodType: "", componentType: "", date: "" });

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("vi-VN");
  const formatTime = (dateStr) =>
    new Date(dateStr).toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  const getComponentText = (type) =>
    ({ Whole: "Whole Blood", Plasma: "Plasma", Platelets: "Platelets" }[type] ||
    type);

  const handleApprove = async (id) => {
    try {
      await donationRequestService.approveDonationRequest(id);
      setDonationRequests((reqs) =>
        reqs.map((r) => (r.requestId === id ? { ...r, status: "Scheduled" } : r))
      );

      message.success("Request approved and added to schedule");

      if (selectedRequest?.requestId === id) {
        setSelectedRequest(null);
      }
    } catch (error) {
      message.error("Approval failed: " + (error.message || "Unknown error"));
    }
  };

  const handleReject = async (id) => {
    try {
      await donationRequestService.rejectDonationRequest(id);
      setDonationRequests((reqs) =>
        reqs.map((r) => (r.requestId === id ? { ...r, status: "Cancelled" } : r))
      );
      message.success("Request rejected");
    } catch {
      message.error("Rejection failed");
    }
  };

  const handlePageChange = (page, newPageSize) => {
    setCurrentPage(page);
    if (newPageSize) setPageSize(newPageSize);
  };

  if (loading)
    return <div className="p-20 text-center">Loading donation requests...</div>;

  return (
    <div className="space-y-6 p-6 md:p-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Donation Requests</h2>
        <button
          onClick={clearFilters}
          className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50"
        >
          Reset Filters
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blood Type
            </label>
            <select
              value={filters.bloodType}
              onChange={(e) => handleFilterChange("bloodType", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">All Blood Types</option>
              {bloodTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Component Type
            </label>
            <select
              value={filters.componentType}
              onChange={(e) =>
                handleFilterChange("componentType", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">All Types</option>
              {componentTypes.map((type) => (
                <option key={type} value={type}>
                  {getComponentText(type)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={filters.date}
              onChange={(e) => handleFilterChange("date", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">
                  #
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">
                  Full Name
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">
                  Date
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">
                  Time
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">
                  Blood Type
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">
                  Amount
                </th>
                <th className="px-4 py-3 text-center font-bold text-gray-600 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedRequests.map((req, i) => (
                <tr key={req.requestId} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700">
                    {(currentPage - 1) * pageSize + i + 1}
                  </td>
                  <td className="px-4 py-3">{req.requesterName}</td>
                  <td className="px-4 py-3">{formatDate(req.requestTime)}</td>
                  <td className="px-4 py-3">{formatTime(req.requestTime)}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {req.bloodType}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {getComponentText(req.componentType)}
                  </td>
                  <td className="px-4 py-3">{req.amountBlood} unit(s)</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => setSelectedRequest(req)}
                        className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleApprove(req.requestId)}
                        className="text-xs bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(req.requestId)}
                        className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredRequests.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No requests match your filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredRequests.length}
          onChange={handlePageChange}
          showSizeChanger
          pageSizeOptions={["5", "10", "20", "50"]}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} requests`
          }
        />
      </div>

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h3 className="text-lg font-bold mb-4">Request Details</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Full Name</div>
                  <div className="font-medium">
                    {selectedRequest.requesterName}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Blood Type</div>
                  <div className="font-medium">{selectedRequest.bloodType}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Date</div>
                  <div className="font-medium">
                    {formatDate(selectedRequest.requestTime)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Time</div>
                  <div className="font-medium">
                    {formatTime(selectedRequest.requestTime)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Component Type</div>
                  <div className="font-medium">
                    {getComponentText(selectedRequest.componentType)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Amount</div>
                  <div className="font-medium">
                    {selectedRequest.amountBlood} unit(s)
                  </div>
                </div>
              </div>
              {selectedRequest.note && (
                <div>
                  <div className="text-sm text-gray-500">Notes</div>
                  <div className="mt-1 p-3 bg-gray-50 rounded-md">
                    {selectedRequest.note}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => {
                  handleApprove(selectedRequest.requestId);
                  setSelectedRequest(null);
                }}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Approve
              </button>
              <button
                onClick={() => {
                  handleReject(selectedRequest.requestId);
                  setSelectedRequest(null);
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Reject
              </button>
              <button
                onClick={() => setSelectedRequest(null)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorRequestsManager;
