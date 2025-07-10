import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Popconfirm,
  message,
  Tooltip,
  Tag,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UserAddOutlined,
  UserOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

const { Option } = Select;

const initialUsers = [
  {
    id: 1,
    name: "Nguyen Van A",
    dob: "2000-01-15",
    bloodType: "A+",
    gender: "Male",
    address: "Hanoi",
    role: "Admin",
  },
  {
    id: 2,
    name: "Tran Thi B",
    dob: "1998-06-20",
    bloodType: "O-",
    gender: "Female",
    address: "Da Nang",
    role: "User",
  },
];

const genderColor = {
  Male: "blue",
  Female: "magenta",
  Other: "gold",
};

const roleColor = {
  Admin: "red",
  User: "green",
  Doctor: "geekblue",
};

const ManageUser = () => {
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  //export
  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users.xlsx");
  };

  // const openAddModal = () => {
  //   setEditingUser(null);
  //   form.resetFields();
  //   setIsModalOpen(true);
  // };

  const openEditModal = (user) => {
    setEditingUser(user);
    form.setFieldsValue({ ...user, dob: dayjs(user.dob) });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    message.success("Deleted successfully!");
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const formatted = {
        ...values,
        dob: values.dob.format("YYYY-MM-DD"),
      };

      if (editingUser) {
        setUsers(
          users.map((u) =>
            u.id === editingUser.id ? { ...formatted, id: editingUser.id } : u
          )
        );
        message.success("Updated successfully!");
      } else {
        const newId = Math.max(...users.map((u) => u.id)) + 1;
        setUsers([...users, { ...formatted, id: newId }]);
        message.success("Added new user successfully!");
      }

      setIsModalOpen(false);
      form.resetFields();
    });
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span>
          <UserOutlined style={{ color: "#1677ff", marginRight: 6 }} />
          {text}
        </span>
      ),
    },
    { title: "Date of Birth", dataIndex: "dob", key: "dob" },
    { title: "Blood Type", dataIndex: "bloodType", key: "bloodType" },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => (
        <Tag
          color={genderColor[gender] || "default"}
          style={{ fontWeight: 500 }}
        >
          {gender}
        </Tag>
      ),
    },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={roleColor[role] || "default"} style={{ fontWeight: 500 }}>
          {role}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          <Tooltip title="Edit">
            <Button
              type="text"
              icon={<EditOutlined style={{ color: "#52c41a" }} />}
              onClick={() => openEditModal(record)}
            />
          </Tooltip>
          <Popconfirm
            title="Are you sure to delete?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete">
              <Button
                type="text"
                icon={<DeleteOutlined style={{ color: "#ff4d4f" }} />}
              />
            </Tooltip>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        padding: 24,
        borderRadius: 12,
        boxShadow: "0 2px 8px #f0f1f2",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2 style={{ fontSize: 22, margin: 0, fontWeight: 600 }}>
          User Management
        </h2>
        <div style={{ display: "flex", gap: 8 }}>
          {/* <Button
            type="primary"
            icon={<UserAddOutlined />}
            onClick={openAddModal}
          >
            Add User
          </Button> */}
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            style={{
              background: "#e11d48", // màu hồng đậm (rose-600)
              border: "none",
              color: "#fff",
              fontWeight: 500,
              boxShadow: "0 2px 8px #fce7ef", // shadow hồng nhạt
            }}
            onClick={handleExportExcel}
          >
            Export to Excel
          </Button>
        </div>
      </div>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 6 }}
        bordered
      />

      <Modal
        title={editingUser ? "Update User" : "Add User"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSubmit}
        okText="Save"
        cancelText="Cancel"
        destroyOnClose
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            name="name"
            label="Full Name"
            rules={[{ required: true, message: "Required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true }]}
          >
            <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="bloodType"
            label="Blood Type"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select blood type">
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                (type) => (
                  <Option key={type} value={type}>
                    {type}
                  </Option>
                )
              )}
            </Select>
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select placeholder="Select gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Role" rules={[{ required: true }]}>
            <Select placeholder="Select role">
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
              <Option value="Doctor">Doctor</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageUser;