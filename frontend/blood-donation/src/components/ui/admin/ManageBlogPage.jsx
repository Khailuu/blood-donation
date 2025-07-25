import React, { useState, useEffect } from "react";
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
  Upload,
  Spin,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FileAddOutlined,
  FileTextOutlined,
  UploadOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { manageBlogService } from "../../../services/manageBlogService";

const { Option } = Select;

const ManageBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  const userLogin = JSON.parse(localStorage.getItem('userLogin') || '{}');

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await manageBlogService.getBlogs(1, 20);
      setBlogs(Array.isArray(res.data?.data?.items) ? res.data?.data?.items : []);
    } catch {
      message.error("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const openEditModal = (blog) => {
    setEditingBlog(blog);
    form.setFieldsValue({ ...blog, date: dayjs(blog.date) });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    manageBlogService.deleteBlog(id)
      .then(() => {
        message.success("Blog deleted successfully!");
        fetchBlogs(); // gọi lại dữ liệu
      })
      .catch(() => message.error("Failed to delete blog!"));
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", values.content);
      if (fileList[0]) {
        formData.append("image", fileList[0].originFileObj);
      }
      formData.append("author", userLogin.name || "");
      formData.append("date", dayjs().format("YYYY-MM-DD"));

      manageBlogService.createBlog(formData)
        .then(() => {
          message.success("New blog added successfully!");
          setIsModalOpen(false);
          form.resetFields();
          setFileList([]);
          fetchBlogs();
        })
        .catch(() => message.error("Failed to add blog!"));
    });
  };

  const columns = [
    {
      title: "No.",
      key: "index",
      render: (_, __, index) => index + 1,
      width: 60,
      align: "center",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      render: (text) => (
        <span style={{ maxWidth: 300, display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {text}
        </span>
      )
    },
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (url) => url ? (
        <img src={url} alt="blog" style={{ width: 80, height: 60, objectFit: 'cover', borderRadius: 6 }} />
      ) : null
    },
    {
      title: "Date",
      dataIndex: "publishedDate",
      key: "publishedDate",
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
            onConfirm={() => handleDelete(record.postId)}
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
          icon={<ReloadOutlined spin={loading} />}
          onClick={fetchBlogs}
          style={{
            marginRight: 10,
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
          {loading ? <Spin size="small" style={{ marginLeft: 8 }} /> : "Refresh"}
        </Button>
      </div>

      <Table
        dataSource={blogs}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 6 }}
        bordered
        loading={loading}
      />

      <Modal
        title={editingBlog ? "Update Blog" : "Add New Blog"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setFileList([]);
        }}
        onOk={handleSubmit}
        okText="Save"
        cancelText="Cancel"
        destroyOnClose
      >
        <Form layout="vertical" form={form}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Content" rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Image" required>
            <Upload
              beforeUpload={() => false}
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              maxCount={1}
              accept="image/*"
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Select Image</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageBlogPage;
