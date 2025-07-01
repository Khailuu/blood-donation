import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Row,
  Col,
  Divider,
  List,
  Avatar,
} from "antd";
import { articles } from "../../../../assets/blog";
import { banner2 } from "../../../../assets";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

// Mock comments data
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

export const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = articles.find((item) => item.key === parseInt(id));

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
      }}
    >
      <Col gutter={[32, 32]}>
        <Row xs={24} md={14}>
          <img
            src={blog.image}
            alt="blog-cover"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 20,
              marginBottom: 24,
              objectFit: "cover",
            }}
          />
        </Row>

        <Row
          xs={24}
          md={10}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Col md={4}>
            <img src={banner2} alt="" style={{ width: "40%" }} />
            <Divider style={{ backgroundColor: "black" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Title style={{ fontFamily: "Raleway", fontSize: "20px" }}>
                Date
              </Title>
              <Paragraph type="secondary">
                <Text type="secondary" style={{ fontFamily: "Raleway" }}>
                  {blog.date}
                </Text>
              </Paragraph>
            </div>
          </Col>

          <Col md={17}>
            <Title
              level={1}
              style={{
                marginTop: 16,
                fontFamily: "Raleway",
                fontWeight: 600,
              }}
            >
              {blog.title}
            </Title>

            <Paragraph
              style={{ marginTop: 24, fontSize: 16, lineHeight: 1.8 }}
            >
              {blog.description}
            </Paragraph>

            <Button
              type="link"
              onClick={() => navigate(-1)}
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(0.95)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Back to Blogs
            </Button>
          </Col>
        </Row>
      </Col>

      {/* Comments Section */}
      <Divider
        orientation="left"
        style={{ fontSize: 24, fontWeight: 600, marginTop: 60 }}
      >
        <MessageOutlined style={{ marginRight: 10 }} />
        Comments ({mockComments.length})
      </Divider>

      <List
        className="comment-list"
        itemLayout="horizontal"
        dataSource={mockComments}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} icon={<UserOutlined />} />}
              title={<a>{item.author}</a>}
              description={item.content}
            />
            <div style={{ fontSize: 12, color: "#888" }}>{item.datetime}</div>
          </List.Item>
        )}
        style={{ marginTop: 30 }}
      />
    </div>
  );
};
