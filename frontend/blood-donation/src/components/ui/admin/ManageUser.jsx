import React, { useState, useEffect } from "react";
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
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { manageUserService } from "../../../services/manageUserService";
import { toast } from "react-toastify";

const { Option } = Select;

const ROLE_MAP = { Admin: 1, Staff: 2, Member: 3 };
const GENDER_MAP = { Male: 1, Female: 2 };
const STATUS_MAP = { Active: 1, InActive: 2 };
const ROLE_MAP_REVERSE = { 1: 'Admin', 2: 'Staff', 3: 'Member' };
const GENDER_MAP_REVERSE = { 1: 'Male', 2: 'Female' };
const STATUS_MAP_REVERSE = { 1: 'Active', 2: 'InActive' };

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    manageUserService.getUsers(1, 20).then(res => {
      setUsers(Array.isArray(res.data?.data?.items) ? res.data.data.items : []);
    });
  }, []);

  const handleExportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users.xlsx");
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    form.setFieldsValue({
      fullName: user?.name ?? '',
      email: user?.email ?? '',
      role: ROLE_MAP_REVERSE?.[user?.role] || '',
      status: STATUS_MAP_REVERSE?.[user?.status] || '',
      gender: GENDER_MAP_REVERSE?.[user?.gender] || '',
      bloodType: user?.bloodType ?? '',
      dateOfBirth: user?.dateOfBirth ? dayjs(user?.dateOfBirth) : null,
      address: user?.address ?? '',
      phone: user?.phone ?? '',
      isDonor: user?.isDonor ?? false,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    toast.success("Deleted successfully!");
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const payload = {
        userId: editingUser.userId || editingUser.id,
        fullName: values.fullName,
        email: values.email,
        role: ROLE_MAP[values.role],
        status: STATUS_MAP[values.status],
        bloodType: values.bloodType,
        dateOfBirth: values.dateOfBirth.format('YYYY-MM-DD'),
        gender: GENDER_MAP[values.gender],
        address: values.address,
        phone: values.phone,
        isDonor: values.isDonor,
      };
      await manageUserService.updateUser(payload);
      setUsers(users.map(u => (u.userId === payload.userId || u.id === payload.userId) ? { ...u, ...payload } : u));
      toast.success('Updated successfully!');
      setIsModalOpen(false);
      form.resetFields();
    } catch (err) {
      toast.error('Update failed!');
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Role", dataIndex: "role", key: "role", render: (role) => ROLE_MAP_REVERSE[role] || 'Unknown' },
    { title: "Gender", dataIndex: "gender", key: "gender", render: (g) => GENDER_MAP_REVERSE[g] || 'Other' },
    { title: "Date of Birth", dataIndex: "dateOfBirth", key: "dateOfBirth" },
    { title: "Is Donor", dataIndex: "isDonor", key: "isDonor", render: (d) => d ? "Yes" : "No" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
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
    <div style={{ background: "#fff", padding: 24, borderRadius: 12, boxShadow: "0 2px 8px #f0f1f2" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2 style={{ fontSize: 22, margin: 0, fontWeight: 600 }}>User Management</h2>
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          style={{
            background: "#ff587c",
            border: "none",
            color: "#fff",
            fontWeight: 500,
            boxShadow: "0 2px 8px #fce7ef",
          }}
          onClick={handleExportExcel}
        >
          Export to Excel
        </Button>
      </div>
      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 6 }}
        bordered
      />

      <Modal
        title="Update User"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSubmit}
        okText="Save"
        cancelText="Cancel"
        destroyOnClose
      >
        <Form layout="vertical" form={form}>
          <Form.Item name="fullName" label="Full Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="dateOfBirth" label="Date of Birth" rules={[{ required: true }]}>
            <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="bloodType" label="Blood Type" disabled rules={[{ required: true }]}>
            <Select placeholder="Select blood type">
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(type => (
                <Option key={type} value={type}>{type}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select placeholder="Select gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
          <Form.Item name="address" label="Address" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Role" rules={[{ required: true }]}>
            <Select placeholder="Select role">
              <Option value="Admin">Admin</Option>
              <Option value="Staff">Staff</Option>
              <Option value="Member">Member</Option>
            </Select>
          </Form.Item>
          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Select placeholder="Select status">
              <Option value="Active">Active</Option>
              <Option value="InActive">InActive</Option>
            </Select>
          </Form.Item>
          <Form.Item name="isDonor" label="Is Donor">
            <Select>
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageUser;
