import React, { useState, useEffect } from "react";
import {
  HeartOutlined,
  UserOutlined,
  CameraOutlined,
  SaveOutlined,
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import {
  Row,
  Col,
  Card,
  Avatar,
  Button,
  Typography,
  Input,
  Select,
  DatePicker,
  Divider,
  message,
  Spin,
  Form,
} from "antd";
import moment from "moment";
import { userService } from "../../../services/manageUserService";

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;
const { Item } = Form;

const cardStyle = {
  height: "100%",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  border: "none",
};

const inputStyle = {
  borderRadius: "6px",
  padding: "10px 12px",
};

const buttonStyle = {
  backgroundColor: "#b8002b",
  borderColor: "#b8002b",
  borderRadius: "6px",
  fontWeight: 500,
  padding: "0 20px",
  height: "36px",
};

export const ProfileMember = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [bloodTypes, setBloodTypes] = useState([]);
  const [form] = Form.useForm();

  const fetchData = async () => {
    try {
      setLoading(true);
      const [userResponse, bloodTypesResponse] = await Promise.all([
        userService.getCurrentUser(),
        userService.getBloodTypes(),
      ]);

      const bloodTypeMap = {};
      bloodTypesResponse.forEach(type => {
        bloodTypeMap[type.name] = type.bloodTypeId;
      });

      const userData = userResponse;
      const transformedData = {
        userId: userData.id || userData.userId || "",
        fullName: userData.fullName || "",
        email: userData.email || "",
        phone: userData.phone || "",
        dateOfBirth: userData.dateOfBirth || null,
        gender: userData.gender === 1 ? "Male" : userData.gender === 0 ? "Female" : "Other",
        address: userData.address || "",
        bloodTypeName: userData.bloodTypeName || "",
        bloodTypeId: bloodTypeMap[userData.bloodTypeName] || null,
        role: userData.role ,
        isDonor: userData.isDonor || false
      };

      setProfileData(transformedData);
      form.setFieldsValue({
        ...transformedData,
        dateOfBirth: transformedData.dateOfBirth ? moment(transformedData.dateOfBirth) : null,
        bloodType: transformedData.bloodTypeName 
      });

      setBloodTypes(bloodTypesResponse);
      localStorage.setItem('bloodTypeMap', JSON.stringify(bloodTypeMap));
      localStorage.setItem('userProfile', JSON.stringify(transformedData));
    } catch (error) {
      console.error("Error fetching data:", error);
      
      const cachedProfile = localStorage.getItem('userProfile');
      const cachedBloodTypes = localStorage.getItem('bloodTypeMap');
      
      if (cachedProfile) {
        const parsedData = JSON.parse(cachedProfile);
        setProfileData(parsedData);
        form.setFieldsValue({
          ...parsedData,
          dateOfBirth: parsedData.dateOfBirth ? moment(parsedData.dateOfBirth) : null,
        });
      }
      
      if (cachedBloodTypes) {
        // No need to set bloodTypes from cache since we need fresh data
      }
      
      message.error("Failed to load profile information");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      setUpdating(true);
      const values = await form.validateFields();

      const bloodTypeMap = JSON.parse(localStorage.getItem('bloodTypeMap')) || {};
      const bloodTypeId = bloodTypeMap[values.bloodType];

      const submitData = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        dateOfBirth: values.dateOfBirth ? values.dateOfBirth.format("YYYY-MM-DD") : null,
        gender: values.gender === "Male" ? 1 : values.gender === "Female" ? 0 : 2,
        address: values.address,
        // bloodTypeId: bloodTypeId,
        isDonor: true
      };

      if (bloodTypeId) {
        submitData.bloodTypeId = bloodTypeId;
      }

      const response = await userService.updateProfile(submitData);

      if (response.isSuccess) {
        const updatedUser = {
          ...profileData,
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
          dateOfBirth: values.dateOfBirth,
          gender: values.gender, 
          address: values.address,
          bloodTypeName: values.bloodType || null, 
          bloodTypeId: bloodTypeId || null, 
          role: profileData.role
        };

        setProfileData(updatedUser);
        form.setFieldsValue(updatedUser);
        localStorage.setItem('userProfile', JSON.stringify(updatedUser));
        
        message.success("Profile updated successfully!");
        setIsEditing(false);
        
        await fetchData();
      } else {
        message.error(response.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Update error:", error);
      message.error(error.message || "Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

  if (loading && !profileData) {
    return (
      <div
        style={{
          padding: 24,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "24px",
        maxWidth: "1400px",
        margin: "0 auto",
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <Form form={form} initialValues={profileData || {}}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Card
              style={{ ...cardStyle, padding: "24px" }}
              bodyStyle={{ padding: 0 }}
            >
              <Row justify="space-between" align="middle">
                <Title
                  level={4}
                  style={{ margin: 0, color: "#333", fontWeight: 600 }}
                >
                  Profile Information
                </Title>
                <Button
                  type="primary"
                  icon={isEditing ? <SaveOutlined /> : <EditOutlined />}
                  onClick={() =>
                    isEditing ? handleSave() : setIsEditing(true)
                  }
                  style={buttonStyle}
                  loading={updating}
                >
                  {isEditing ? "Save Changes" : "Edit"}
                </Button>
              </Row>

              <Divider style={{ margin: "16px 0" }} />

              <Row gutter={24} align="middle">
                <Col>
                  <Avatar
                    size={80}
                    icon={<UserOutlined />}
                    style={{
                      backgroundColor: "#f0f2f5",
                      color: "#8c8c8c",
                      fontSize: "32px",
                    }}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<CameraOutlined />}
                    size="small"
                    style={{
                      position: "relative",
                      top: -15,
                      left: -20,
                      backgroundColor: "#b8002b",
                      borderColor: "#b8002b",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </Col>
                <Col>
                  <Title
                    level={4}
                    style={{ margin: 0, color: "#333", fontWeight: 600 }}
                  >
                    {profileData?.fullName || "No Name"}
                  </Title>
                  <Text
                    type="secondary"
                    style={{ fontSize: "16px", color: "#666" }}
                  >
                    {profileData?.role || "No Role"}
                  </Text>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={24}>
            <Row gutter={24} style={{ alignItems: "stretch" }}>
              <Col span={12}>
                <Card
                  style={cardStyle}
                  title={
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 600,
                        color: "#333",
                      }}
                    >
                      <UserOutlined
                        style={{
                          color: "#b8002b",
                          marginRight: "10px",
                          fontSize: "18px",
                        }}
                      />
                      Personal Information
                    </span>
                  }
                  headStyle={{
                    borderBottom: "1px solid #f0f0f0",
                    padding: "16px 24px",
                  }}
                  bodyStyle={{ padding: "16px 24px" }}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Text
                        strong
                        style={{ display: "block", marginBottom: "4px" }}
                      >
                        Full Name
                      </Text>
                      {isEditing ? (
                        <Item
                          name="fullName"
                          rules={[
                            {
                              required: true,
                              message: "Please input your full name!",
                            },
                          ]}
                        >
                          <Input
                            style={{ ...inputStyle, marginBottom: "16px" }}
                          />
                        </Item>
                      ) : (
                        <div
                          style={{
                            ...inputStyle,
                            marginBottom: "16px",
                            background: "#f9f9f9",
                            color: "#333",
                          }}
                        >
                          {profileData?.fullName || "Not provided"}
                        </div>
                      )}
                    </Col>
                    <Col span={12}>
                      <Text
                        strong
                        style={{ display: "block", marginBottom: "4px" }}
                      >
                        Gender
                      </Text>
                      {isEditing ? (
                        <Item name="gender" initialValue={profileData?.gender}>
                          <Select
                            style={{
                              width: "100%",
                              ...inputStyle,
                              marginBottom: "16px",
                            }}
                          >
                            <Option value="Male">Male</Option>
                            <Option value="Female">Female</Option>
                            <Option value="Other">Other</Option>
                          </Select>
                        </Item>
                      ) : (
                        <div
                          style={{
                            ...inputStyle,
                            marginBottom: "16px",
                            background: "#f9f9f9",
                            color: "#333",
                          }}
                        >
                          {profileData?.gender || "Not provided"}
                        </div>
                      )}
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <Text
                        strong
                        style={{ display: "block", marginBottom: "4px" }}
                      >
                        Email
                      </Text>
                      {isEditing ? (
                        <Item
                          name="email"
                          rules={[
                            {
                              type: "email",
                              message: "Please input a valid email!",
                            },
                            {
                              required: true,
                              message: "Please input your email!",
                            },
                          ]}
                        >
                          <Input
                            style={{ ...inputStyle, marginBottom: "16px" }}
                            prefix={<MailOutlined style={{ color: "#999" }} />}
                          />
                        </Item>
                      ) : (
                        <div
                          style={{
                            ...inputStyle,
                            marginBottom: "16px",
                            background: "#f9f9f9",
                            color: "#333",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <MailOutlined
                            style={{ marginRight: "8px", color: "#8c8c8c" }}
                          />
                          {profileData?.email || "Not provided"}
                        </div>
                      )}
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <Text
                        strong
                        style={{ display: "block", marginBottom: "4px" }}
                      >
                        Phone Number
                      </Text>
                      {isEditing ? (
                        <Item
                          name="phone"
                          rules={[
                            {
                              pattern: /^[0-9]+$/,
                              message: "Please input numbers only!",
                            },
                          ]}
                        >
                          <Input
                            style={{ ...inputStyle, marginBottom: "16px" }}
                            prefix={<PhoneOutlined style={{ color: "#999" }} />}
                          />
                        </Item>
                      ) : (
                        <div
                          style={{
                            ...inputStyle,
                            marginBottom: "16px",
                            background: "#f9f9f9",
                            color: "#333",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <PhoneOutlined
                            style={{ marginRight: "8px", color: "#8c8c8c" }}
                          />
                          {profileData?.phone || "Not provided"}
                        </div>
                      )}
                    </Col>
                  </Row>

                  <Row gutter={16}>
                    <Col span={24}>
                      <Text
                        strong
                        style={{ display: "block", marginBottom: "4px" }}
                      >
                        Date of Birth
                      </Text>
                      {isEditing ? (
                        <Item name="dateOfBirth">
                          <DatePicker
                            style={{
                              width: "100%",
                              ...inputStyle,
                              marginBottom: "16px",
                            }}
                            format="YYYY-MM-DD"
                          />
                        </Item>
                      ) : (
                        <div
                          style={{
                            ...inputStyle,
                            marginBottom: "16px",
                            background: "#f9f9f9",
                            color: "#333",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <CalendarOutlined
                            style={{ marginRight: "8px", color: "#8c8c8c" }}
                          />
                          {profileData?.dateOfBirth
                            ? moment(profileData.dateOfBirth).format(
                                "DD/MM/YYYY"
                              )
                            : "Not provided"}
                        </div>
                      )}
                    </Col>
                  </Row>

                  <Row>
                    <Col span={24}>
                      <Text
                        strong
                        style={{ display: "block", marginBottom: "4px" }}
                      >
                        Address
                      </Text>
                      {isEditing ? (
                        <Item name="address">
                          <TextArea
                            style={{
                              ...inputStyle,
                              marginBottom: "16px",
                              minHeight: "80px",
                            }}
                            rows={3}
                          />
                        </Item>
                      ) : (
                        <div
                          style={{
                            ...inputStyle,
                            marginBottom: "16px",
                            background: "#f9f9f9",
                            color: "#333",
                            display: "flex",
                            minHeight: "80px",
                            alignItems: "flex-start",
                          }}
                        >
                          <EnvironmentOutlined
                            style={{
                              marginRight: "8px",
                              color: "#8c8c8c",
                              marginTop: "4px",
                              flexShrink: 0,
                            }}
                          />
                          {profileData?.address || "Not provided"}
                        </div>
                      )}
                    </Col>
                  </Row>
                </Card>
              </Col>

              <Col span={12}>
                <Card
                  style={cardStyle}
                  title={
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: 600,
                        color: "#333",
                      }}
                    >
                      <HeartOutlined
                        style={{
                          color: "#b8002b",
                          marginRight: "10px",
                          fontSize: "18px",
                        }}
                      />
                      Medical Information
                    </span>
                  }
                  headStyle={{
                    borderBottom: "1px solid #f0f0f0",
                    padding: "16px 24px",
                  }}
                  bodyStyle={{ padding: "16px 24px" }}
                >
                  <Row style={{ marginBottom: "16px" }}>
                    <Col span={24}>
                      <Text
                        strong
                        style={{ display: "block", marginBottom: "4px" }}
                      >
                        Blood Type
                      </Text>
                      {isEditing ? (
                        <Item
                          name="bloodType"
                          initialValue={profileData?.bloodTypeName || null}
                          rules={[{ required: true, message: "Please select blood type" }]}
                        >
                          <Select
                            style={{
                              width: "100%",
                              ...inputStyle,
                              marginBottom: "16px",
                            }}
                            showSearch
                            optionFilterProp="children"
                            placeholder="Select blood type"
                            allowClear
                          >
                            {bloodTypes.map((type) => (
                              <Option key={type.bloodTypeId} value={type.name}>
                                {type.name}
                              </Option>
                            ))}
                          </Select>
                        </Item>
                      ) : (
                        <div
                          style={{
                            ...inputStyle,
                            background: "#fff1f0",
                            border: "1px solid #ffccc7",
                            color: "#cf1322",
                            fontWeight: 500,
                            fontSize: "16px",
                          }}
                        >
                          {profileData?.bloodTypeName || "Not specified"}
                        </div>
                      )}
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};