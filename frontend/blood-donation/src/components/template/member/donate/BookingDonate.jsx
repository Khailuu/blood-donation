import {
  Card,
  Button,
  Typography,
  Calendar,
  Space,
  Row,
  Col,
  Tag,
  Radio,
  message,
  Steps,
  Divider,
  Avatar,
  Badge,
  Modal,
} from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  LeftOutlined,
  RightOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  ArrowLeftOutlined,
  UserOutlined,
  HeartOutlined,
  InfoCircleOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { banner2 } from "../../../../assets";
import { userService } from "../../../../services/manageUserService";
import { donationRequestService } from "../../../../services/donationRequestService ";
import { useNavigate } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;
const { confirm } = Modal;

export const BookingDonate = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [donationType, setDonationType] = useState(null);
  const [bloodAmount, setBloodAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const [ageValid, setAgeValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(dayjs()), 60000);

    const fetchUserInfo = async () => {
      try {
        const response = await userService.getCurrentUser();
        console.log("User Info:", response);

        setUserInfo(response);

        // Check age validation
        if (response?.dayOfBirth) {
          const birthDate = dayjs(response.dateOfBirth);
          console.log({ birthDate });
          const age = dayjs().diff(birthDate, "year");
          console.log({ age });

          setAgeValid(age >= 18 && age <= 60);
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        message.error("Failed to load user information");
      }
    };

    fetchUserInfo();
    return () => clearInterval(timer);
  }, []);

  const showAgeWarning = () => {
    confirm({
      title: "Not Eligible to Donate Blood",
      icon: <ExclamationCircleFilled style={{ color: "#ff4d4f" }} />,
      content:
        "According to regulations, you must be between 18-60 years old to donate blood. Please check your personal information.",
      okText: "Understood",
      cancelButtonProps: { style: { display: "none" } },
      centered: true,
      styles: {
        body: { padding: "24px 24px 16px" },
      },
    });
  };

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "14:00",
    "14:15",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
  ];

  const getAvailableTimeSlots = () => {
    const isToday = selectedDate.isSame(dayjs(), "day");
    return timeSlots.filter((time) => {
      if (!isToday) return true;
      const slotTime = dayjs(`${selectedDate.format("YYYY-MM-DD")} ${time}`);
      return slotTime.isAfter(currentTime.add(30, "minute"));
    });
  };

  const disabledDate = (current) => {
    return (
      current &&
      (current < dayjs().startOf("day") || current > dayjs().add(3, "month"))
    );
  };

  const handleTimeSelect = (time) => setSelectedTime(time);

  const handleBookAppointment = async () => {
    if (!ageValid) {
      showAgeWarning();
      return;
    }

    if (!donationType) {
      message.error("Please select donation type");
      return;
    }
    if (!selectedTime) {
      message.error("Please select time slot");
      return;
    }
    if (!bloodAmount) {
      message.error("Please select blood amount");
      return;
    }

    setLoading(true);
    try {
      const requestData = {
        amountBlood: bloodAmount,
        componentType: donationType === "blood" ? "Whole" : "Plasma",
        date: dayjs(
          `${selectedDate.format("YYYY-MM-DD")}T${selectedTime}:00`
        ).toISOString(),
        phone: userInfo?.phone || "",
        note: `Name: ${userInfo?.fullName || ""}`,
      };
      await donationRequestService.createDonationRequest(requestData);
      message.success("Blood donation appointment booked successfully!");
      setStep(2);
    } catch (error) {
      message.error(
        error.message || "Failed to book appointment. Please try again"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleMonthChange = (date) => setCurrentMonth(date);
  const handlePrevMonth = () =>
    setCurrentMonth(currentMonth.subtract(1, "month"));
  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));
  const handleGoToToday = () => {
    setSelectedDate(dayjs());
    setCurrentMonth(dayjs());
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div style={{ marginBottom: 24 }}>
            <div className="modern-header">
              <Title
                level={3}
                style={{ marginBottom: 8, color: "#333", fontWeight: 600 }}
              >
                Select Donation Type
              </Title>
              <Text type="secondary" style={{ color: "#666" }}>
                Choose the donation method that suits you
              </Text>
            </div>

            <div style={{ margin: "32px 0" }}>
              <Row gutter={16}>
                <Col span={12}>
                  <div
                    style={{
                      position: "relative",
                      height: "100%",
                    }}
                  >
                    <Card
                      hoverable
                      onClick={() => {
                        setDonationType("blood");
                        setStep(1);
                      }}
                      style={{
                        textAlign: "center",
                        borderColor:
                          donationType === "blood" ? "#bd0026" : "#f0f0f0",
                        backgroundColor:
                          donationType === "blood" ? "#fff5f7" : "#fff",
                        borderRadius: 12,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        height: "100%",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                        cursor: "pointer",
                        transform: "translateY(0)",
                        ":hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 8px 24px rgba(189, 0, 38, 0.1)",
                          borderColor: "#bd0026",
                        },
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(0.95)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                      bodyStyle={{ padding: "24px 16px" }}
                    >
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                          backgroundColor:
                            donationType === "blood" ? "#ffcdd2" : "#ffebee",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 16px",
                          transition: "all 0.3s",
                        }}
                      >
                        <HeartOutlined
                          style={{
                            fontSize: 28,
                            color:
                              donationType === "blood" ? "#d32f2f" : "#bd0026",
                            transition: "all 0.3s",
                          }}
                        />
                      </div>
                      <Title level={4} style={{ marginTop: 0, color: "#333" }}>
                        Whole Blood Donation
                      </Title>
                      <Text
                        type="secondary"
                        style={{ display: "block", marginBottom: 8 }}
                      >
                        10-15 minutes
                      </Text>
                      <Tag
                        color="red"
                        style={{
                          borderRadius: 4,
                          transition: "all 0.3s",
                          transform:
                            donationType === "blood"
                              ? "scale(1.1)"
                              : "scale(1)",
                        }}
                      >
                        Most Common
                      </Tag>
                    </Card>
                    {donationType === "blood" && (
                      <div
                        style={{
                          position: "absolute",
                          top: -8,
                          right: -8,
                          width: 24,
                          height: 24,
                          backgroundColor: "#bd0026",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: 12,
                          fontWeight: "bold",
                          boxShadow: "0 2px 8px rgba(189, 0, 38, 0.3)",
                          transition: "all 0.3s",
                        }}
                      >
                        ✓
                      </div>
                    )}
                  </div>
                </Col>
                <Col span={12}>
                  <div
                    style={{
                      position: "relative",
                      height: "100%",
                    }}
                  >
                    <Card
                      hoverable
                      onClick={() => {
                        setDonationType("plasma");
                        setStep(1);
                      }}
                      style={{
                        textAlign: "center",
                        borderColor:
                          donationType === "plasma" ? "#1890ff" : "#f0f0f0",
                        backgroundColor:
                          donationType === "plasma" ? "#f0f9ff" : "#fff",
                        borderRadius: 12,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        height: "100%",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                        cursor: "pointer",
                        transform: "translateY(0)",
                        ":hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 8px 24px rgba(24, 144, 255, 0.1)",
                          borderColor: "#1890ff",
                        },
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(0.95)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                      bodyStyle={{ padding: "24px 16px" }}
                    >
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                          backgroundColor:
                            donationType === "plasma" ? "#b3e5fc" : "#e6f7ff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 16px",
                          transition: "all 0.3s",
                        }}
                      >
                        <HeartOutlined
                          style={{
                            fontSize: 28,
                            color:
                              donationType === "plasma" ? "#0288d1" : "#1890ff",
                            transition: "all 0.3s",
                          }}
                        />
                      </div>
                      <Title level={4} style={{ marginTop: 0, color: "#333" }}>
                        Plasma Donation
                      </Title>
                      <Text
                        type="secondary"
                        style={{ display: "block", marginBottom: 8 }}
                      >
                        45-60 minutes
                      </Text>
                      <Tag
                        color="blue"
                        style={{
                          borderRadius: 4,
                          transition: "all 0.3s",
                          transform:
                            donationType === "plasma"
                              ? "scale(1.1)"
                              : "scale(1)",
                        }}
                      >
                        High Demand
                      </Tag>
                    </Card>
                    {donationType === "plasma" && (
                      <div
                        style={{
                          position: "absolute",
                          top: -8,
                          right: -8,
                          width: 24,
                          height: 24,
                          backgroundColor: "#1890ff",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: 12,
                          fontWeight: "bold",
                          boxShadow: "0 2px 8px rgba(24, 144, 255, 0.3)",
                          transition: "all 0.3s",
                        }}
                      >
                        ✓
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
            </div>

            <Divider style={{ margin: "24px 0" }} />

            <div style={{ marginTop: 24 }}>
              <Title
                level={5}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#333",
                  fontWeight: 500,
                }}
              >
                <InfoCircleOutlined style={{ color: "#1890ff" }} /> Donation
                Notes
              </Title>
              <div style={{ marginTop: 16 }}>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 12,
                    padding: 12,
                    backgroundColor: "#fafafa",
                    borderRadius: 8,
                    transition: "all 0.3s",
                    ":hover": {
                      backgroundColor: "#f5f5f5",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Avatar
                    size="small"
                    style={{
                      backgroundColor: "#f0f0f0",
                      color: "#333",
                      fontWeight: "bold",
                    }}
                  >
                    1
                  </Avatar>
                  <div>
                    <Text strong style={{ color: "#333" }}>
                      Bring ID
                    </Text>
                    <Text type="secondary" style={{ display: "block" }}>
                      Valid ID card or passport
                    </Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 12,
                    padding: 12,
                    backgroundColor: "#fafafa",
                    borderRadius: 8,
                    transition: "all 0.3s",
                    ":hover": {
                      backgroundColor: "#f5f5f5",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Avatar
                    size="small"
                    style={{
                      backgroundColor: "#f0f0f0",
                      color: "#333",
                      fontWeight: "bold",
                    }}
                  >
                    2
                  </Avatar>
                  <div>
                    <Text strong style={{ color: "#333" }}>
                      Stay Hydrated
                    </Text>
                    <Text type="secondary" style={{ display: "block" }}>
                      Drink plenty of water at least 2 hours before donation
                    </Text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: 12,
                    backgroundColor: "#fafafa",
                    borderRadius: 8,
                    transition: "all 0.3s",
                    ":hover": {
                      backgroundColor: "#f5f5f5",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Avatar
                    size="small"
                    style={{
                      backgroundColor: "#f0f0f0",
                      color: "#333",
                      fontWeight: "bold",
                    }}
                  >
                    3
                  </Avatar>
                  <div>
                    <Text strong style={{ color: "#333" }}>
                      Eat Well
                    </Text>
                    <Text type="secondary" style={{ display: "block" }}>
                      Don't fast, avoid fatty foods
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <>
            <div className="modern-header">
              <Button
                icon={<ArrowLeftOutlined />}
                onClick={() => setStep(0)}
                type="text"
                style={{
                  fontFamily: "Raleway",
                  fontWeight: 600,
                  backgroundColor: "#fff",
                  color: "#bd0026",
                  border: "1px solid #bd0026",
                  borderRadius: 50,
                  height: 40,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s",
                  marginBottom: 15,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(0.95)";
                  e.currentTarget.style.backgroundColor = "#fff5f7";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor = "#fff";
                }}
              >
                Back
              </Button>
              <Title
                level={3}
                style={{ marginBottom: 8, color: "#333", fontWeight: 600 }}
              >
                Select Date & Time
              </Title>
              <Text type="secondary" style={{ color: "#666" }}>
                Choose a convenient time for your donation
              </Text>
            </div>

            {/* Blood Amount Selection - Shown for both donation types */}
            <div
              style={{
                marginBottom: 24,
                borderRadius: 12,
              }}
            >
              <div style={{ marginBottom: 12 }}>
                <Text strong style={{ color: "#333" }}>
                  Donation Amount (ml):
                </Text>
              </div>
              <Row gutter={16}>
                <Col span={12}>
                  <Button
                    type={bloodAmount === 350 ? "primary" : "default"}
                    onClick={() => setBloodAmount(350)}
                    block
                    style={{
                      borderColor:
                        bloodAmount === 350 ? "#bd0026" : "#f0f0f0",
                      backgroundColor:
                        bloodAmount === 350 ? "#fff5f7" : "#fff",
                      color: bloodAmount === 350 ? "#bd0026" : "#333",
                      borderRadius: 8,
                      height: 120,
                      fontWeight: 600,
                      fontSize: 18,
                      boxShadow:
                        bloodAmount === 350
                          ? "0 2px 8px #bd002633"
                          : "0 2px 8px rgba(0,0,0,0.05)",
                      transition: "all 0.3s",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "visible",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(189, 0, 38, 0.15)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.borderColor = "#bd0026";
                      e.currentTarget.style.backgroundColor = "#fff5f7";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.boxShadow =
                        bloodAmount === 350 ? "0 2px 8px #bd002633" : "none";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor =
                        bloodAmount === 350 ? "#bd0026" : "#f0f0f0";
                      e.currentTarget.style.backgroundColor =
                        bloodAmount === 350 ? "#fff5f7" : "#fff";
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <Text
                        strong
                        style={{
                          color: bloodAmount === 350 ? "#bd0026" : "#333",
                          fontSize: 20,
                        }}
                      >
                        350ml (Standard)
                      </Text>
                      <Tag
                        color="green"
                        style={{
                          position: "absolute",
                          top: -20,
                          right: -30,
                          borderRadius: 4,
                          fontWeight: "bold",
                          fontSize: 10,
                          padding: "0 6px",
                          lineHeight: "16px",
                        }}
                      >
                        Recommended
                      </Tag>
                    </div>
                    <Text
                      type="secondary"
                      style={{ display: "block", marginTop: 4, fontSize: 13 }}
                    >
                      For donors weighing 45kg or more
                    </Text>
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    type={bloodAmount === 250 ? "primary" : "default"}
                    onClick={() => setBloodAmount(250)}
                    block
                    style={{
                      borderColor:
                        bloodAmount === 250 ? "#bd0026" : "#f0f0f0",
                      backgroundColor:
                        bloodAmount === 250 ? "#fff5f7" : "#fff",
                      color: bloodAmount === 250 ? "#bd0026" : "#333",
                      borderRadius: 8,
                      height: 120,
                      fontWeight: 600,
                      fontSize: 18,
                      boxShadow:
                        bloodAmount === 250
                          ? "0 2px 8px #bd002633"
                          : "0 2px 8px rgba(0,0,0,0.05)",
                      transition: "all 0.3s",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(189, 0, 38, 0.15)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.borderColor = "#bd0026";
                      e.currentTarget.style.backgroundColor = "#fff5f7";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.boxShadow =
                        bloodAmount === 250 ? "0 2px 8px #bd002633" : "none";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor =
                        bloodAmount === 250 ? "#bd0026" : "#f0f0f0";
                      e.currentTarget.style.backgroundColor =
                        bloodAmount === 250 ? "#fff5f7" : "#fff";
                    }}
                  >
                    <Text
                      strong
                      style={{
                        color: bloodAmount === 250 ? "#bd0026" : "#333",
                        fontSize: 20,
                      }}
                    >
                      250ml (Standard)
                    </Text>
                    <Text
                      type="secondary"
                      style={{
                        display: "block",
                        marginTop: 4,
                        fontSize: 13,
                      }}
                    >
                      For donors weighing 45kg or less
                    </Text>
                  </Button>
                </Col>
              </Row>
            </div>

            <Card
              style={{
                marginBottom: 24,
                borderRadius: 16,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                border: "none",
                overflow: "hidden",
                transition: "all 0.3s",
                ":hover": {
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                },
              }}
              bodyStyle={{ padding: 0 }}
            >
              <div
                style={{
                  padding: "16px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #f0f0f0",
                  backgroundColor: "#bd0026",
                }}
              >
                <Button
                  type="text"
                  icon={<LeftOutlined style={{ color: "#fff" }} />}
                  onClick={handlePrevMonth}
                  style={{ padding: 0 }}
                />
                <Title level={5} style={{ margin: 0, color: "#fff" }}>
                  {currentMonth.format("MMMM YYYY")}
                </Title>
                <Space>
                  <Button
                    type="text"
                    onClick={handleGoToToday}
                    style={{
                      padding: "4px 12px",
                      fontWeight: "bold",
                      color: "#bd0026",
                      backgroundColor: "#fff",
                      borderRadius: 20,
                      border: "none",
                      transition: "all 0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(0.95)";
                      e.currentTarget.style.backgroundColor = "#fff5f7";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.backgroundColor = "#fff";
                    }}
                  >
                    Today
                  </Button>
                  <Button
                    type="text"
                    icon={<RightOutlined style={{ color: "#fff" }} />}
                    onClick={handleNextMonth}
                    style={{ padding: 0 }}
                  />
                </Space>
              </div>

              <Calendar
                fullscreen={false}
                value={currentMonth}
                onPanelChange={handleMonthChange}
                disabledDate={disabledDate}
                headerRender={() => null}
                dateFullCellRender={(date) => {
                  const isSelected = date.isSame(selectedDate, "day");
                  const isToday = date.isSame(dayjs(), "day");
                  const isPast = date.isBefore(dayjs(), "day");
                  const isCurrentMonth = date.isSame(currentMonth, "month");

                  return (
                    <div
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: isSelected
                          ? "#bd0026"
                          : isToday
                          ? "#fff5f7"
                          : "transparent",
                        borderRadius: 8,
                        color: isSelected
                          ? "#fff"
                          : isToday
                          ? "#bd0026"
                          : isPast
                          ? "rgba(0, 0, 0, 0.25)"
                          : isCurrentMonth
                          ? "#616161"
                          : "rgba(0, 0, 0, 0.25)",
                        fontWeight:
                          isToday || (isCurrentMonth && !isPast)
                            ? "bold"
                            : "normal",
                        border: isToday ? "1px solid #bd0026" : "none",
                        opacity: isPast ? 0.6 : 1,
                        cursor: isPast ? "not-allowed" : "pointer",
                        transition: "all 0.2s",
                        position: "relative",
                      }}
                      onClick={() => !isPast && setSelectedDate(date)}
                      onMouseOver={(e) => {
                        if (!isPast) {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                            "0 2px 8px rgba(0,0,0,0.1)";
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isPast) {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "none";
                        }
                      }}
                    >
                      {isToday && !isSelected && (
                        <div
                          style={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                            width: 6,
                            height: 6,
                            backgroundColor: "#bd0026",
                            borderRadius: "50%",
                          }}
                        />
                      )}
                      <div>{date.date()}</div>
                    </div>
                  );
                }}
              />
            </Card>

            <div style={{ marginBottom: 24 }}>
              <div className="modern-header">
                <Title
                  level={5}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 8,
                    color: "#333",
                  }}
                >
                  <ClockCircleOutlined style={{ color: "#bd0026" }} /> Available
                  Time Slots
                </Title>
                <Text type="secondary" style={{ color: "#666" }}>
                  {selectedDate.format("dddd, D MMMM YYYY")}
                </Text>
              </div>

              {getAvailableTimeSlots().length > 0 ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(100px, 1fr))",
                    gap: 12,
                    marginTop: 16,
                  }}
                >
                  {getAvailableTimeSlots().map((time) => (
                    <Button
                      key={time}
                      type={selectedTime === time ? "primary" : "default"}
                      onClick={() => handleTimeSelect(time)}
                      style={{
                        borderRadius: 8,
                        padding: "8px 12px",
                        height: "auto",
                        fontWeight: 600,
                        backgroundColor:
                          selectedTime === time ? "#bd0026" : "#fff",
                        color: selectedTime === time ? "#fff" : "#333",
                        border:
                          selectedTime === time
                            ? "1px solid #bd0026"
                            : "1px solid #f0f0f0",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        transition: "all 0.2s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0,0,0,0.1)";
                        if (selectedTime !== time) {
                          e.currentTarget.style.borderColor = "#bd0026";
                        }
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(0,0,0,0.05)";
                        if (selectedTime !== time) {
                          e.currentTarget.style.borderColor = "#f0f0f0";
                        }
                      }}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              ) : (
                <Card
                  style={{
                    marginTop: 16,
                    borderRadius: 12,
                    backgroundColor: "#fafafa",
                    transition: "all 0.3s",
                    ":hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    },
                  }}
                  bodyStyle={{ padding: "16px" }}
                >
                  <Text type="secondary">
                    No available time slots for this day
                  </Text>
                </Card>
              )}
            </div>

            <Button
              type="primary"
              block
              size="large"
              onClick={handleBookAppointment}
              loading={loading}
              disabled={!selectedTime || !bloodAmount}
              style={{
                fontFamily: "Raleway",
                fontWeight: 600,
                backgroundColor: "#bd0026",
                color: "#fff",
                border: "1px solid #bd0026",
                borderRadius: 50,
                height: 50,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.transform = "scale(0.95)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 12px rgba(189, 0, 38, 0.2)";
                }
              }}
              onMouseOut={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)";
                }
              }}
            >
              Confirm Appointment
            </Button>
          </>
        );
      case 2:
        return (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <Badge
              
              offset={[-20, 80]}
              style={{ backgroundColor: "transparent" }}
            >
              <Avatar
                size={100}
                style={{
                  backgroundColor: "#ffd8df",
                  border: "2px solid #bd0026",
                  transition: "all 0.3s",
                }}
                icon={
                  <HeartOutlined style={{ color: "#bd0026", fontSize: 48 }} />
                }
              />
            </Badge>

            <Title level={3} style={{ marginTop: 48, color: "#333" }}>
              Appointment Booked Successfully!
            </Title>

            <Card
              style={{
                maxWidth: 500,
                margin: "24px auto",
                borderRadius: 16,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                border: "none",
                transition: "all 0.3s",
                ":hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                },
              }}
              bodyStyle={{ padding: 24 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <Avatar
                  size={48}
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: "#f0f0f0",
                    color: "#000",
                    marginRight: 16,
                    transition: "all 0.3s",
                  }}
                />
                <div style={{ textAlign: "left" }}>
                  <Text strong style={{ display: "block", fontSize: 16 }}>
                    {userInfo?.fullName || "Donor"}
                  </Text>
                  <Text type="secondary">
                    {donationType === "blood"
                      ? "Whole Blood Donation"
                      : "Plasma Donation"}
                  </Text>
                </div>
              </div>

              <Divider style={{ margin: "16px 0", borderColor: "#f0f0f0" }} />

              <Row gutter={16}>
                <Col span={8}>
                  <div style={{ textAlign: "center" }}>
                    <CalendarOutlined
                      style={{
                        fontSize: 20,
                        color: "#bd0026",
                        marginBottom: 8,
                        transition: "all 0.3s",
                      }}
                    />
                    <Text
                      type="secondary"
                      style={{ display: "block", fontSize: 12 }}
                    >
                      Date
                    </Text>
                    <Text strong style={{ color: "#333" }}>
                      {selectedDate.format("DD/MM/YYYY")}
                    </Text>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: "center" }}>
                    <ClockCircleOutlined
                      style={{
                        fontSize: 20,
                        color: "#bd0026",
                        marginBottom: 8,
                        transition: "all 0.3s",
                      }}
                    />
                    <Text
                      type="secondary"
                      style={{ display: "block", fontSize: 12 }}
                    >
                      Time
                    </Text>
                    <Text strong style={{ color: "#333" }}>
                      {selectedTime}
                    </Text>
                  </div>
                </Col>
                <Col span={8}>
                  <div style={{ textAlign: "center" }}>
                    <EnvironmentOutlined
                      style={{
                        fontSize: 20,
                        color: "#bd0026",
                        marginBottom: 8,
                        transition: "all 0.3s",
                      }}
                    />
                    <Text
                      type="secondary"
                      style={{ display: "block", fontSize: 12 }}
                    >
                      Location
                    </Text>
                    <Text strong style={{ color: "#333" }}>
                      Hemora Center
                    </Text>
                  </div>
                </Col>
              </Row>

              <Divider style={{ margin: "24px 0", borderColor: "#f0f0f0" }} />
              <div
                style={{
                  backgroundColor: "#fff5f7",
                  padding: "12px 16px",
                  borderRadius: 8,
                  textAlign: "center",
                  transition: "all 0.3s",
                  ":hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Text
                  type="secondary"
                  style={{ display: "block", fontSize: 12 }}
                >
                  Donation Amount
                </Text>
                <Text
                  strong
                  style={{
                    color: "#bd0026",
                    fontSize: 18,
                  }}
                >
                  {bloodAmount}ml
                </Text>
              </div>
            </Card>

            <Paragraph
              style={{
                fontSize: 16,
                maxWidth: 500,
                margin: "24px auto",
                color: "#666",
              }}
            >
              We've sent a confirmation to your email. Please arrive 15 minutes
              early and bring your ID for the donation.
            </Paragraph>

            <Space size={16}>
              <Button
                type="default"
                size="large"
                onClick={() => {
                  navigate("/app/member/home");
                }}
                style={{
                  fontFamily: "Raleway",
                  fontWeight: 600,
                  backgroundColor: "#fff",
                  color: "#bd0026",
                  border: "1px solid #bd0026",
                  borderRadius: 50,
                  height: 50,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(0.95)";
                  e.currentTarget.style.backgroundColor = "#fff5f7";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor = "#fff";
                }}
              >
                Back to Home
              </Button>
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  navigate("/app/member/schedule");
                }}
                style={{
                  fontFamily: "Raleway",
                  fontWeight: 600,
                  backgroundColor: "#bd0026",
                  color: "#fff",
                  border: "1px solid #bd0026",
                  borderRadius: 50,
                  height: 50,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(0.95)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 12px rgba(189, 0, 38, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                View Appointments
              </Button>
            </Space>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "24px 16px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Card
          style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            border: "none",
            borderRadius: 16,
            overflow: "hidden",
            transition: "all 0.3s",
            ":hover": {
              boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
            },
          }}
          bodyStyle={{ padding: 0 }}
        >
          <Row gutter={[0, 0]}>
            <Col
              xs={24}
              md={10}
              style={{
                padding: 40,
                background: "linear-gradient(135deg, #bd0026 0%, #ff4d4f 100%)",
              }}
            >
              <div style={{ position: "sticky", top: 24, color: "#fff" }}>
                <Title
                  level={3}
                  style={{
                    fontWeight: 600,
                    marginBottom: 8,
                    color: "#fff",
                  }}
                >
                  Book Blood Donation
                </Title>
                <Text style={{ color: "rgba(255,255,255,0.8)" }}>
                  Schedule a life-saving donation in just 3 simple steps
                </Text>

                <Steps
                  current={step}
                  direction="vertical"
                  style={{ margin: "40px 0" }}
                  items={[
                    {
                      title: (
                        <Text style={{ color: "#fff" }}>Donation Type</Text>
                      ),
                      description:
                        step > 0 ? (
                          <Text style={{ color: "rgba(255,255,255,0.7)" }}>
                            Selected
                          </Text>
                        ) : null,
                      icon: (
                        <Avatar
                          size={24}
                          style={{
                            backgroundColor:
                              step >= 0 ? "#fff" : "rgba(255,255,255,0.2)",
                            color: step >= 0 ? "#bd0026" : "#fff",
                            fontWeight: "bold",
                            transition: "all 0.3s",
                          }}
                        >
                          1
                        </Avatar>
                      ),
                    },
                    {
                      title: <Text style={{ color: "#fff" }}>Date & Time</Text>,
                      description:
                        step > 1 ? (
                          <Text style={{ color: "rgba(255,255,255,0.7)" }}>
                            Selected
                          </Text>
                        ) : null,
                      icon: (
                        <Avatar
                          size={24}
                          style={{
                            backgroundColor:
                              step >= 1 ? "#fff" : "rgba(255,255,255,0.2)",
                            color: step >= 1 ? "#bd0026" : "#fff",
                            fontWeight: "bold",
                            transition: "all 0.3s",
                          }}
                        >
                          2
                        </Avatar>
                      ),
                    },
                    {
                      title: (
                        <Text style={{ color: "#fff" }}>Confirmation</Text>
                      ),
                      icon: (
                        <Avatar
                          size={24}
                          style={{
                            backgroundColor:
                              step === 2 ? "#fff" : "rgba(255,255,255,0.2)",
                            color: step === 2 ? "#bd0026" : "#fff",
                            fontWeight: "bold",
                            transition: "all 0.3s",
                          }}
                        >
                          3
                        </Avatar>
                      ),
                    },
                  ]}
                />

                <div style={{ marginTop: "auto" }}>
                  <div
                    style={{
                      padding: 16,
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      marginBottom: 24,
                      transition: "all 0.3s",
                      ":hover": {
                        backgroundColor: "rgba(255,255,255,0.15)",
                      },
                    }}
                  >
                    <Title level={5} style={{ marginBottom: 8, color: "#fff" }}>
                      Need Help?
                    </Title>
                    <Text
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        display: "block",
                      }}
                    >
                      Hotline: (028) 3716 4242
                    </Text>
                    <Text style={{ color: "rgba(255,255,255,0.8)" }}>
                      Email: support@hemora.org
                    </Text>
                  </div>

                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <img
                      src={banner2}
                      alt="Hemora"
                      style={{
                        height: 0,
                      }}
                    />
                    <Text
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: 12,
                      }}
                    >
                      Hemora Blood Donation System
                    </Text>
                  </div>
                </div>
              </div>
            </Col>

            <Col
              xs={24}
              md={14}
              style={{
                padding: 40,
                backgroundColor: "#fff",
              }}
            >
              {renderStepContent()}
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
};