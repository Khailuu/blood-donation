import React, { useState, useEffect } from "react";
import { Card, Col, Row, Tag, Typography, Button, Pagination } from "antd";
import { HeartOutlined, HeartFilled, MessageOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { articles, categories } from "../../../../assets/blog";
import "../../../../css/guest/BlogSection.css"

const { Title, Paragraph } = Typography;

export const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const navigate = useNavigate();

  const filteredArticles =
    selectedCategory === "ALL"
      ? articles
      : articles.filter((item) => item.label === selectedCategory);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <div
      style={{
        padding: "40px 60px",
        background: "#fff",
        borderRadius: "50px",
        marginBottom: "40px",
      }}
    >
      <Title level={2} style={{ fontFamily: "raleway", fontWeight: "bold" }}>
        CATEGORIES
      </Title>

      <div
        style={{ marginBottom: 40, display: "flex", gap: 12, flexWrap: "wrap" }}
      >
        {categories.map((cat) => (
          <Tag
            className="tag-cate"
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            color={cat === selectedCategory ? "#f8cfd3" : "white"}
            style={{
              border: "1px solid black",
              borderRadius: 25,
              padding: "4px 20px",
              fontSize: 14,
              cursor: "pointer",
              color: "black",
              userSelect: "none",
            }}
          >
            {cat}
          </Tag>
        ))}
      </div>

      <Row gutter={[24, 32]}>
        {paginatedArticles.map((item) => (
          <Col key={item.key} xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable
              onClick={() => navigate(`/blog/${item.key}`)}
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
                    }}
                  />
                  <Tag
                    color="white"
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      border: "1px solid black",
                      borderRadius: 20,
                      padding: "2px 12px",
                      fontWeight: 500,
                      color: "black",
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
                  style={{ 
                    fontWeight: "bold",
                    marginBottom: 8,
                    minHeight: 44, 
                  }}
                >
                  {item.title}
                </Paragraph>
              </div>

              <div style={{ marginTop: "auto" }}>
                <Row 
                  align="middle" 
                  style={{ 
                    marginTop: 16,
                    borderTop: "1px solid black",
                    paddingTop: 12,
                  }}
                >
                  <Button
                    type="text"
                    icon={
                      item.likedBy?.includes("user123") ? (
                        <HeartFilled style={{ color: "#bd0026" }} />
                      ) : (
                        <HeartOutlined style={{ color: "#bd0026" }} />
                      )
                    }
                    disabled
                    style={{ 
                      cursor: "default",
                      padding: "0 8px",
                    }}
                  >
                    {item.likes || 0}
                  </Button>
                  <Button
                    type="text"
                    icon={<MessageOutlined style={{ color: "#555" }} />}
                    disabled
                    style={{ 
                      cursor: "default",
                      padding: "0 8px",
                    }}
                  >
                    {item.comments || 0}
                  </Button>
                </Row>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{display: "flex", justifyContent: "center", textAlign: "center", marginTop: 32 }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredArticles.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};
