import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Tag, Button, Row, Col, Divider, List, Avatar, Input } from "antd";
import { articles } from "../../../../assets/blog";
import { banner2 } from "../../../../assets";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

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
  const [comments, setComments] = React.useState(mockComments);
  const [newComment, setNewComment] = React.useState("");

  const blog = articles.find((item) => item.key === parseInt(id));

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;
    
    const comment = {
      author: "Người dùng",
      avatar: <Avatar icon={<UserOutlined />} />,
      content: newComment,
      datetime: new Date().toLocaleString(),
    };
    
    setComments([...comments, comment]);
    setNewComment("");
  };

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
        <Row xs={24} md={10} style={{display: "flex", justifyContent: "space-between"}}>
          <Col md={4}>
            <img src={banner2} alt="" style={{width: "40%"}}/>
            <Divider style={{ backgroundColor: "black" }}></Divider>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <Title style={{ fontFamily: "Raleway", fontSize: "20px"}}>Date</Title>
              <Paragraph type="secondary" >
                <Text type="secondary" style={{fontFamily: "Raleway"}}> {blog.date}</Text>
              </Paragraph>
            </div>
          </Col>
          <Col md={17} >
            <Title
              level={1}
              style={{ marginTop: 16, fontFamily: "Raleway", fontWeight: 600 }}
            >
              {blog.title}
            </Title>

            <Paragraph style={{ marginTop: 24, fontSize: 16, lineHeight: 1.8 }}>
              {blog.description}
            </Paragraph>

            <Button
              type="link"
              onClick={() => navigate(-1)}
              style={{
                textDecoration: "none",
                color:"#fff",
                fontSize:"15px",
                backgroundColor: "#bd0026",
                borderRadius: 50,
                height: 40,
                fontWeight: 600,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s",
                marginTop: "40px"
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
      <Divider orientation="left" style={{ fontSize: 24, fontWeight: 600, marginTop: 60 }}>
        <MessageOutlined style={{ marginRight: 10 }} />
        Comments ({comments.length})
      </Divider>

      <List
        className="comment-list"
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item) => (
          <li>
            <div
              author={<a>{item.author}</a>}
              avatar={<Avatar src={item.avatar} icon={<UserOutlined />} />}
              content={<p>{item.content}</p>}
              datetime={<span>{item.datetime}</span>}
            ></div>
          </li>
        )}
        style={{ marginTop: 30 }}
      />

      <div style={{ marginTop: 40 }}>
        <Title level={4} style={{ fontFamily: "Raleway" }}>Leave a comment</Title>
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