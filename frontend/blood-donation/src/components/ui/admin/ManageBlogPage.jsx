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
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  FileAddOutlined,
  FileTextOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { manageBlogService } from "../../../services/manageBlogService";

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

const ManageBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  // Assume userLogin info is stored in localStorage as 'userLogin' (adjust if needed)
  const userLogin = JSON.parse(localStorage.getItem('userLogin') || '{}');

  useEffect(() => {
    manageBlogService.getBlogs(1, 20).then(res => {
      setBlogs(Array.isArray(res.data?.data?.items) ? res.data?.data?.items : []);
    });
  }, []);

  const openAddModal = () => {
    setEditingBlog(null);
    form.resetFields();
    setIsModalOpen(true);
    setFileList([]);
  };

  const openEditModal = (blog) => {
    setEditingBlog(blog);
    form.setFieldsValue({ ...blog, date: dayjs(blog.date) });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    manageBlogService.deleteBlog(id)
      .then(() => {   
        message.success("Blog deleted successfully!");
        // Sau khi xóa, gọi lại API để lấy danh sách blog mới nhất
        manageBlogService.getBlogs(1, 20).then(res => {
          setBlogs(Array.isArray(res.data?.data?.items) ? res.data?.data?.items : []);
        });
      })
      .catch(() => message.error("Failed to delete blog!"));
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      // Chuẩn bị dữ liệu gửi đi
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", values.content);
      if (fileList[0]) {
        formData.append("image", fileList[0].originFileObj);
      }
      // Set author and date
      formData.append("author", userLogin.name || "");
      formData.append("date", dayjs().format("YYYY-MM-DD"));
      // Gọi API tạo blog
      manageBlogService.createBlog(formData)
        .then(() => {
          message.success("New blog added successfully!");
          setIsModalOpen(false);
          form.resetFields();
          setFileList([]);
          // Reload blogs
          manageBlogService.getBlogs(1, 20).then(res => {
            setBlogs(Array.isArray(res.data?.data?.items) ? res.data?.data?.items : []);
          });
        })
        .catch(() => message.error("Failed to add blog!"));
    });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      render: (text) => <span style={{ maxWidth: 300, display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{text}</span>
    },
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (url) => url ? <img src={url} alt="blog" style={{ width: 80, height: 60, objectFit: 'cover', borderRadius: 6 }} /> : null
    },
    // {
    //   title: "Author",
    //   dataIndex: "author",
    //   key: "author",
    // },
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
            onConfirm={() => {
              console.log(record);
              handleDelete(record.postId)
            }}
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
          style={{ background: "#3388ff", color: "white" }}
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
        onCancel={() => { setIsModalOpen(false); setFileList([]); }}
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