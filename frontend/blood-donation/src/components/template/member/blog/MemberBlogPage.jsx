import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Modal,
  Row,
  Tag,
  Typography,
  Input,
  Form,
  message,
  Popconfirm,
  Pagination,
  Spin,
  Image,
} from "antd";
import {
  HeartOutlined,
  HeartFilled,
  MessageOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { blogService } from "../../../../services/blogService";
import "../../../../css/member/MemberBlogPage.css";

const { Title, Paragraph } = Typography;

export const MemberBlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeView, setActiveView] = useState("ALL");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const currentUserId = localStorage.getItem("userId");

  useEffect(() => {
    fetchBlogs();
  }, [activeView, currentPage]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      let data;
      if (activeView === "ALL") {
        data = await blogService.getAllBlog();
      } else {
        data = await blogService.getBlogById(currentUserId);
      }

      const processedData = data.map((item) => ({
        _id: item._id || item.id || item.postId, 
        title: item.title || "Untitled Blog",
        content: item.content || "",
        description:
          item.description ||
          (item.content
            ? item.content.substring(0, 100) + "..."
            : "No description"),
        imageUrl:
          item.imageUrl || item.image || "https://via.placeholder.com/400x200",
        createdAt: item.publishedDate || new Date().toISOString(),
        authorId: item.authorId || item.userId || "unknown", 
        likes: item.likes || [],
        likedBy: item.likedBy || [],
        comments: item.comments || [],
        label: item.label || "General",
      }));

      console.log({ processedData });

      setArticles(processedData);
    } catch (error) {
      console.error("Fetch error:", error);
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredArticles =
    activeView === "ALL"
      ? articles
      : articles.filter((item) => item.authorId === currentUserId);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleCreateOrEdit = async (values) => {
    try {
      setLoading(true);
      const blogData = {
        title: values.title,
        content: values.content,
        imageUrl: values.imageUrl,
        authorId: currentUserId,
      };

      if (editingArticle) {
        await blogService.updateBlog(editingArticle._id, blogData);
        message.success("Blog updated successfully!");
      } else {
        await blogService.createBlog(blogData);
        message.success("Blog created successfully!");
      }

      await fetchBlogs();
      setModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Error:", error);
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await blogService.deleteBlog(id);
      message.success("Blog deleted successfully!");
      await fetchBlogs();
    } catch (error) {
      console.error("Error:", error);
      message.error(error.message);
    }
  };

  const openEditModal = (article) => {
    setEditingArticle(article);
    form.setFieldsValue({
      title: article.title,
      content: article.content,
      imageUrl: article.imageUrl,
    });
    setModalOpen(true);
  };

  const toggleLike = async (blogId, e) => {
    e.stopPropagation();
    try {
      const article = articles.find((item) => item._id === blogId);
      const isLiked = article.likedBy.includes(currentUserId);

      if (isLiked) {
        await blogService.unlikeBlog(blogId, currentUserId);
      } else {
        await blogService.likeBlog(blogId, currentUserId);
      }

      await fetchBlogs();
    } catch (error) {
      console.error("Error:", error);
      message.error(error.message);
    }
  };

  if (loading && articles.length === 0) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "100px" }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px 60px",
        background: "#fff",
        borderRadius: 50,
        margin: "40px 0",
      }}
    >
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <div
          style={{
            display: "inline-flex",
            background: "#f3f3f3",
            borderRadius: 999,
            padding: 4,
          }}
        >
          {[
            { key: "ALL", label: "All Blogs" },
            { key: "MY", label: "My Blogs" },
          ].map((tab) => (
            <Button
              key={tab.key}
              onClick={() => {
                setActiveView(tab.key);
                setCurrentPage(1);
              }}
              style={{
                fontFamily: "Raleway",
                border: "none",
                backgroundColor:
                  activeView === tab.key ? "#bd0026" : "transparent",
                color: activeView === tab.key ? "white" : "#444",
                padding: "6px 20px",
                borderRadius: 999,
                fontWeight: activeView === tab.key ? "bold" : "normal",
              }}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            form.resetFields();
            setEditingArticle(null);
            setModalOpen(true);
          }}
          style={{
            backgroundColor: "#bd0026",
            borderRadius: 50,
            height: 40,
            fontWeight: 600,
          }}
        >
          Create Blog
        </Button>
      </Row>

      <Row gutter={[24, 32]}>
        {paginatedArticles.map((item) => (
          <Col key={item._id} xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable
              onClick={() => navigate(`/app/member/blogs/${item._id}`)}
              cover={
                <div style={{ position: "relative", height: "200px" }}>
                  <Image
                    alt="blog cover"
                    src={item.imageUrl}
                    preview={false}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    fallback="https://via.placeholder.com/400x200"
                  />
                  <Tag
                    color="white"
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      borderRadius: 20,
                      padding: "2px 12px",
                      fontWeight: 500,
                      color: "black",
                      border: "none",
                    }}
                  >
                    {item.label}
                  </Tag>
                </div>
              }
              style={{
                borderRadius: 12,
                overflow: "hidden",
                border: "none",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fffafa",
              }}
              bodyStyle={{
                padding: 16,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                minHeight: 180,
              }}
            >
              <div>
                <Paragraph style={{ fontSize: 12, marginBottom: 6 }}>
                  {new Date(item.createdAt).toLocaleDateString()}
                </Paragraph>
                <Title level={5} style={{ marginBottom: 8 }}>
                  {item.title}
                </Title>
                <Paragraph style={{ color: "#666" }}>
                  {item.description}
                </Paragraph>
              </div>

              <div>
                <Row
                  justify="space-between"
                  align="middle"
                  style={{
                    marginTop: 16,
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: 12,
                  }}
                >
                  <Col>
                    <Button
                      type="text"
                      icon={
                        item.likedBy.includes(currentUserId) ? (
                          <HeartFilled style={{ color: "#bd0026" }} />
                        ) : (
                          <HeartOutlined style={{ color: "#bd0026" }} />
                        )
                      }
                      onClick={(e) => toggleLike(item._id, e)}
                    >
                      {item.likes.length}
                    </Button>
                    <Button
                      type="text"
                      icon={<MessageOutlined style={{ color: "#555" }} />}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/app/member/blogs/${item._id}#comments`);
                      }}
                    >
                      {item.comments.length}
                    </Button>
                  </Col>
                  {item.authorId === currentUserId && (
                    <Row gutter={8}>
                      <Col>
                        <Button
                          size="small"
                          style={{
                            backgroundColor: "#f0f0f0",
                            borderRadius: 8,
                            fontWeight: 500,
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            openEditModal(item);
                          }}
                        >
                          Edit
                        </Button>
                      </Col>
                      <Col>
                        <Popconfirm
                          title="Are you sure to delete this blog?"
                          onConfirm={(e) => {
                            e?.stopPropagation();
                            handleDelete(item._id);
                          }}
                          onCancel={(e) => e?.stopPropagation()}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Button
                            size="small"
                            danger
                            style={{ borderRadius: 8, fontWeight: 500 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Delete
                          </Button>
                        </Popconfirm>
                      </Col>
                    </Row>
                  )}
                </Row>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={editingArticle ? "Edit Blog" : "Create Blog"}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => form.submit()}
        confirmLoading={loading}
        okButtonProps={{
          style: {
            backgroundColor: "#bd0026",
            borderRadius: 50,
            fontWeight: 600,
          },
        }}
        cancelButtonProps={{
          style: {
            borderRadius: 50,
          },
        }}
      >
        <Form form={form} layout="vertical" onFinish={handleCreateOrEdit}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input blog title!" }]}
          >
            <Input placeholder="Enter blog title" />
          </Form.Item>

          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: "Please input blog content!" }]}
          >
            <Input.TextArea rows={6} placeholder="Enter blog content..." />
          </Form.Item>

          <Form.Item
            name="imageUrl"
            label="Image URL"
            rules={[
              { required: true, message: "Please input image URL!" },
              { type: "url", message: "Please enter a valid URL" },
            ]}
          >
            <Input placeholder="https://example.com/image.jpg" />
          </Form.Item>
        </Form>
      </Modal>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 32,
        }}
      >
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredArticles.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
          style={{ fontFamily: "Raleway" }}
        />
      </div>
    </div>
  );
};
