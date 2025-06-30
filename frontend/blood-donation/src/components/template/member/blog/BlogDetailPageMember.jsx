import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Tag, Button, Row, Col } from "antd";
import { articles } from "../../../../assets/blog"; // mock data, replace with API if needed

const { Title, Paragraph, Text } = Typography;

export const BlogDetailPageMember = () => {
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
        marginBottom: 60,
      }}
    >
      

      <Row gutter={[32, 32]}>
        <Col xs={24} md={14}>
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
        </Col>
        <Col xs={24} md={10}>
          <Tag
            color="#f8cfd3"
            style={{
              borderRadius: 20,
              padding: "4px 16px",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            {blog.label}
          </Tag>
          <Title level={2} style={{ marginTop: 16 }}>{blog.title}</Title>
          <Paragraph type="secondary" style={{ marginTop: 8 }}>
            <Text type="secondary">🗓 {blog.date}</Text>
          </Paragraph>
          <Paragraph style={{ marginTop: 24, fontSize: 16, lineHeight: 1.8 }}>
            {blog.description}
          </Paragraph>
        </Col>
      </Row>

      <div style={{ marginTop: 40 }}>
        <Title level={4}>THE IDEA</Title>
        <Paragraph style={{ fontSize: 15, lineHeight: "1.8em" }}>
          {blog.content ||
            "This blog post is currently missing detailed content. You can enrich it by editing this post from your dashboard."}
        </Paragraph>
      </div>

      <Button
        type="link"
        onClick={() => navigate(-1)}
        style={{ marginBottom: 20, fontWeight: 500 }}
      >
         Back 
      </Button>
    </div>
  );
};
