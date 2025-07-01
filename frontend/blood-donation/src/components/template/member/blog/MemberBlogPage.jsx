import React, { useState } from "react";
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
} from "antd";
import {
  HeartOutlined,
  HeartFilled,
  MessageOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { articles as mockArticles } from "../../../../assets/blog";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;
const currentUserId = "user123";

export const MemberBlogPage = () => {
  const [articles, setArticles] = useState(
    mockArticles.map((item) => ({ ...item, likedBy: [] }))
  );
  const [activeView, setActiveView] = useState("ALL");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const filteredArticles =
    activeView === "ALL"
      ? articles
      : articles.filter((item) => item.authorId === currentUserId);

  const handleCreateOrEdit = (values) => {
    if (editingArticle) {
      setArticles((prev) =>
        prev.map((item) =>
          item.key === editingArticle.key ? { ...item, ...values } : item
        )
      );
      message.success("Blog updated!");
    } else {
      const newBlog = {
        ...values,
        key: Date.now().toString(),
        authorId: currentUserId,
        date: new Date().toLocaleDateString(),
        label: values.label || "Uncategorized",
        image: values.image || "https://via.placeholder.com/400x200",
        likes: 0,
        comments: 0,
        likedBy: [],
      };
      setArticles((prev) => [newBlog, ...prev]);
      message.success("Blog created!");
    }
    form.resetFields();
    setEditingArticle(null);
    setModalOpen(false);
  };

  const handleDelete = (key) => {
    setArticles((prev) => prev.filter((item) => item.key !== key));
    message.success("Blog deleted.");
  };

  const openEditModal = (article) => {
    setEditingArticle(article);
    form.setFieldsValue(article);
    setModalOpen(true);
  };

  const toggleLike = (key) => {
    setArticles((prev) =>
      prev.map((item) => {
        if (item.key === key) {
          const liked = item.likedBy.includes(currentUserId);
          return {
            ...item,
            likes: liked ? item.likes - 1 : item.likes + 1,
            likedBy: liked
              ? item.likedBy.filter((id) => id !== currentUserId)
              : [...item.likedBy, currentUserId],
          };
        }
        return item;
      })
    );
  };

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
              onClick={() => setActiveView(tab.key)}
              style={{
                fontFamily: "Raleway",
                border: "none",
                backgroundColor:
                  activeView === tab.key ? "#bd0026" : "transparent",
                color: activeView === tab.key ? "white" : "#444",
                padding: "6px 20px",
                borderRadius: 999,
                fontWeight: activeView === tab.key ? "bold" : "normal",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <div>
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
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Create Blog
          </Button>
        </div>
      </Row>

      <Row gutter={[24, 32]}>
        {filteredArticles.map((item) => (
          <Col key={item.key} xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable
              onClick={() => navigate(`/app/member/blogs/${item.key}`)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              cover={
                <div style={{ position: "relative" }}>
                  <img
                    alt="article"
                    src={item.image}
                    style={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      transition: "transform 0.3s",
                    }}
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
                transition: "all 0.3s",
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
                  {item.date}
                </Paragraph>
                <Paragraph
                  strong
                  style={{ fontWeight: "bold", marginBottom: 8, minHeight: 44 }}
                >
                  {item.title}
                </Paragraph>
              </div>
              {/* <Paragraph
                type="secondary"
                style={{ fontSize: 14, marginTop: 12 }}
              >
                {item.description}
              </Paragraph> */}

              <div style={{ marginTop: "auto" }}>
                <Row
                  justify="space-between"
                  align="middle"
                  style={{ marginTop: 16 }}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(item.key);
                      }}
                    >
                      {item.likes || 0}
                    </Button>
                    <Button
                      type="text"
                      icon={<MessageOutlined style={{ color: "#555" }} />}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/app/member/blogs/${item.key}#comments`);
                      }}
                    >
                      {item.comments || 0}
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
                          onConfirm={() => handleDelete(item.key)}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Button
                            size="small"
                            danger
                            style={{
                              borderRadius: 8,
                              fontWeight: 500,
                            }}
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
        title={
          <Title level={4} style={{ margin: 0 }}>
            {editingArticle ? "Edit Blog" : "Create Blog"}
          </Title>
        }
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => form.submit()}
        okText="Save"
        cancelText="Cancel"
        okButtonProps={{
          style: {
            backgroundColor: "#bd0026",
            borderRadius: 50,
            fontWeight: 600,
          },
        }}
      >
        <Form layout="vertical" form={form} onFinish={handleCreateOrEdit}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input placeholder="Enter blog title" />
          </Form.Item>
          <Form.Item name="description" label="Short Description">
            <Input.TextArea
              rows={3}
              placeholder="Enter a short blog summary..."
            />
          </Form.Item>
          <Form.Item name="label" label="Category">
            <Input placeholder="e.g. BLOG / SUCCESS STORIES" />
          </Form.Item>
          <Form.Item name="image" label="Image URL">
            <Input placeholder="https://example.com/image.jpg" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
