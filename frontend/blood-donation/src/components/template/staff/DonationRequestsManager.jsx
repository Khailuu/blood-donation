import React, { useState, useEffect, useMemo } from "react";
import {
  message,
  Typography,
  Checkbox,
  Pagination,
  Button,
  Tabs,
  Tag,
  Spin,
} from "antd";
import {
  SyncOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  EyeOutlined,
  CheckOutlined,
  CloseOutlined,
  StopOutlined,
  DownloadOutlined,
  FilterOutlined,
  FrownOutlined,
} from "@ant-design/icons";
import { donationRequestService } from "../../../services/donationRequestService ";
import "../../../css/staff/DonorRequestManager.css";

const { Title } = Typography;
const { TabPane } = Tabs;

const DonorRequestsManager = () => {
  const [donationRequests, setDonationRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [filters, setFilters] = useState({
    bloodType: "",
    componentType: "",
    date: "",
  });
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedRequests, setSelectedRequests] = useState([]);

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const componentTypes = ["Whole", "Plasma", "Platelets"];

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const response = await donationRequestService.getAllDonationRequests();

      let items = [];
      if (Array.isArray(response)) {
        items = response;
      } else if (response?.data) {
        items = Array.isArray(response.data)
          ? response.data
          : response.data.items || [];
      } else if (response?.items) {
        items = response.items;
      }

      setDonationRequests(items);

      if (items.length === 0) {
        message.info("No donation requests found");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      message.error("Failed to load donation requests");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab && ["pending", "processed"].includes(savedTab)) {
      setActiveTab(savedTab);
    }
    fetchRequests();
  }, []);

  const filteredRequests = useMemo(() => {
    const filtered = donationRequests.filter((req) => {
      const reqDate = new Date(req.requestTime).toISOString().split("T")[0];
      return (
        (!filters.bloodType || req.bloodType === filters.bloodType) &&
        (!filters.componentType ||
          req.componentType === filters.componentType) &&
        (!filters.date || reqDate.includes(filters.date))
      );
    });

    return activeTab === "pending"
      ? filtered.filter((req) => req.status === "Pending")
      : filtered.filter((req) => req.status !== "Pending");
  }, [donationRequests, filters, activeTab]);

  const requestCounts = useMemo(() => {
    const pending = donationRequests.filter(
      (req) => req.status === "Pending"
    ).length;
    const processed = donationRequests.filter(
      (req) => req.status !== "Pending"
    ).length;
    return { pending, processed };
  }, [donationRequests]);

  const paginatedRequests = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredRequests.slice(startIndex, startIndex + pageSize);
  }, [filteredRequests, currentPage, pageSize]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchRequests().then(() => {
      const savedTab = localStorage.getItem("activeTab") || activeTab;
      setActiveTab(savedTab);
    });
  };

  const handleFilterChange = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const clearFilters = () => {
    setFilters({ bloodType: "", componentType: "", date: "" });
    setCurrentPage(1);
  };

  const handleExport = () => {
    const csvContent = [
      [
        "#",
        "Donor",
        "Date",
        "Time",
        "Blood Type",
        "Component",
        "Amount",
        "Status",
        "Note",
      ],
      ...filteredRequests.map((request, index) => [
        index + 1,
        request.requesterName,
        formatDate(request.requestTime),
        formatTime(request.requestTime),
        request.bloodType,
        getComponentText(request.componentType),
        `${request.amountBlood} unit(s)`,
        request.status,
        request.note || "N/A",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `donation_requests_${activeTab}_${
      new Date().toISOString().split("T")[0]
    }.csv`;
    a.click();
    window.URL.revokeObjectURL(url);

    message.success("Report exported successfully");
  };

  const handleApprove = async (id) => {
    try {
      setActionLoading(true);
      await donationRequestService.approveDonationRequest(id);

      setDonationRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.requestId === id
            ? { ...request, status: "Approved" }
            : request
        )
      );

      setSelectedRequests((prev) => prev.filter((reqId) => reqId !== id));

      message.success("Request approved successfully");

      if (selectedRequest?.requestId === id) {
        setSelectedRequest(null);
      }
    } catch (error) {
      console.error("Approval error:", error);
      message.error("Approval failed: " + (error.message || "Unknown error"));
    } finally {
      setActionLoading(false);
    }
  };

  const handleReject = async (id) => {
    try {
      setActionLoading(true);
      await donationRequestService.rejectDonationRequest(id);

      setDonationRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.requestId === id
            ? { ...request, status: "Rejected" }
            : request
        )
      );

      setSelectedRequests((prev) => prev.filter((reqId) => reqId !== id));

      message.success("Request rejected successfully");

      if (selectedRequest?.requestId === id) {
        setSelectedRequest(null);
      }
    } catch (error) {
      console.error("Rejection error:", error);
      message.error("Rejection failed: " + (error.message || "Unknown error"));
    } finally {
      setActionLoading(false);
    }
  };

  const handleBulkApprove = async () => {
    if (!selectedRequests.length) {
      message.warning("Please select at least one request to approve");
      return;
    }

    try {
      setActionLoading(true);
      await Promise.all(
        selectedRequests.map((id) =>
          donationRequestService.approveDonationRequest(id)
        )
      );

      setDonationRequests((prevRequests) =>
        prevRequests.map((request) =>
          selectedRequests.includes(request.requestId)
            ? { ...request, status: "Approved" }
            : request
        )
      );

      message.success(
        `Approved ${selectedRequests.length} requests successfully`
      );
      setSelectedRequests([]);
    } catch (error) {
      console.error("Bulk approval error:", error);
      message.error(
        "Bulk approval failed: " + (error.message || "Unknown error")
      );
    } finally {
      setActionLoading(false);
    }
  };

  const handleBulkReject = async () => {
    if (!selectedRequests.length) {
      message.warning("Please select at least one request to reject");
      return;
    }

    try {
      setActionLoading(true);
      await Promise.all(
        selectedRequests.map((id) =>
          donationRequestService.rejectDonationRequest(id)
        )
      );

      setDonationRequests((prevRequests) =>
        prevRequests.map((request) =>
          selectedRequests.includes(request.requestId)
            ? { ...request, status: "Rejected" }
            : request
        )
      );

      message.success(
        `Rejected ${selectedRequests.length} requests successfully`
      );
      setSelectedRequests([]);
    } catch (error) {
      console.error("Bulk rejection error:", error);
      message.error(
        "Bulk rejection failed: " + (error.message || "Unknown error")
      );
    } finally {
      setActionLoading(false);
    }
  };

  const handleSelectRequest = (id, checked) => {
    if (checked) {
      setSelectedRequests((prev) => [...prev, id]);
    } else {
      setSelectedRequests((prev) => prev.filter((reqId) => reqId !== id));
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRequests(paginatedRequests.map((req) => req.requestId));
    } else {
      setSelectedRequests([]);
    }
  };

  const handlePageChange = (page, newPageSize) => {
    setCurrentPage(page);
    if (newPageSize) setPageSize(newPageSize);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    localStorage.setItem("activeTab", key);
    setCurrentPage(1);
    setSelectedRequests([]);
  };

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString("vi-VN");
  const formatTime = (dateStr) =>
    new Date(dateStr).toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const getComponentText = (type) =>
    ({
      Whole: "Whole Blood",
      Plasma: "Plasma",
      Platelets: "Platelets",
    }[type] || type);

  const getStatusTag = (status) => {
    switch (status) {
      case "Pending":
        return (
          <Tag icon={<ClockCircleOutlined />} color="gold">
            Pending
          </Tag>
        );
      case "Approved":
        return (
          <Tag icon={<CheckCircleOutlined />} color="green">
            Approved
          </Tag>
        );
      case "Rejected":
        return (
          <Tag icon={<StopOutlined />} color="red">
            Rejected
          </Tag>
        );
      default:
        return <Tag color="gray">{status}</Tag>;
    }
  };

  if (loading) {
    return (
      <div className="p-20 text-center">
        <Spin size="large" />
        <p>Loading donation requests...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div className="mb-6">
          <Title
            className="text-2xl font-bold"
            style={{ fontFamily: "Raleway" }}
          >
            Donation Requests
          </Title>
          <p className="text-gray-600 mt-2">
            Display all donation requests and manage them efficiently
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleRefresh}
            icon={<SyncOutlined spin={refreshing} />}
            loading={refreshing}
            type="primary"
            style={{
              fontFamily: "Raleway",
              fontWeight: 600,
              backgroundColor: "#fff",
              color: "#bd0026",
              border: "1px solid #bd0026",
              borderRadius: 50,
              height: 40,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Refresh
          </Button>
          <Button
            onClick={clearFilters}
            icon={<FilterOutlined />}
            style={{
              fontFamily: "Raleway",
              fontWeight: 600,
              backgroundColor: "#fff",
              color: "#bd0026",
              border: "1px solid #bd0026",
              borderRadius: 50,
              height: 40,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Reset Filters
          </Button>
          <Button
            onClick={handleExport}
            icon={<DownloadOutlined />}
            style={{
              fontFamily: "Raleway",
              fontWeight: 600,
              backgroundColor: "#bd0026",
              color: "#fff",
              borderRadius: 50,
              height: 40,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Export Report
          </Button>
        </div>
      </div>

      <Tabs
        activeKey={activeTab}
        onChange={handleTabChange}
        className="custom-tabs"
      >
        <TabPane
          tab={
            <span className="flex items-center gap-2">
              <ClockCircleOutlined className="text-amber-500" />
              <span>Pending Requests</span>
              <Tag className="ml-1 bg-amber-100 text-amber-600">
                {requestCounts.pending}
              </Tag>
            </span>
          }
          key="pending"
        />
        <TabPane
          tab={
            <span className="flex items-center gap-2">
              <CheckCircleOutlined />
              <span>Processed Requests</span>
              <Tag className="ml-1 bg-green-100 ">
                {requestCounts.processed}
              </Tag>
            </span>
          }
          key="processed"
        />
      </Tabs>

      {activeTab === "pending" && selectedRequests.length > 0 && (
        <div className="bg-blue-50 p-3 rounded-lg flex justify-between items-center">
          <div className="text-blue-700">
            {selectedRequests.length} request(s) selected
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleBulkApprove}
              disabled={actionLoading}
              type="text"
              icon={<CheckOutlined className="text-green-500" />}
              className="bg-green-50 text-green-600 hover:bg-green-100"
            >
              Approve Selected
            </Button>
            <Button
              onClick={handleBulkReject}
              disabled={actionLoading}
              type="text"
              icon={<CloseOutlined className="text-red-500" />}
              className="bg-red-50 text-red-600 hover:bg-red-100"
            >
              Reject Selected
            </Button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blood Type
            </label>
            <select
              value={filters.bloodType}
              onChange={(e) => handleFilterChange("bloodType", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-600 ">
                  <Checkbox
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    checked={
                      selectedRequests.length > 0 &&
                      selectedRequests.length === paginatedRequests.length
                    }
                    indeterminate={
                      selectedRequests.length > 0 &&
                      selectedRequests.length < paginatedRequests.length
                    }
                    disabled={activeTab !== "pending"}
                  />
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 ">
                  #
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 ">
                  Full Name
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 ">
                  Date
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 ">
                  Time
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 ">
                  Blood Type
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 ">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 ">
                  Amount
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 ">
                  Status
                </th>
                <th className="px-4 py-3 text-center font-bold text-gray-600 ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedRequests.map((req, i) => (
                <tr key={req.requestId} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Checkbox
                      checked={selectedRequests.includes(req.requestId)}
                      onChange={(e) =>
                        handleSelectRequest(req.requestId, e.target.checked)
                      }
                      disabled={
                        activeTab !== "pending" || req.status !== "Pending"
                      }
                    />
                  </td>
                  <td className="px-4 py-3 font-semibold text-gray-700">
                    {(currentPage - 1) * pageSize + i + 1}
                  </td>
                  <td className="px-4 py-3">{req.requesterName}</td>
                  <td className="px-4 py-3">{formatDate(req.requestTime)}</td>
                  <td className="px-4 py-3">{formatTime(req.requestTime)}</td>
                  <td className="px-4 py-3">
                    <Tag color="blue" className="font-medium">
                      {req.bloodType}
                    </Tag>
                  </td>
                  <td className="px-4 py-3">
                    {getComponentText(req.componentType)}
                  </td>
                  <td className="px-4 py-3">{req.amountBlood} unit(s)</td>
                  <td className="px-4 py-3">{getStatusTag(req.status)}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <Button
                        icon={<EyeOutlined />}
                        onClick={() => setSelectedRequest(req)}
                        type="primary"
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        size="small"
                      />
                      {req.status === "Pending" && (
                        <>
                          <Button
                            icon={<CheckOutlined />}
                            onClick={() => handleApprove(req.requestId)}
                            
                            disabled={actionLoading}
                            className="bg-green-500 hover:bg-green-600 text-white"
                            size="small"
                          />
                          <Button
                            icon={<CloseOutlined />}
                            onClick={() => handleReject(req.requestId)}
                            disabled={actionLoading}
                            danger
                            type="primary"
                            className="bg-red-500 hover:bg-red-600 text-white"
                            size="small"
                          />
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filteredRequests.length === 0 && (
                <tr>
                  <td
                    colSpan="10"
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <FrownOutlined
                        style={{ fontSize: "36px", color: "#999" }}
                      />
                      <span className="text-base font-medium">
                        No {activeTab === "pending" ? "pending" : "processed"}{" "}
                        requests found
                      </span>
                    </div>
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
          className="custom-pagination"
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
                <div>
                  <div className="text-sm text-gray-500">Status</div>
                  <div className="font-medium">
                    {getStatusTag(selectedRequest.status)}
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
              {selectedRequest.status === "Pending" && (
                <>
                  <Button
                    onClick={() => handleApprove(selectedRequest.requestId)}
                    disabled={actionLoading}
                    type="primary"
                    icon={<CheckOutlined />}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {actionLoading ? "Processing..." : "Approve"}
                  </Button>
                  <Button
                    onClick={() => handleReject(selectedRequest.requestId)}
                    disabled={actionLoading}
                    danger
                    icon={<CloseOutlined />}
                  >
                    {actionLoading ? "Processing..." : "Reject"}
                  </Button>
                </>
              )}
              <Button
                onClick={() => setSelectedRequest(null)}
                icon={<CloseOutlined />}
                className="bg-gray-100 hover:bg-gray-200"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorRequestsManager;
