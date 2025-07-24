import React, { useState, useEffect, useMemo } from "react";
import { userService } from "../../../services/manageUserService";
import {
  message,
  Typography,
  Checkbox,
  Pagination,
  Button,
  Tabs,
  Tag,
  Spin,
  DatePicker,
  Select,
  Table,
  Modal,
  Input,
} from "antd";
import {
  UserOutlined,
  EditOutlined,
  SaveOutlined,
  CloseOutlined,
  HeartOutlined,
  TeamOutlined,
  DashboardOutlined,
  LoadingOutlined,
  ArrowLeftOutlined,
  EyeOutlined,
  DeleteOutlined,
  SyncOutlined,
  FilterOutlined,
  DownloadOutlined,
  FrownOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { TextArea } = Input;

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, setActionLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfileData, setTempProfileData] = useState({});
  const [filters, setFilters] = useState({
    bloodType: "",
    role: "",
    dateRange: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const roles = ["User", "Admin", "Staff"];
  const roleMap = {
    1: "Admin",
    2: "Staff",
    3: "Member",
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await userService.getAllUser();
      
      let usersData = response || [];
      if (!Array.isArray(usersData)) {
        if (usersData && typeof usersData === "object") {
          usersData = Object.values(usersData);
        } else {
          throw new Error("Invalid users data received - expected an array");
        }
      }

      const mappedUsers = usersData.map((userPayload) => {
        if (!userPayload || typeof userPayload !== "object") {
          return null;
        }

        // Map numeric role to string representation
        const roleValue = userPayload.role || userPayload.userRole || 1;
        const role = typeof roleValue === "number" ? roleMap[roleValue] || "User" : roleValue;

        return {
          key: userPayload.id || userPayload.userId || Date.now() + Math.random(),
          name: userPayload.fullName || userPayload.name || userPayload.userName || "Unknown User",
          email: userPayload.email || userPayload.emailAddress || "No email",
          phone: userPayload.phone || userPayload.phoneNumber || userPayload.mobile || "No phone",
          bloodType: userPayload.bloodTypeName || userPayload.bloodType || "Unknown",
          birthDate: userPayload.dateOfBirth || userPayload.birthDate || "Not specified",
          address: userPayload.address || userPayload.fullAddress || "No address",
          donationCount: userPayload.donorInformation?.donationCount || userPayload.donationCount || 0,
          lastDonation: userPayload.lastDonationDate || userPayload.lastDonation || "N/A",
          status: userPayload.status === 1 || userPayload.status === "active" ? "active" : "inactive",
          role: role,
          gender: userPayload.gender === 1 ? "Male" : userPayload.gender === 2 ? "Female" : "Not specified",
          isDonor: userPayload.isDonor || userPayload.is_donor || false
        };
      }).filter(user => user !== null);

      if (mappedUsers.length === 0) {
        message.info("No users found in the system");
      }

      setUsers(mappedUsers);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError(err.message);
      message.error("Failed to load users: " + err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesBloodType = !filters.bloodType || user.bloodType === filters.bloodType;
      const matchesRole = !filters.role || user.role === filters.role;
      
      let matchesDateRange = true;
      if (filters.dateRange && filters.dateRange.length === 2) {
        const [startDate, endDate] = filters.dateRange;
        const donationDate = user.lastDonation === "N/A" ? null : new Date(user.lastDonation);
        if (donationDate) {
          matchesDateRange = (!startDate || donationDate >= startDate.startOf("day")) &&
                            (!endDate || donationDate <= endDate.endOf("day"));
        } else {
          matchesDateRange = false;
        }
      }
      
      return matchesBloodType && matchesRole && matchesDateRange;
    });
  }, [users, filters]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredUsers.slice(startIndex, startIndex + pageSize);
  }, [filteredUsers, currentPage, pageSize]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchUsers();
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({ bloodType: "", role: "", dateRange: null });
    setCurrentPage(1);
  };

  const handleExportCSV = () => {
    const csvContent = [
      ["Name", "Email", "Phone", "Blood Type", "Role", "Status", "Last Donation"].join(","),
      ...filteredUsers.map(u =>
        [u.name, u.email, u.phone, u.bloodType, u.role, u.status, u.lastDonation].map(field => 
          `"${field.toString().replace(/"/g, '""')}"`
        ).join(",")
      )
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `users_export_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    message.success("Users exported successfully");
  };

  const handleDeleteUser = async (userId) => {
    Modal.confirm({
      title: "Confirm Delete",
      content: "Are you sure you want to delete this user? This action cannot be undone.",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        try {
          setActionLoading(true);
          // await userService.deleteUser(userId); // Uncomment when integrating with actual API
          setUsers(prev => prev.filter(u => u.key !== userId));
          message.success("User deleted successfully");
        } catch (err) {
          console.error("Delete error:", err);
          message.error("Failed to delete user: " + err.message);
        } finally {
          setActionLoading(false);
        }
      },
    });
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setTempProfileData(user);
    setIsEditing(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setIsEditing(false);
  };

  const getBloodTypeColor = (bloodType) => {
    const colors = {
      "O+": "volcano",
      "O-": "red",
      "A+": "blue",
      "A-": "geekblue",
      "B+": "purple",
      "B-": "magenta",
      "AB+": "orange",
      "AB-": "gold",
      "Unknown": "default",
    };
    return colors[bloodType] || "default";
  };

  const getStatusTag = (status) => {
    return status === "active" ? (
      <Tag icon={<CheckCircleOutlined />} color="green">
        Active
      </Tag>
    ) : (
      <Tag icon={<CloseOutlined />} color="red">
        Inactive
      </Tag>
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Blood Type",
      dataIndex: "bloodType",
      key: "bloodType",
      render: (bloodType) => (
        <Tag color={getBloodTypeColor(bloodType)}>{bloodType}</Tag>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Last Donation",
      dataIndex: "lastDonation",
      key: "lastDonation",
      render: (date) => date === "N/A" ? "Never" : new Date(date).toLocaleDateString(),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => getStatusTag(status),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EyeOutlined />}
            onClick={() => handleViewDetails(record)}
            type="primary"
            className="bg-blue-500 hover:bg-blue-600 text-white"
            size="small"
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteUser(record.key)}
            danger
            type="primary"
            className="bg-red-500 hover:bg-red-600 text-white"
            size="small"
          />
        </div>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys);
    },
    getCheckboxProps: (record) => ({
      disabled: record.status !== "active",
    }),
  };

  if (loading) {
    return (
      <div className="p-20 text-center">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        <p>Loading users...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div className="mb-6">
          <Title className="text-2xl font-bold" style={{ fontFamily: "Raleway" }}>
            User Management
          </Title>
          <Text className="text-gray-600 mt-2">
            Manage all system users and their permissions
          </Text>
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
          >
            Reset Filters
          </Button>
          <Button
            onClick={handleExportCSV}
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
          >
            Export Report
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blood Type
            </label>
            <Select
              value={filters.bloodType}
              onChange={(value) => handleFilterChange("bloodType", value)}
              className="w-full"
              placeholder="All Blood Types"
              allowClear
            >
              {bloodTypes.map((type) => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <Select
              value={filters.role}
              onChange={(value) => handleFilterChange("role", value)}
              className="w-full"
              placeholder="All Roles"
              allowClear
            >
              {roles.map((role) => (
                <Option key={role} value={role}>
                  {role}
                </Option>
              ))}
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Donation Date
            </label>
            <RangePicker
              className="w-full"
              value={filters.dateRange}
              onChange={(dates) => handleFilterChange("dateRange", dates)}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <Table
          columns={columns}
          dataSource={paginatedUsers}
          rowSelection={rowSelection}
          pagination={false}
          loading={loading}
          locale={{
            emptyText: (
              <div className="flex flex-col items-center justify-center gap-2 py-8">
                <FrownOutlined style={{ fontSize: "36px", color: "#999" }} />
                <span className="text-base font-medium">
                  No users found matching your criteria
                </span>
              </div>
            ),
          }}
        />
      </div>

      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredUsers.length}
          onChange={(page, size) => {
            setCurrentPage(page);
            if (size) setPageSize(size);
          }}
          showSizeChanger
          pageSizeOptions={["10", "20", "50", "100"]}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} users`
          }
          className="custom-pagination"
        />
      </div>

      <Modal
        title="User Details"
        open={showModal}
        onCancel={handleCloseModal}
        footer={null}
        width={800}
        centered
      >
        {selectedUser && (
          <div className="p-4">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                  <UserOutlined style={{ fontSize: "32px", color: "#bd0026" }} />
                </div>
                <div>
                  {isEditing ? (
                    <Input
                      value={tempProfileData.name}
                      onChange={(e) =>
                        setTempProfileData({
                          ...tempProfileData,
                          name: e.target.value,
                        })
                      }
                      className="text-xl font-bold mb-1"
                    />
                  ) : (
                    <Title level={4} className="mb-1">
                      {selectedUser.name}
                    </Title>
                  )}
                  <Tag color={getBloodTypeColor(selectedUser.bloodType)}>
                    {selectedUser.bloodType}
                  </Tag>
                </div>
              </div>
              <div className="flex gap-2">
                {isEditing ? (
                  <>
                    <Button
                      onClick={() => {
                        setSelectedUser(tempProfileData);
                        setUsers(
                          users.map((u) =>
                            u.key === tempProfileData.key
                              ? tempProfileData
                              : u
                          )
                        );
                        setIsEditing(false);
                        message.success("User updated successfully");
                      }}
                      type="primary"
                      icon={<SaveOutlined />}
                    >
                      Save
                    </Button>
                    <Button
                      onClick={() => {
                        setIsEditing(false);
                        setTempProfileData(selectedUser);
                      }}
                      icon={<CloseOutlined />}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => setIsEditing(true)}
                    type="primary"
                    icon={<EditOutlined />}
                  >
                    Edit
                  </Button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Text strong className="block mb-1">
                    Email:
                  </Text>
                  {isEditing ? (
                    <Input
                      value={tempProfileData.email}
                      onChange={(e) =>
                        setTempProfileData({
                          ...tempProfileData,
                          email: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <Text>{selectedUser.email}</Text>
                  )}
                </div>
                <div>
                  <Text strong className="block mb-1">
                    Phone:
                  </Text>
                  {isEditing ? (
                    <Input
                      value={tempProfileData.phone}
                      onChange={(e) =>
                        setTempProfileData({
                          ...tempProfileData,
                          phone: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <Text>{selectedUser.phone}</Text>
                  )}
                </div>
                <div>
                  <Text strong className="block mb-1">
                    Birth Date:
                  </Text>
                  {isEditing ? (
                    <DatePicker
                      value={tempProfileData.birthDate}
                      onChange={(date) =>
                        setTempProfileData({
                          ...tempProfileData,
                          birthDate: date,
                        })
                      }
                      className="w-full"
                    />
                  ) : (
                    <Text>{selectedUser.birthDate}</Text>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Text strong className="block mb-1">
                    Role:
                  </Text>
                  {isEditing ? (
                    <Select
                      value={tempProfileData.role}
                      onChange={(value) =>
                        setTempProfileData({
                          ...tempProfileData,
                          role: value,
                        })
                      }
                      className="w-full"
                    >
                      {roles.map((role) => (
                        <Option key={role} value={role}>
                          {role}
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Text>{selectedUser.role}</Text>
                  )}
                </div>
                <div>
                  <Text strong className="block mb-1">
                    Status:
                  </Text>
                  {getStatusTag(selectedUser.status)}
                </div>
                <div>
                  <Text strong className="block mb-1">
                    Last Donation:
                  </Text>
                  <Text>
                    {selectedUser.lastDonation === "N/A"
                      ? "Never donated"
                      : new Date(selectedUser.lastDonation).toLocaleDateString()}
                  </Text>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Text strong className="block mb-1">
                Address:
              </Text>
              {isEditing ? (
                <TextArea
                  value={tempProfileData.address}
                  onChange={(e) =>
                    setTempProfileData({
                      ...tempProfileData,
                      address: e.target.value,
                    })
                  }
                  rows={2}
                />
              ) : (
                <Text>{selectedUser.address}</Text>
              )}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <Text strong className="block mb-2">
                  <TeamOutlined className="mr-2" />
                  Donation History
                </Text>
                <Text>
                  <HeartOutlined className="mr-2 text-red-500" />
                  {selectedUser.donationCount} donations
                </Text>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <Text strong className="block mb-2">
                  <DashboardOutlined className="mr-2" />
                  Activity Status
                </Text>
                <Text>
                  {selectedUser.isDonor ? (
                    <Tag color="green">Active Donor</Tag>
                  ) : (
                    <Tag color="orange">Not a Donor</Tag>
                  )}
                </Text>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UserManagement;