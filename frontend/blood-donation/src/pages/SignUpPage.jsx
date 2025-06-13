import { Col, Form, Input, Row, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { banner2 } from '../assets'
import "../css/SignInPage.css";

const {Title, Text} = Typography;

export const SignUpPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signin");
  };


  return (
    <div>
      <Form className="loginForm">
        <img className="loginTitle" src={banner2} alt="Blood Donation Logo" />

        <Title
          level={3}
          style={{ textAlign: "center", marginTop: 0, marginBottom: 32 }}
        >
          Sign-up
        </Title>

        <Row>
          <Col xs={7}>
            <Title
              level={5}
              style={{ margin: "0 0 32px 0", padding: 0, textAlign: "left" }}
            >
              Full Name
            </Title>
          </Col>
          <Col xs={1}></Col>
          <Col xs={16}>
            <Form.Item name="fullName">
              <Input
                style={{ margin: 0, padding: 5 }}
                placeholder="Enter your Full Name"
                className="input-field"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xs={7}>
            <Title
              level={5}
              style={{ margin: "0 0 32px 0", padding: 0, textAlign: "left" }}
            >
              Username
            </Title>
          </Col>
          <Col xs={1}></Col>
          <Col xs={16}>
            <Form.Item name="username">
              <Input
                style={{ margin: 0, padding: 5 }}
                placeholder="Enter your Username"
                className="input-field"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xs={7}>
            <Title
              level={5}
              style={{ margin: "0 0 32px 0", padding: 0, textAlign: "left" }}
            >
              Password
            </Title>
          </Col>
          <Col xs={1}></Col>

          <Col xs={16}>
            <Form.Item name="password">
              <Input.Password
                style={{ margin: 0, padding: 5 }}
                placeholder="Enter your password"
                className="input-field"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xs={7}>
            <Title
              level={5}
              style={{ margin: "0 0 32px 0", padding: 0, textAlign: "left" }}
            >
              Confirm Password
            </Title>
          </Col>
          <Col xs={1}></Col>

          <Col xs={16}>
            <Form.Item name="password">
              <Input.Password
                style={{ margin: 0, padding: 5 }}
                placeholder="Enter your password"
                className="input-field"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="loginBtn">
            Sign Up
          </Button>
        </Form.Item>

        <Form.Item>
          <Text style={{ display: "block", textAlign: "center" }}>
            Already have an account?{" "}
            <a
              onClick={handleLogin}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                color: "#bd0026",
              }}
            >
              Sign in
            </a>
          </Text>
        </Form.Item>
      </Form>

      <ul className="background">
        {/* Có thể dùng hiệu ứng nền động tại đây */}
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
