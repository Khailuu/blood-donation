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
  Upload,
} from "antd";
import moment from "moment";
import { userService } from "../../../services/manageUserService";
import { UploadOutlined } from "@ant-design/icons";

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

const selectStyle = {
  width: "100%",
  borderRadius: "6px",
  height: "40px",
};

const buttonStyle = {
  backgroundColor: "#b8002b",
  borderColor: "#b8002b",
  color: "#fff",
  borderRadius: "6px",
  fontWeight: 500,
  padding: "0 20px",
  height: "36px",
  transition: "all 0.3s",
};

export const ProfileMember = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [bloodTypes, setBloodTypes] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [form] = Form.useForm();

  const fetchData = async () => {
    try {
      setLoading(true);
      const [userResponse, bloodTypesResponse] = await Promise.all([
        userService.getCurrentUser(),
        userService.getBloodTypes(),
      ]);

      console.log("Fetched user data:", userResponse);
      console.log("Fetched blood types:", bloodTypesResponse);

      const bloodTypeMap = {};
      bloodTypesResponse.forEach((type) => {
        bloodTypeMap[type.name] = type.bloodTypeId;
      });

      const userData = userResponse;
      const transformedData = {
        fullName: userData.fullName || "",
        email: userData.email || "",
        phone: userData.phone || "",
        dateOfBirth: userData.dateOfBirth || null,
        gender: userData.gender === 1 ? "Male" : userData.gender === 0 ? "Female" : "Other",
        address: userData.address || "",
        bloodTypeName: userData.bloodTypeName || "",
        bloodTypeId: bloodTypeMap[userData.bloodTypeName] || null,
        role: userData.role,
        isDonor: userData.isDonor || false,
        imageUrl: userData.imageUrl || null,
      };

      setProfileData(transformedData);
      form.setFieldsValue({
        ...transformedData,
        dateOfBirth: transformedData.dateOfBirth ? moment(transformedData.dateOfBirth) : null,
        bloodType: transformedData.bloodTypeName || null,
      });

      setBloodTypes(bloodTypesResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
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

      const bloodType = bloodTypes.find((type) => type.name === values.bloodType);
      if (!bloodType) {
        message.error("Invalid blood type selected");
        return;
      }

      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("dateOfBirth", values.dateOfBirth ? values.dateOfBirth.format("YYYY-MM-DD") : null);
      formData.append("gender", values.gender === "Male" ? 1 : values.gender === "Female" ? 0 : 2);
      formData.append("address", values.address);
      formData.append("bloodTypeId", bloodType.bloodTypeId);
      formData.append("isDonor", true);
      if (imageFile) {
        formData.append("image", imageFile);
      }

      console.log("Submitting data to updateProfile:", Object.fromEntries(formData));

      const response = await userService.updateProfile(formData);
      console.log("Update response:", response);

      if (response?.success || response?.isSuccess || response?.status === 200 || response?.data) {
        const updatedProfile = {
          ...profileData,
          ...values,
          bloodTypeName: values.bloodType,
          bloodTypeId: bloodType.bloodTypeId,
          role: profileData.role,
          imageUrl: response.data?.imageUrl || profileData.imageUrl,
        };

        setProfileData(updatedProfile);
        form.setFieldsValue({
          ...updatedProfile,
          dateOfBirth: updatedProfile.dateOfBirth ? moment(updatedProfile.dateOfBirth) : null,
          bloodType: updatedProfile.bloodTypeName,
        });

        message.success("Profile updated successfully!");
        await fetchData();
        setIsEditing(false);
        setImageFile(null); // Reset image file after successful upload
      } else {
        console.error("Update failed, response:", response);
        message.error(response?.message || "Failed to update profile in database");
      }
    } catch (error) {
      console.error("Update error:", error);
      message.error(error?.response?.data?.message || "Failed to update profile in database");
    } finally {
      setUpdating(false);
    }
  };

  const handleImageUpload = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
    setImageFile(info.file.originFileObj);
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
                  icon={isEditing ? <SaveOutlined /> : <EditOutlined />}
                  onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                  style={buttonStyle}
                  loading={updating}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(0.95)";
                    e.currentTarget.style.backgroundColor = "#b8002b";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.backgroundColor = "#b8002b";
                  }}
                >
                  {isEditing ? "Save Changes" : "Edit"}
                </Button>
              </Row>

              <Divider style={{ margin: "16px 0" }} />

              <Row gutter={24} align="middle">
                <Col>
                  <Avatar
                    size={80}
                    src={profileData?.imageUrl || undefined}
                    icon={!profileData?.imageUrl && <UserOutlined />}
                    style={{
                      backgroundColor: "#f0f2f5",
                      color: "#8c8c8c",
                      fontSize: "32px",
                    }}
                  />
                  {isEditing && (
                    <Upload
                      name="image"
                      beforeUpload={() => false} // Prevent automatic upload
                      onChange={handleImageUpload}
                      showUploadList={false}
                    >
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
                          transition: "all 0.3s",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "scale(0.95)";
                          e.currentTarget.style.backgroundColor = "#b8002b";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.backgroundColor = "#b8002b";
                        }}
                      />
                    </Upload>
                  )}
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
                          color: "#1890ff",
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
                        <Item
                          name="gender"
                          rules={[{ required: true, message: "Please select your gender!" }]}
                        >
                          <Select
                            style={{ ...selectStyle, marginBottom: "16px" }}
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
                              ...selectStyle,
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
                            ? moment(profileData.dateOfBirth).format("DD/MM/YYYY")
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
                          color: "#1890ff",
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
                          rules={[{ required: true, message: "Please select blood type!" }]}
                        >
                          <Select
                            style={{
                              ...selectStyle,
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