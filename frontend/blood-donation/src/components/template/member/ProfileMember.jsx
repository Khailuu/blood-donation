import React, { useEffect } from "react";
import {
  Row,
  Col,
  Input,
  Select,
  Button,
  Typography,
  Form,
  DatePicker,
  message,
} from "antd";
import moment from "moment";
import { authService } from "../../../services/authService";

const { Title } = Typography;
const { Option } = Select;

export const ProfileMember = () => {
  const [form] = Form.useForm();
  const user = authService.getCurrentUser();

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        ...user,
        dateOfBirth: user.dateOfBirth ? moment(user.dateOfBirth) : null,
      });
    }
  }, [form, user]);

  const onFinish = async (values) => {
    const submitData = {
      ...values,
      dateOfBirth: values.dateOfBirth
        ? values.dateOfBirth.format("YYYY-MM-DD")
        : null,
    };
    try {
      await authService.updateProfile(submitData);
      message.success("Profile updated successfully");
    } catch (error) {
      message.error(error.message || "Failed to update profile");
    }
  };

  return (
    <div
      style={{

        margin: "40px 0",
        padding: 40,
        backgroundColor: "#fff",
        borderRadius: 32,
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        fontFamily: "Raleway",

      }}
    >
      <Title level={2} style={{ fontWeight: "bold" }}>
        Account Information
      </Title>

      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        initialValues={{
          name: "",
          email: "",
          password: "",
          gender: "Male",
          dateOfBirth: null,
          address: "",
          phone: "",
        }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}> 
              <Input style={inputStyle} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}> 
              <Input style={inputStyle} disabled />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="password" label="Password" rules={[{ required: true }]}> 
              <Input.Password style={inputStyle} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="gender" label="Gender"> 
              <Select style={inputStyle}>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="dateOfBirth" label="Date of Birth">
              <DatePicker style={inputStyle} format="YYYY-MM-DD" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="address" label="Address">
              <Input style={inputStyle} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="phone" label="Phone Number">
              <Input style={inputStyle} />
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: "right", marginTop: 24 }}>
          <Button
            htmlType="submit"
            type="primary"
            style={{
              backgroundColor: "#b8002b",
              borderColor: "#b8002b",
              borderRadius: 24,
              padding: "6px 24px",
              fontWeight: "bold",
            }}
          >
            Save Changes
          </Button>
        </div>
      </Form>
    </div>
  );
};

const inputStyle = {
  borderRadius: 32,
  height: 48,
  width: "100%",
};