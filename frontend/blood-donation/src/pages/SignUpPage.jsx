import { Col, Form, Input, Row, Typography, Button, DatePicker, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import { banner2 } from '../assets';
import "../css/SignInPage.css";
import { authService } from "../services/authService";
import dayjs from "dayjs";

const { Title, Text } = Typography;
const { Option } = Select;

export const SignUpPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/signin");
  };

  const onFinish = async (values) => {
    if (values.password !== values.confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }
    try {
      await authService.register({
        name: values.fullName,
        email: values.email,
        password: values.password,
        dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD"),
        gender: values.gender,
        address: values.address,
        phone: values.phone,
      });
      message.success("Sign up successful! Please sign in.");
      navigate("/signin");
    } catch (error) {
      message.error(error?.message || "Sign up failed!");
    }
  };

  return (
    <div>
      <Form layout="vertical" className="loginForm" onFinish={onFinish}>
        <img className="loginTitle" src={banner2} alt="Blood Donation Logo" />

        <Title level={3} style={{ textAlign: "center", marginTop: 0, marginBottom: 32 }}>
          Sign-up
        </Title>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: "Please enter your full name" }]}>
              <Input placeholder="Enter your full name" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" }
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
              hasFeedback
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Date of Birth"
              name="dateOfBirth"
              rules={[{ required: true, message: "Please select your date of birth" }]}
            >
              <DatePicker
                style={{ width: "100%" }}
                format="YYYY-MM-DD"
                disabledDate={current => current && current > dayjs().endOf('day')}
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Please select your gender" }]}
            >
              <Select placeholder="Select gender">
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
                { pattern: /^[0-9]{8,15}$/, message: "Phone must be 8-15 digits" }
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input placeholder="Enter your address" />
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
            <a onClick={handleLogin} style={{ cursor: "pointer", fontWeight: "bold", color: "#bd0026" }}>
              Sign in
            </a>
          </Text>
        </Form.Item>
      </Form>

      <ul className="background">
        {[...Array(12)].map((_, i) => <li key={i}></li>)}
      </ul>
    </div>
  );
};
