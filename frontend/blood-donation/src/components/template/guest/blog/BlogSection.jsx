import React, { useState } from "react";
import { Card, Col, Row, Tag, Typography } from "antd";
import { articles, categories } from "../../../../assets/blog";
const { Title, Paragraph } = Typography;

export const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredArticles =
    selectedCategory === "ALL"
      ? articles
      : articles.filter((item) => item.label === selectedCategory);
  return (
    <div
      style={{
        padding: "40px 60px",
        background: "#fff",
        borderRadius: "50px",
        marginBottom: "40px"
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
        {filteredArticles.map((item) => (
          <Col key={item.key} xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable
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
                <Paragraph strong style={{ fontWeight: "bold" }}>
                  {item.title}
                </Paragraph>
              </div>
              <Paragraph
                type="secondary"
                style={{ fontSize: 14, marginTop: 12 }}
              >
                {item.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
