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
import { userService } from "../../../services/manageUserService";

const { Title } = Typography;
const { Option } = Select;

const genderMap = {
  1: "Male",
  0: "Female",
  2: "Other",
};
const reverseGenderMap = {
  Male: 1,
  Female: 0,
  Other: 2,
};

export const ProfileMember = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await userService.getCurrentUser();
        form.setFieldsValue({
          name: user.fullName || "",
          email: user.email || "",
          password: "",
          gender: genderMap[user.gender] || "Other",
          dateOfBirth: user.dateOfBirth ? moment(user.dateOfBirth) : null,
          address: user.address || "",
          phone: user.phone || "",
        });
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        message.error("Failed to load user profile");
      }
    };

    fetchUser();
  }, [form]);

  const onFinish = async (values) => {
    const submitData = {
      fullName: values.name,
      email: values.email,
      password: values.password,
      gender: reverseGenderMap[values.gender],
      dateOfBirth: values.dateOfBirth
        ? values.dateOfBirth.format("YYYY-MM-DD")
        : null,
      address: values.address,
      phone: values.phone,
    };

    try {
      await userService.updateProfile(submitData);
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
      <Title level={2} style={{fontFamily: "Raleway", fontWeight: "bold" }}>
        Account Information
      </Title>

      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input style={inputStyle} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input style={inputStyle} />
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
                backgroundColor: "#bd0026",
                borderRadius: 50,
                height: 40,
                fontWeight: 600,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(0.95)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
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
  fontFamily:"Raleway",
  fontWeight: 600
};
