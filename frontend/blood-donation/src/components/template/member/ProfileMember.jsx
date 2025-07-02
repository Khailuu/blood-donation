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
} from "antd";
import moment from "moment";
import { userService } from "../../../services/manageUserService";

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

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

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const user = await userService.getCurrentUser();

        const transformedData = {
          fullName: user.fullName || "Not provided",
          email: user.email || "Not provided",
          phone: user.phone || "Not provided",
          dateOfBirth: user.dateOfBirth || null,
          gender:
            user.gender === 1 ? "Male" : user.gender === 0 ? "Female" : "Other",
          address: user.address || "Not provided",
          bloodType: user.bloodType || "Not provided",
          medicalCertificate: user.medicalCertificate || "Not provided",
          vaccinationStatus: user.vaccinationStatus || "Not provided",
          healthCheckDate: user.healthCheckDate || null,
          role: user.role || "Not provided",
        };

        setProfileData(transformedData);
        setLoading(false);
      } catch (error) {
        message.error("Failed to load profile information");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setUpdating(true);

      // Chuẩn bị dữ liệu để gửi lên server
      const submitData = {
        fullName: profileData.fullName,
        email: profileData.email,
        phone: profileData.phone,
        dateOfBirth: profileData.dateOfBirth
          ? moment(profileData.dateOfBirth).format("YYYY-MM-DD")
          : null,
        gender:
          profileData.gender === "Male"
            ? 1
            : profileData.gender === "Female"
            ? 0
            : 2,
        address: profileData.address,
        bloodType: profileData.bloodType,
      };

      console.log("Submitting data:", submitData); // Debug log

      // Gọi API update
      const response = await userService.updateProfile(submitData);

      console.log("API response:", response); // Debug log

      if (response && response.success) {
        message.success("Cập nhật thông tin thành công!");
        setIsEditing(false);

        // Cập nhật state với dữ liệu mới từ server
        setProfileData((prev) => ({
          ...prev,
          ...response.user,
          gender:
            response.user.gender === 1
              ? "Male"
              : response.user.gender === 0
              ? "Female"
              : "Other",
        }));
      } else {
        message.error(response?.message || "Cập nhật thông tin thất bại");
      }
    } catch (error) {
      console.error("Update error:", error); // Debug log
      message.error(
        error.response?.data?.message || "Lỗi khi cập nhật thông tin"
      );
    } finally {
      setUpdating(false);
    }
  };

  if (loading || !profileData) {
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
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card
            style={{
              ...cardStyle,
              padding: "24px",
            }}
            bodyStyle={{ padding: 0 }}
          >
            <Row justify="space-between" align="middle">
              <Title
                level={4}
                style={{
                  margin: 0,
                  color: "#333",
                  fontWeight: 600,
                }}
              >
                Profile Information
              </Title>
              <Button
                type="primary"
                icon={isEditing ? <SaveOutlined /> : <EditOutlined />}
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                style={buttonStyle}
                loading={updating}
                disabled={updating}
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
                  style={{
                    margin: 0,
                    color: "#333",
                    fontWeight: 600,
                  }}
                >
                  {profileData.fullName}
                </Title>
                <Text
                  type="secondary"
                  style={{
                    fontSize: "16px",
                    color: "#666",
                  }}
                >
                  {profileData.role}
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
                      <Input
                        value={profileData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        style={{ ...inputStyle, marginBottom: "16px" }}
                      />
                    ) : (
                      <div
                        style={{
                          ...inputStyle,
                          marginBottom: "16px",
                          background: "#f9f9f9",
                          color: "#333",
                        }}
                      >
                        {profileData.fullName}
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
                      <Select
                        value={profileData.gender}
                        onChange={(value) => handleInputChange("gender", value)}
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
                    ) : (
                      <div
                        style={{
                          ...inputStyle,
                          marginBottom: "16px",
                          background: "#f9f9f9",
                          color: "#333",
                        }}
                      >
                        {profileData.gender}
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
                      <Input
                        value={profileData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        style={{ ...inputStyle, marginBottom: "16px" }}
                        prefix={<MailOutlined style={{ color: "#999" }} />}
                      />
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
                        {profileData.email}
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
                      <Input
                        value={profileData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        style={{ ...inputStyle, marginBottom: "16px" }}
                        prefix={<PhoneOutlined style={{ color: "#999" }} />}
                      />
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
                        {profileData.phone}
                      </div>
                    )}
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={12}>
                    <Text
                      strong
                      style={{ display: "block", marginBottom: "4px" }}
                    >
                      Date of Birth
                    </Text>
                    {isEditing ? (
                      <DatePicker
                        value={
                          profileData.dateOfBirth
                            ? moment(profileData.dateOfBirth)
                            : null
                        }
                        onChange={(date) =>
                          handleInputChange(
                            "dateOfBirth",
                            date ? date.format("YYYY-MM-DD") : null
                          )
                        }
                        style={{
                          width: "100%",
                          ...inputStyle,
                          marginBottom: "16px",
                        }}
                      />
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
                        {profileData.dateOfBirth
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
                      <TextArea
                        value={profileData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        style={{
                          ...inputStyle,
                          marginBottom: "16px",
                          minHeight: "80px",
                        }}
                        rows={3}
                      />
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
                        {profileData.address}
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
                      <Select
                        value={profileData.bloodType}
                        onChange={(value) =>
                          handleInputChange("bloodType", value)
                        }
                        style={{
                          width: "100%",
                          ...inputStyle,
                          marginBottom: "16px",
                        }}
                      >
                        <Option value="A+">A+</Option>
                        <Option value="A-">A-</Option>
                        <Option value="B+">B+</Option>
                        <Option value="B-">B-</Option>
                        <Option value="AB+">AB+</Option>
                        <Option value="AB-">AB-</Option>
                        <Option value="O+">O+</Option>
                        <Option value="O-">O-</Option>
                      </Select>
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
                        {profileData.bloodType}
                      </div>
                    )}
                  </Col>
                </Row>

                <Row style={{ marginBottom: "16px" }}>
                  <Col span={24}>
                    <Text
                      strong
                      style={{ display: "block", marginBottom: "4px" }}
                    >
                      Health Certificate
                    </Text>
                    <div
                      style={{
                        ...inputStyle,
                        background: "#f9f9f9",
                        color: "#333",
                      }}
                    >
                      {profileData.medicalCertificate}
                    </div>
                  </Col>
                </Row>

                <Row style={{ marginBottom: "16px" }}>
                  <Col span={24}>
                    <Text
                      strong
                      style={{ display: "block", marginBottom: "4px" }}
                    >
                      Vaccination Status
                    </Text>
                    <div
                      style={{
                        ...inputStyle,
                        background: "#f6ffed",
                        border: "1px solid #b7eb8f",
                        color: "#389e0d",
                        fontWeight: 500,
                      }}
                    >
                      {profileData.vaccinationStatus}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <Text
                      strong
                      style={{ display: "block", marginBottom: "4px" }}
                    >
                      Last Health Check
                    </Text>
                    <div
                      style={{
                        ...inputStyle,
                        background: "#f9f9f9",
                        color: "#333",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <CalendarOutlined
                        style={{ marginRight: "8px", color: "#8c8c8c" }}
                      />
                      {profileData.healthCheckDate
                        ? moment(profileData.healthCheckDate).format(
                            "DD/MM/YYYY"
                          )
                        : "Not provided"}
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
