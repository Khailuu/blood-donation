import React, { useState } from "react";
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
  FileAddOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

const { Option } = Select;

const statusColor = {
  Public: "green",
  Hidden: "volcano",
};

const categoryColor = {
  Health: "blue",
  Guideline: "purple",
  Announcement: "gold",
};

const initialBlogs = [
  {
    id: 1,
    title: "The Importance of Blood Donation",
    author: "Admin",
    date: "2024-06-15",
    category: "Health",
    status: "Public",
  },
  {
    id: 2,
    title: "How to Prepare Before Donating Blood",
    author: "Dr. Lan",
    date: "2024-06-10",
    category: "Guideline",
    status: "Hidden",
  },
];

const ManageBlogPage = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [form] = Form.useForm();

  const openAddModal = () => {
    setEditingBlog(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const openEditModal = (blog) => {
    setEditingBlog(blog);
    form.setFieldsValue({ ...blog, date: dayjs(blog.date) });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
    message.success("Blog deleted successfully!");
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const newData = {
        ...values,
        date: values.date.format("YYYY-MM-DD"),
      };

      if (editingBlog) {
        setBlogs(
          blogs.map((b) => (b.id === editingBlog.id ? { ...newData, id: b.id } : b))
        );
        message.success("Blog updated successfully!");
      } else {
        const newId = Math.max(...blogs.map((b) => b.id)) + 1;
        setBlogs([...blogs, { ...newData, id: newId }]);
        message.success("New blog added successfully!");
      }

      setIsModalOpen(false);
      form.resetFields();
    });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => (
        <span>
          <FileTextOutlined style={{ color: "#1677ff", marginRight: 6 }} />
          {text}
        </span>
      ),
    },
    { title: "Author", dataIndex: "author", key: "author" },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => (
        <Tag color={categoryColor[category] || "default"} style={{ fontWeight: 500 }}>
          {category}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={statusColor[status] || "default"} style={{ fontWeight: 500 }}>
          {status}
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
            title="Are you sure to delete this blog?"
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
        <h2 style={{ fontSize: 22, margin: 0, fontWeight: 600 }}>Blog Management</h2>
        <Button
          type="primary"
          icon={<FileAddOutlined />}
          onClick={openAddModal}
        >
          Add Blog
        </Button>
      </div>
      <Table
        dataSource={blogs}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 6 }}
        bordered
      />

      <Modal
        title={editingBlog ? "Update Blog" : "Add New Blog"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSubmit}
        okText="Save"
        cancelText="Cancel"
        destroyOnClose
      >
        <Form layout="vertical" form={form}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="author" label="Author" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="category" label="Category" rules={[{ required: true }]}>
            <Select placeholder="Select category">
              <Option value="Health">Health</Option>
              <Option value="Guideline">Guideline</Option>
              <Option value="Announcement">Announcement</Option>
            </Select>
          </Form.Item>
          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Select placeholder="Select status">
              <Option value="Public">Public</Option>
              <Option value="Hidden">Hidden</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageBlogPage;