import React, { useState, useEffect } from "react";
import { banner2 } from "../assets";
import {
  Row,
  Col,
  Typography,
  Button,
  Form,
  Input,
  Divider,
  message,
  Checkbox,
} from "antd";
import { useNavigate } from "react-router-dom";
import "../css/SignInPage.css";
import { FacebookIcon, GoogleIcon } from "../assets/CutomIcons";
import ForgotPassword from "./ForgotPassword";
import { authService } from "../services/authService";

const { Title, Text } = Typography;

export const SignInPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [form] = Form.useForm();

  // Load saved email if "Remember me" was checked previously
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      form.setFieldsValue({ email: savedEmail });
      setRememberMe(true);
    }
  }, [form]);

  const handleSignUp = () => navigate("/signup");
  const openForgotPassword = () => setIsForgotModalOpen(true);
  const closeForgotPassword = () => setIsForgotModalOpen(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;

      // Save email if "Remember me" is checked
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      await authService.login(email, password, rememberMe);

      const user = authService.getCurrentUser();
      console.log({ user });

      let role = user?.role;
      if (role === 1) role = "admin";
      else if (role === 2) role = "staff";
      else if (role === 3) role = "member";

      if (role === "admin") {
        navigate("/app/admin");
      } else if (role === "staff") {
        navigate("/app/staff");
      } else {
        navigate("/app/member");
      }

      message.success("Login successful!");
    } catch (error) {
      message.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <Form form={form} className="loginForm" onFinish={onFinish}>
        <img
          className="loginTitle"
          src={banner2}
          alt="Blood Donation Logo"
          style={{ marginBottom: 0 }}
        />
        <Title
          level={3}
          style={{ textAlign: "center", marginTop: 0, marginBottom: 32 }}
        >
          Sign-in
        </Title>

        <Row>
          <Col xs={7}>
            <Title
              level={5}
              style={{ margin: "0 0 32px 0", padding: 0, textAlign: "left" }}
            >
              Email
            </Title>
          </Col>
          <Col xs={1}></Col>
          <Col xs={16}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                style={{ margin: 0, padding: 5 }}
                placeholder="Enter your email"
                className="input-field"
                autoFocus
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
            <Form.Item
              variant='outlined'
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                style={{ margin: 0, padding: 5 }}
                placeholder="••••••"
                className="input-field"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="end" style={{ marginBottom: 16 }}>
          <Col>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ marginBottom: 16 }}
              >
                Remember me
              </Checkbox>
            </Form.Item>
          </Col>
          <Col>
            <a
              onClick={openForgotPassword}
              style={{ fontSize: 14, color: "#bd0026", fontWeight: "bold" }}
            >
              Forgot password?
            </a>
          </Col>
        </Row>
        <ForgotPassword
          open={isForgotModalOpen}
          handleClose={closeForgotPassword}
        />

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="loginBtn"
            loading={loading}
            style={{ width: "100%" }}
          >
            <span style={{ fontSize: "15px", fontWeight: "bold" }}>
              Sign In
            </span>
          </Button>
        </Form.Item>

        <Divider>or</Divider>

        <Form.Item>
          <div className="button-container">
            <Button
              style={{ width: "48%", marginRight: "4%", height: "35px" }}
              icon={<FacebookIcon />}
              className="facebook-button"
            >
              Facebook
            </Button>
            <Button
              style={{ width: "48%", height: "35px" }}
              icon={<GoogleIcon />}
              className="google-button"
            >
              Google
            </Button>
          </div>
        </Form.Item>

        <Form.Item>
          <Text style={{ display: "block", textAlign: "center" }}>
            Don't have an account?{" "}
            <a
              onClick={handleSignUp}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                color: "#bd0026",
              }}
            >
              Sign up
            </a>
          </Text>
        </Form.Item>
      </Form>

      <ul className="background">
        {[...Array(12)].map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
};
