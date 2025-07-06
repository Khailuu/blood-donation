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
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { banner2 } from "../../../../assets";
import { userService } from "../../../../services/manageUserService";
import { donationRequestService } from "../../../../services/donationRequestService ";
import { useNavigate } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

export const BookingDonate = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [donationType, setDonationType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(dayjs()), 60000);

    const fetchUserInfo = async () => {
      try {
        const response = await userService.getCurrentUser();
        setUserInfo(response);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        message.error("Failed to load user information");
      }
    };

    fetchUserInfo();
    return () => clearInterval(timer);
  }, []);

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
    if (!donationType) {
      message.error("Please select a donation type");
      return;
    }
    if (!selectedTime) {
      message.error("Please select a time slot");
      return;
    }

    setLoading(true);
    try {
      const requestData = {
        amountBlood: 1,
        componentType: donationType === "blood" ? "Whole" : "Plasma",
        date: dayjs(
          `${selectedDate.format("YYYY-MM-DD")}T${selectedTime}:00`
        ).toISOString(),
        phone: userInfo?.phone || "",
        note: `Full name: ${userInfo?.fullName || ""}`,
      };
      await donationRequestService.createDonationRequest(requestData);
      message.success("Appointment booked successfully!");
      setStep(2);
    } catch (error) {
      message.error(error.message || "Booking failed. Please try again");
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
              <Title level={3} style={{ marginBottom: 8 }}>
                Select Donation Type
              </Title>
              <Text type="secondary">
                Choose the type of donation you'd like to make
              </Text>
            </div>

            <div style={{ margin: "32px 0" }}>
              <Radio.Group
                onChange={(e) => {
                  setDonationType(e.target.value);
                  setStep(1);
                }}
                value={donationType}
                style={{ width: "100%" }}
              >
                <Row gutter={16}>
                  <Col span={12}>
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
                          donationType === "blood" ? "#fffafa" : "#fff",
                      }}
                    >
                      <HeartOutlined
                        style={{ fontSize: 32, color: "#bd0026" }}
                      />
                      <Title level={4} style={{ marginTop: 16 }}>
                        Whole Blood
                      </Title>
                      <Text type="secondary">10-15 minutes</Text>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card
                      hoverable
                      onClick={() => {
                        setDonationType("plasma");
                        setStep(1);
                      }}
                      style={{
                        textAlign: "center",
                        borderColor:
                          donationType === "plasma" ? "#bd0026" : "#f0f0f0",
                        backgroundColor:
                          donationType === "plasma" ? "#f0f9ff" : "#fff",
                      }}
                    >
                      <HeartOutlined
                        style={{ fontSize: 32, color: "#1890ff" }}
                      />
                      <Title level={4} style={{ marginTop: 16 }}>
                        Plasma
                      </Title>
                      <Text type="secondary">45-60 minutes</Text>
                    </Card>
                  </Col>
                </Row>
              </Radio.Group>
            </div>

            <Divider />

            <div style={{ marginTop: 24 }}>
              <Title
                level={5}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <InfoCircleOutlined /> What to expect
              </Title>
              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                  <Avatar size="small" style={{ backgroundColor: "#f0f0f0" }}>
                    1
                  </Avatar>
                  <div>
                    <Text strong>Bring valid ID</Text>
                    <Text type="secondary" style={{ display: "block" }}>
                      Government-issued photo ID required
                    </Text>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                  <Avatar size="small" style={{ backgroundColor: "#f0f0f0" }}>
                    2
                  </Avatar>
                  <div>
                    <Text strong>Hydrate well</Text>
                    <Text type="secondary" style={{ display: "block" }}>
                      Drink extra water before donating
                    </Text>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <Avatar size="small" style={{ backgroundColor: "#f0f0f0" }}>
                    3
                  </Avatar>
                  <div>
                    <Text strong>Eat healthy meals</Text>
                    <Text type="secondary" style={{ display: "block" }}>
                      Avoid fatty foods before donation
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
                style={{ padding: 0, marginBottom: 16 }}
              >
                Back
              </Button>
              <Title level={3} style={{ marginBottom: 8 }}>
                Select Date & Time
              </Title>
              <Text type="secondary">
                Choose a convenient time for your donation
              </Text>
            </div>

            <Card
              style={{
                marginBottom: 24,
                borderRadius: 24,
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                border: "none",
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
                  icon={<LeftOutlined />}
                  onClick={handlePrevMonth}
                  style={{ padding: 0, color: "#fff" }}
                />
                <Title level={5} style={{ margin: 0, color: "#fff" }}>
                  {currentMonth.format("MMMM YYYY")}
                </Title>
                <Space>
                  <Button
                    type="text"
                    onClick={handleGoToToday}
                    style={{
                      padding: 10,
                      fontWeight: "bold",
                      color: "#bd0026",
                      backgroundColor: "#fff",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(0.95)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    Today
                  </Button>
                  <Button
                    type="text"
                    icon={<RightOutlined />}
                    onClick={handleNextMonth}
                    style={{ padding: 0, color: "#fff" }}
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
                        backgroundColor: isSelected ? "#bd0026" : "transparent",
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
                        border: isToday ? "1px solid #ff4d4f" : "none",
                        opacity: isPast ? 0.6 : 1,
                        cursor: isPast ? "not-allowed" : "pointer",
                        transition: "all 0.2s",
                        position: "relative",
                      }}
                      onClick={() => !isPast && setSelectedDate(date)}
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
                  }}
                >
                  <ClockCircleOutlined /> Available Time Slots
                </Title>
                <Text type="secondary">
                  {selectedDate.format("dddd, MMMM D")}
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
                        color: selectedTime === time ? "#fff" : "#000",
                        border:
                          selectedTime === time
                            ? "1px solid #bd0026"
                            : "1px solid #f0f0f0",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        transition: "all 0.2s",
                      }}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              ) : (
                <Card style={{ marginTop: 16 }}>
                  <Text type="secondary">No available slots for this date</Text>
                </Card>
              )}
            </div>

            <Button
              type="primary"
              block
              size="large"
              onClick={handleBookAppointment}
              loading={loading}
              disabled={!selectedTime}
              style={{
                backgroundColor: "#bd0026",
                borderRadius: 8,
                height: 48,
                fontWeight: 600,
                fontSize: 16,
                border: "none",
                boxShadow: "0 2px 8px rgba(255,77,79,0.2)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(0.95)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
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
              offset={[0, 32]}
              style={{ backgroundColor: "#fff" }}
            >
              <Avatar
                size={100}
                style={{
                  backgroundColor: "#ffd8df",
                  border: "2px solid #bd0026",
                }}
                icon={
                  <HeartOutlined style={{ color: "#bd0026", fontSize: 48 }} />
                }
              />
            </Badge>

            <Title level={3} style={{ marginTop: 48 }}>
              Appointment Confirmed!
            </Title>

            <Card
              style={{
                maxWidth: 400,
                margin: "24px auto",
                borderRadius: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <Avatar
                  icon={<UserOutlined />}
                  style={{ backgroundColor: "#f0f0f0", color: "#000" }}
                />
                <div style={{ marginLeft: 12, textAlign: "left" }}>
                  <Text strong style={{ display: "block" }}>
                    {userInfo?.fullName || "Donor"}
                  </Text>
                  <Text type="secondary">
                    {donationType === "blood" ? "Whole Blood" : "Plasma"}{" "}
                    Donation
                  </Text>
                </div>
              </div>

              <Divider style={{ margin: "16px 0" }} />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Text
                    type="secondary"
                    style={{ display: "block", fontSize: 12 }}
                  >
                    Date
                  </Text>
                  <Text strong>{selectedDate.format("MMM D, YYYY")}</Text>
                </div>
                <div>
                  <Text
                    type="secondary"
                    style={{ display: "block", fontSize: 12 }}
                  >
                    Time
                  </Text>
                  <Text strong>{selectedTime}</Text>
                </div>
                <div>
                  <Text
                    type="secondary"
                    style={{ display: "block", fontSize: 12 }}
                  >
                    Location
                  </Text>
                  <Text strong>Hemora Center</Text>
                </div>
              </div>
            </Card>

            <Paragraph
              style={{ fontSize: 16, maxWidth: 500, margin: "24px auto" }}
            >
              We've sent a confirmation to your email. Please arrive 15 minutes
              early and bring a valid ID.
            </Paragraph>

            <Space size={16}>
              <Button
                type="default"
                size="large"
                onClick={() => {
                  navigate("/");
                }}
                style={{
                  borderRadius: 8,
                  height: 48,
                  fontWeight: 600,
                  fontSize: 16,
                  border: "1px solid #d9d9d9",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#bd0026";
                  e.currentTarget.style.border = "1px solid #bd0026";
                  e.currentTarget.style.transform = "scale(0.95)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "black";
                  e.currentTarget.style.border = "1px solid #d9d9d9";
                  e.currentTarget.style.transform = "scale(1)";
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
                  borderRadius: 8,
                  height: 48,
                  fontWeight: 600,
                  fontSize: 16,
                  backgroundColor: "#bd0026",
                  border: "1px solid #d9d9d9",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(0.95)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                View Schedule
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
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Card
          style={{
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            border: "none",
          }}
          bodyStyle={{ padding: 0 }}
        >
          <Row gutter={[32, 32]}>
            <Col
              xs={24}
              md={10}
              style={{
                padding: 40,
                background: "#ffd8df",
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
              }}
            >
              <div style={{ position: "sticky", top: 24 }}>
                <Title level={3} style={{ fontWeight: 600, marginBottom: 8 }}>
                  Book Your Donation
                </Title>
                <Text style={{ color: "#666" }}>
                  Schedule your life-saving donation in just a few steps
                </Text>

                <Steps
                  current={step}
                  direction="vertical"
                  style={{ margin: "40px 0" }}
                  styles={{
                    connector: {
                      backgroundColor: "#f0f0f0",
                      "&::after": {
                        backgroundColor: "#bd0026",
                      },
                    },
                  }}
                >
                  <Step
                    title="Donation Type"
                    description={step > 0 ? "Selected" : null}
                    icon={
                      <Avatar
                        size={24}
                        style={{
                          backgroundColor: step >= 0 ? "#bd0026" : "#f0f0f0",
                          color: "#fff",
                        }}
                      >
                        1
                      </Avatar>
                    }
                  />
                  <Step
                    title="Date & Time"
                    description={step > 1 ? "Scheduled" : null}
                    icon={
                      <Avatar
                        size={24}
                        style={{
                          backgroundColor: step >= 1 ? "#bd0026" : "#f0f0f0",
                          color: "#fff",
                        }}
                      >
                        2
                      </Avatar>
                    }
                  />
                  <Step
                    title="Confirmation"
                    icon={
                      <Avatar
                        size={24}
                        style={{
                          backgroundColor: step === 2 ? "#bd0026" : "#f0f0f0",
                          color: "#fff",
                        }}
                      >
                        3
                      </Avatar>
                    }
                  />
                </Steps>

                <div style={{ marginTop: "auto" }}>
                  <div
                    style={{
                      padding: 16,
                      backgroundColor: "#f6f6f6",
                      borderRadius: 12,
                      marginBottom: 24,
                    }}
                  >
                    <Title level={5} style={{ marginBottom: 8 }}>
                      Need Help?
                    </Title>
                    <Text style={{ color: "#666", display: "block" }}>
                      Call us at (123) 456-7890
                    </Text>
                    <Text style={{ color: "#666" }}>
                      Email: help@hemora.org
                    </Text>
                  </div>

                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <img src={banner2} alt="Hemora" style={{ height: 40 }} />
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      Powered by Hemora Donation System
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
                backgroundColor: "#fff5f7",
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
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
