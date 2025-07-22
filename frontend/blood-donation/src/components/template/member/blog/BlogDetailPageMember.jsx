// src/pages/BlogDetailPageMember.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Row,
  Col,
  Divider,
  List,
  Input,
  message,
  Spin,
  Avatar,
} from "antd";
import { Comment } from '@ant-design/compatible';
import { MessageOutlined, UserOutlined } from "@ant-design/icons";
import { blogService } from "../../../../services/blogService";

// Mock comments since comment functionality is not supported
const mockComments = [
  {
    author: "Nguyễn Văn A",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: "Bài viết rất hay và ý nghĩa!",
    datetime: "2023-05-15 14:30",
  },
  {
    author: "Trần Thị B",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: "Cảm ơn tác giả đã chia sẻ thông tin hữu ích này.",
    datetime: "2023-05-16 09:15",
  },
];

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

export const BlogDetailPageMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [comments] = useState(mockComments);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const data = await blogService.getAllBlog();
      const processedData = data.map((item) => ({
        _id: item.postId || Math.random().toString(),
        title: item.title || "Untitled Blog",
        content: item.content || "",
        description: item.content
          ? item.content.substring(0, 100) + "..."
          : "No description",
        imageUrl: item.imageUrl || "https://via.placeholder.com/400x200",
        createdAt: item.publishedDate || new Date().toISOString(),
        authorId: item.userId || "unknown",
        authorName: item.authorName || "Anonymous",
        likes: item.likes || [],
        likedBy: item.likedBy || [],
        comments: item.comments || [],
        label: "General",
      }));

      const selectedBlog = processedData.find((item) => item._id === id);
      if (!selectedBlog) {
        message.error("Blog not found!");
        navigate("/app/member/blogs");
        return;
      }

      setBlog(selectedBlog);
    } catch (error) {
      console.error("Fetch error:", error);
      message.error(error.message || "Failed to fetch blog");
      navigate("/app/member/blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleCommentSubmit = () => {
    message.info("Comment feature not yet implemented");
    setNewComment("");
  };

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "100px" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div
      style={{
        padding: "40px 80px",
        background: "#fff",
        borderRadius: 30,
        margin: "40px",
        fontFamily: "Raleway",
      }}
    >
      <Row gutter={[32, 32]}>
        <Col xs={24} md={14}>
          <img
            src={blog.imageUrl}
            alt="blog-cover"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 20,
              marginBottom: 24,
              objectFit: "cover",
            }}
          />
        </Col>
        <Col xs={24} md={10}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Text style={{ fontFamily: "Raleway", fontSize: "16px" }}>
                By {blog.authorName}
              </Text>
              <Divider style={{ backgroundColor: "black" }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Title style={{ fontFamily: "Raleway", fontSize: "20px" }}>
                  Date
                </Title>
                <Paragraph type="secondary">
                  <Text type="secondary" style={{ fontFamily: "Raleway" }}>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </Text>
                </Paragraph>
              </div>
            </div>
          </div>
          <Title
            level={1}
            style={{ marginTop: 16, fontFamily: "Raleway", fontWeight: 600 }}
          >
            {blog.title}
          </Title>
          <Paragraph style={{ marginTop: 24, fontSize: 16, lineHeight: 1.8 }}>
            {blog.content}
          </Paragraph>
          <Row gutter={16} align="middle">
            <Col>
              <Button
                type="text"
                icon={<MessageOutlined style={{ color: "#555" }} />}
                onClick={() => document.getElementById("comments")?.scrollIntoView()}
              >
                {comments.length} Comments
              </Button>
            </Col>
          </Row>
          <Button
            type="link"
            onClick={() => navigate("/app/member/blogs")}
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "15px",
              backgroundColor: "#bd0026",
              borderRadius: 50,
              height: 40,
              fontWeight: 600,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s",
              marginTop: "40px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Back to Blogs
          </Button>
        </Col>
      </Row>

      <Divider
        id="comments"
        orientation="left"
        style={{ fontSize: 24, fontWeight: 600, marginTop: 60 }}
      >
        <MessageOutlined style={{ marginRight: 10 }} />
        Comments ({comments.length})
      </Divider>

      <List
        className="comment-list"
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item) => (
          <li>
            <Comment
              author={<a>{item.author}</a>}
              avatar={<Avatar src={item.avatar} icon={<UserOutlined />} />}
              content={<p>{item.content}</p>}
              datetime={<span>{item.datetime}</span>}
            />
          </li>
        )}
        style={{ marginTop: 30 }}
      />

      <div style={{ marginTop: 40 }}>
        <Title level={4} style={{ fontFamily: "Raleway" }}>
          Leave a comment
        </Title>
        <TextArea
          rows={4}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
          style={{ marginBottom: 16 }}
        />
        <Button
          type="primary"
          onClick={handleCommentSubmit}
          style={{
            backgroundColor: "#bd0026",
            borderRadius: 50,
            fontWeight: 600,
          }}
        >
          Post Comment
        </Button>
      </div>
    </div>
  );
};