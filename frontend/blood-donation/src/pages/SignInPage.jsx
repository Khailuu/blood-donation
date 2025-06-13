import React, { useState } from 'react'
import { banner2 } from '../assets'
import { Row, Col, Typography, Button, Form, Input, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import "../css/SignInPage.css";
import { FacebookIcon, GoogleIcon } from '../assets/CutomIcons';
import ForgotPassword from './ForgotPassword';
const { Title, Text } = Typography;


export const SignInPage = () => {
const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);

  const openForgotPassword = () => setIsForgotModalOpen(true);
  const closeForgotPassword = () => setIsForgotModalOpen(false);


  return (
    <div className="">
      <Form className="loginForm">
          <img
            className="loginTitle"
            src={banner2}
            alt="Blood Donation Logo"
            style={{ marginBottom: 0}}
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
              <Form.Item name="email">
                <Input
                  style={{ 
                    margin: 0, 
                    padding: 5,
                  }}
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
              <Form.Item name="password">
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
            <Button type="primary" htmlType="submit" className="loginBtn">
              <span style={{ fontSize: "15px", fontWeight: "bold"}}>Sign In</span>
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
              Don’t have an account?{" "}
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
  )
}
