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
  FilterOutlined,
  DownloadOutlined,
  FrownOutlined,
} from "@ant-design/icons";
import { donationRequestService } from "../../../services/donationRequestService ";
import { userService } from "../../../services/manageUserService";
const { Title } = Typography;
const { TabPane } = Tabs;

const DonationSchedule = () => {
  const [donationSchedules, setDonationSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBloodType, setFilterBloodType] = useState("All");
  const [selectedSchedules, setSelectedSchedules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeTab, setActiveTab] = useState("scheduled");
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const fetchApprovedRequests = async () => {
    try {
      setLoading(true);
      const requests =
        await donationRequestService.getApprovedDonationRequests();
      setDonationSchedules(requests);
    } catch (error) {
      console.error("Failed to load approved requests:", error);
      message.error("Failed to load donation schedules");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchApprovedRequests();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchApprovedRequests();
    setSelectedSchedules([]);
    setCurrentPage(1);
  };

  const scheduleCounts = useMemo(() => {
    const scheduled = donationSchedules.filter(
      (s) => s.status === "Scheduled"
    ).length;
    const completed = donationSchedules.filter(
      (s) => s.status === "Completed"
    ).length;
    return { scheduled, completed };
  }, [donationSchedules]);

  const filteredSchedules = useMemo(() => {
    return donationSchedules.filter((schedule) => {
      const matchesSearch =
        schedule.requesterName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        schedule.bloodType.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBloodType =
        filterBloodType === "All" || schedule.bloodType === filterBloodType;
      const matchesTab =
        (activeTab === "scheduled" && schedule.status === "Scheduled") ||
        (activeTab === "completed" && schedule.status === "Completed");

      return matchesSearch && matchesBloodType && matchesTab;
    });
  }, [donationSchedules, searchTerm, filterBloodType, activeTab]);

  const paginatedSchedules = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredSchedules.slice(startIndex, startIndex + pageSize);
  }, [filteredSchedules, currentPage, pageSize]);

  const handlePageChange = (page, newPageSize) => {
    setCurrentPage(page);
    if (newPageSize) {
      setPageSize(newPageSize);
    }
    setSelectedSchedules([]);
  };

  const handleSelectSchedule = (requestId, checked) => {
    if (checked) {
      setSelectedSchedules((prev) => [...prev, requestId]);
    } else {
      setSelectedSchedules((prev) => prev.filter((id) => id !== requestId));
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedSchedules(
        paginatedSchedules.map((schedule) => schedule.requestId)
      );
    } else {
      setSelectedSchedules([]);
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("vi-VN");
  };

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getComponentText = (type) => {
    const componentMap = {
      Whole: "Whole Blood",
      Plasma: "Plasma",
      Platelets: "Platelets",
    };
    return componentMap[type] || type;
  };

  const getStatusTag = (status) => {
    switch (status) {
      case "Scheduled":
        return (
          <Tag icon={<ClockCircleOutlined />} color="orange">
            Scheduled
          </Tag>
        );
      case "Completed":
        return (
          <Tag icon={<CheckCircleOutlined />} color="green">
            Completed
          </Tag>
        );
      default:
        return <Tag color="gray">{status}</Tag>;
    }
  };

  const handleComplete = async (requestId) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to mark this donation as completed?"
      );
      if (!confirmed) return;

      setActionLoading(true);
      const donationResponse =
        await donationRequestService.completeDonationRequest(requestId);

      if (donationResponse && donationResponse.data) {
        const { bloodType, amountBlood } = donationResponse.data;

        const bloodTypes = await userService.getBloodTypes();
        const bloodTypeInfo = bloodTypes.find(
          (type) => type.bloodType === bloodType
        );

        if (bloodTypeInfo) {
          await userService.addBloodStored({
            bloodTypeId: bloodTypeInfo.id,
            quantity: amountBlood,
          });
        }
      }

      setDonationSchedules((prev) =>
        prev.map((req) =>
          req.requestId === requestId
            ? {
                ...req,
                status: "Completed",
                ...(donationResponse.data
                  ? {
                      bloodType: donationResponse.data.bloodType,
                      amountBlood: donationResponse.data.amountBlood,
                    }
                  : {}),
              }
            : req
        )
      );

      setSelectedSchedules((prev) => prev.filter((id) => id !== requestId));
      setSelectedSchedule(null);
      message.success("Donation completed successfully");
    } catch (error) {
      console.error("Failed to complete donation:", error);
      message.error(
        error.response?.data?.message || "Failed to complete donation"
      );
    } finally {
      setActionLoading(false);
    }
  };

  const handleBulkComplete = async () => {
    if (selectedSchedules.length === 0) {
      message.warning("Please select at least one schedule to complete");
      return;
    }

    try {
      const confirmed = window.confirm(
        `Are you sure you want to mark ${selectedSchedules.length} donations as completed?`
      );
      if (!confirmed) return;

      setActionLoading(true);
      await Promise.all(
        selectedSchedules.map((requestId) =>
          donationRequestService.completeDonationRequest(requestId)
        )
      );

      setDonationSchedules((prev) =>
        prev.map((req) =>
          selectedSchedules.includes(req.requestId)
            ? { ...req, status: "Completed" }
            : req
        )
      );

      setSelectedSchedules([]);
      message.success(
        `${selectedSchedules.length} donations completed successfully`
      );
    } catch (error) {
      console.error("Failed to complete donations:", error);
      message.error("Failed to complete selected donations");
    } finally {
      setActionLoading(false);
    }
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
      ],
      ...filteredSchedules.map((schedule, index) => [
        index + 1,
        schedule.requesterName,
        formatDate(schedule.requestTime),
        formatTime(schedule.requestTime),
        schedule.bloodType,
        getComponentText(schedule.componentType),
        `${schedule.amountBlood} unit(s)`,
        schedule.status,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "donation_schedule.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFilterBloodType("All");
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="p-20 text-center">
        <Spin size="large" />
        <p>Loading donation schedules...</p>
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
            Donation Schedule
          </Title>
          <p className="text-gray-600 mt-2">
            Display all donation schedules and manage their statuses
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
        onChange={(key) => {
          setActiveTab(key);
          setCurrentPage(1);
          setSelectedSchedules([]);
        }}
        className="custom-tabs"
      >
        <TabPane
          tab={
            <span className="flex items-center gap-2">
              <ClockCircleOutlined className="text-orange-500" />
              <span>Scheduled Donations</span>
              <Tag className="ml-1 bg-orange-100 text-orange-600">
                {scheduleCounts.scheduled}
              </Tag>
            </span>
          }
          key="scheduled"
        />
        <TabPane
          tab={
            <span className="flex items-center gap-2">
              <CheckCircleOutlined className="text-green-500" />
              <span>Completed Donations</span>
              <Tag className="ml-1 bg-green-100 text-green-600">
                {scheduleCounts.completed}
              </Tag>
            </span>
          }
          key="completed"
        />
      </Tabs>

      {activeTab === "scheduled" && selectedSchedules.length > 0 && (
        <div className="bg-blue-50 p-3 rounded-lg flex justify-between items-center">
          <div className="text-blue-700">
            {selectedSchedules.length} schedule(s) selected
          </div>
          <button
            onClick={handleBulkComplete}
            disabled={actionLoading}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            {actionLoading ? "Processing..." : "Complete Selected"}
          </button>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search by donor name or blood type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border focus:outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-red-300 focus:border-transparent"
            />
            <div className="text-sm text-gray-600">
              Showing {paginatedSchedules.length} of {filteredSchedules.length}{" "}
              schedules
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blood Type
              </label>
              <select
                value={filterBloodType}
                onChange={(e) => setFilterBloodType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-300"
              >
                <option value="All">All Blood Types</option>
                {bloodTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
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
                      selectedSchedules.length > 0 &&
                      selectedSchedules.length === paginatedSchedules.length
                    }
                    indeterminate={
                      selectedSchedules.length > 0 &&
                      selectedSchedules.length < paginatedSchedules.length
                    }
                    disabled={activeTab !== "scheduled"}
                  />
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 ">
                  #
                </th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 ">
                  Donor
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
                  Component
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
              {paginatedSchedules.map((schedule, index) => (
                <tr key={schedule.requestId} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Checkbox
                      checked={selectedSchedules.includes(schedule.requestId)}
                      onChange={(e) =>
                        handleSelectSchedule(
                          schedule.requestId,
                          e.target.checked
                        )
                      }
                      disabled={activeTab !== "scheduled"}
                    />
                  </td>
                  <td className="px-4 py-3 font-semibold text-gray-700">
                    {(currentPage - 1) * pageSize + index + 1}
                  </td>
                  <td className="px-4 py-3">{schedule.requesterName}</td>
                  <td className="px-4 py-3">
                    {formatDate(schedule.requestTime)}
                  </td>
                  <td className="px-4 py-3">
                    {formatTime(schedule.requestTime)}
                  </td>
                  <td className="px-4 py-3">
                    <Tag color="blue" className="font-medium">
                      {schedule.bloodType}
                    </Tag>
                  </td>
                  <td className="px-4 py-3">
                    {getComponentText(schedule.componentType)}
                  </td>
                  <td className="px-4 py-3">{schedule.amountBlood} unit(s)</td>
                  <td className="px-4 py-3">{getStatusTag(schedule.status)}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <Button
                        icon={<EyeOutlined />}
                        onClick={() => setSelectedSchedule(schedule)}
                        type="primary"
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        size="small"
                      />
                      {schedule.status === "Scheduled" && (
                        <Button
                          icon={<CheckCircleOutlined />}
                          onClick={() => handleComplete(schedule.requestId)}
                          disabled={actionLoading}
                          type="primary"
                          className="bg-green-500 hover:bg-green-600 text-white"
                          size="small"
                        />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filteredSchedules.length === 0 && (
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
                        No{" "}
                        {activeTab === "scheduled" ? "scheduled" : "completed"}{" "}
                        donations found
                      </span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredSchedules.length}
          onChange={handlePageChange}
          onShowSizeChange={handlePageChange}
          showSizeChanger
          pageSizeOptions={["10", "20", "50", "100"]}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} schedules`
          }
          className="custom-pagination"
        />
      </div>

      {/* Schedule details modal */}
      {selectedSchedule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h3 className="text-lg font-bold mb-4">Donation Details</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Donor Name</div>
                  <div className="font-medium">
                    {selectedSchedule.requesterName}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Blood Type</div>
                  <div className="font-medium">
                    {selectedSchedule.bloodType}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Date</div>
                  <div className="font-medium">
                    {formatDate(selectedSchedule.requestTime)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Time</div>
                  <div className="font-medium">
                    {formatTime(selectedSchedule.requestTime)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Component Type</div>
                  <div className="font-medium">
                    {getComponentText(selectedSchedule.componentType)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Amount</div>
                  <div className="font-medium">
                    {selectedSchedule.amountBlood} unit(s)
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Status</div>
                  <div className="font-medium">
                    {getStatusTag(selectedSchedule.status)}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              {selectedSchedule.status === "Scheduled" && (
                <Button
                  onClick={() => handleComplete(selectedSchedule.requestId)}
                  disabled={actionLoading}
                  type="primary"
                  icon={<CheckCircleOutlined />}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {actionLoading ? "Processing..." : "Mark as Completed"}
                </Button>
              )}
              <Button
                onClick={() => setSelectedSchedule(null)}
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

export default DonationSchedule;
