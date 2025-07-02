// Giữ nguyên toàn bộ import như bạn gửi
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
} from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  LeftOutlined,
  RightOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  ArrowLeftOutlined,
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
            <Title
              level={4}
              style={{ fontFamily: "Raleway", marginBottom: 16 }}
            >
              Select Donation Type
            </Title>
            <Radio.Group
              onChange={(e) => {
                setDonationType(e.target.value);
                setStep(1);
              }}
              value={donationType}
              style={{ width: "100%" }}
            >
              <Radio.Button
                value="blood"
                style={{
                  width: "50%",
                  textAlign: "center",
                  fontFamily: "Raleway",
                  backgroundColor:
                    donationType === "blood" ? "#c41c33" : "#fff",
                  color: donationType === "blood" ? "#fff" : "#000",
                }}
              >
                Whole Blood
              </Radio.Button>
              <Radio.Button
                value="plasma"
                style={{
                  width: "50%",
                  textAlign: "center",
                  fontFamily: "Raleway",
                  backgroundColor:
                    donationType === "plasma" ? "#c41c33" : "#fff",
                  color: donationType === "plasma" ? "#fff" : "#000",
                }}
              >
                Plasma
              </Radio.Button>
            </Radio.Group>
            <div style={{ marginTop: 24 }}>
              <Title level={5} style={{ fontFamily: "Raleway" }}>
                What to expect:
              </Title>
              <ul style={{ fontFamily: "Raleway", paddingLeft: 20 }}>
                <li>Whole blood donation takes about 10-15 minutes</li>
                <li>Plasma donation takes about 45-60 minutes</li>
                <li>Please bring a valid ID</li>
                <li>Drink plenty of water before donating</li>
              </ul>
            </div>
          </div>
        );
      case 1:
        return (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <Button icon={<ArrowLeftOutlined />} onClick={() => setStep(0)}>
                Back
              </Button>
              
            </div>

            <div
              style={{
                marginBottom: 24,
                border: "1px solid #f0f0f0",
                borderRadius: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              }}
            >
              <Calendar
                fullscreen={false}
                value={currentMonth}
                onPanelChange={handleMonthChange}
                disabledDate={disabledDate}
                headerRender={() => (
                  <div
                    style={{
                      padding: 10,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #f0f0f0",
                      backgroundColor: "#c41c33",
                    }}
                  >
                    <Button
                      type="text"
                      icon={<LeftOutlined />}
                      onClick={handlePrevMonth}
                      style={{ color: "#fff" }}
                    />
                    <Title level={4} style={{ color: "#fff", margin: 0 }}>
                      {currentMonth.format("MMMM YYYY")}
                    </Title>
                    <Space>
                      <Button
                        type="text"
                        style={{ color: "#fff" }}
                        onClick={handleGoToToday}
                      >
                        Today
                      </Button>
                      <Button
                        type="text"
                        icon={<RightOutlined />}
                        onClick={handleNextMonth}
                        style={{ color: "#fff" }}
                      />
                    </Space>
                  </div>
                )}
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
                        backgroundColor: isSelected ? "#c41c33" : "transparent",
                        borderRadius: 8,
                        color: isSelected
                          ? "#fff"
                          : isToday
                          ? "#c41c33"
                          : isPast
                          ? "rgba(0, 0, 0, 0.25)"
                          : isCurrentMonth
                          ? "#616161"
                          : "rgba(0, 0, 0, 0.25)",
                        fontWeight:
                          isToday || (isCurrentMonth && !isPast)
                            ? "bold"
                            : "normal",
                        border: isToday ? "1px solid #c41c33" : "none",
                        opacity: isPast ? 0.6 : 1,
                        cursor: isPast ? "not-allowed" : "pointer",
                      }}
                      onClick={() => !isPast && setSelectedDate(date)}
                    >
                      <div>{date.date()}</div>
                    </div>
                  );
                }}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <ClockCircleOutlined
                  style={{ color: "#c41c33", marginRight: 8 }}
                />
                <Title level={5} style={{ fontFamily: "Raleway", margin: 0 }}>
                  Available Time Slots
                </Title>
              </div>
              {getAvailableTimeSlots().length > 0 ? (
                <Space wrap>
                  {getAvailableTimeSlots().map((time) => (
                    <Button
                      key={time}
                      type={selectedTime === time ? "primary" : "default"}
                      onClick={() => handleTimeSelect(time)}
                      style={{
                        borderRadius: 12,
                        padding: "6px 16px",
                        fontFamily: "Raleway",
                        backgroundColor:
                          selectedTime === time ? "#c41c33" : "#fff",
                        color: selectedTime === time ? "#fff" : "#000",
                        border:
                          selectedTime === time
                            ? "1px solid #c41c33"
                            : "1px solid #d9d9d9",
                        boxShadow:
                          selectedTime === time
                            ? "0 2px 6px rgba(0,0,0,0.1)"
                            : "none",
                        transition: "all 0.3s",
                      }}
                    >
                      {time}
                    </Button>
                  ))}
                </Space>
              ) : (
                <Tag color="error" style={{ fontFamily: "Raleway" }}>
                  No available slots for this date
                </Tag>
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
                backgroundColor: "#c41c33",
                borderRadius: 30,
                height: 48,
                fontWeight: "bold",
                fontSize: 16,
                fontFamily: "Raleway",
              }}
            >
              Confirm Appointment
            </Button>
          </>
        );
      case 2:
        return (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <CheckCircleOutlined
              style={{ fontSize: 64, color: "#52c41a", marginBottom: 24 }}
            />
            <Title level={3} style={{ fontFamily: "Raleway" }}>
              Appointment Booked Successfully!
            </Title>
            <Paragraph style={{ fontFamily: "Raleway", fontSize: 16 }}>
              Your {donationType === "blood" ? "whole blood" : "plasma"}{" "}
              donation is scheduled for
              <br />
              <Text strong>
                {selectedDate.format("MMMM D, YYYY")} at {selectedTime}
              </Text>
            </Paragraph>
            <Paragraph style={{ fontFamily: "Raleway" }}>
              You'll receive a confirmation email shortly.
            </Paragraph>

            <div style={{ marginTop: 24 }}>
              <Button
                type="default"
                icon={<CalendarOutlined />}
                size="large"
                onClick={() => {
                  navigate("/app/member/schedule");
                }}
              >
                View Schedule
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ minHeight: "100vh", padding: "48px 16px" }}>
      <Card
        style={{
          borderRadius: 20,
          padding: 24,
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        }}
      >
        <Row gutter={[32, 32]} style={{ marginTop: 24 }}>
          <Col xs={24} md={12}>
            <Title level={3} style={{ fontFamily: "Raleway", fontWeight: 600 }}>
              Hemora - Blood Donation Support
            </Title>
            <Text style={{ fontFamily: "Raleway", fontSize: 16 }}>
              <EnvironmentOutlined /> District 1, HCMC
            </Text>
            <div style={{ marginTop: 32 }}>
              <Steps
                current={step}
                direction="vertical"
                style={{ marginBottom: 32 }}
                progressDot={(dot, { status, index }) => (
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor:
                        index === step
                          ? "#c41c33"
                          : status === "finish"
                          ? "#52c41a"
                          : "#d9d9d9",
                    }}
                  />
                )}
              >
                <Step
                  title={
                    <span
                      style={{
                        fontFamily: "Raleway",
                        color: step >= 0 ? "#c41c33" : "#999",
                      }}
                    >
                      Select Donation Type
                    </span>
                  }
                />
                <Step
                  title={
                    <span
                      style={{
                        fontFamily: "Raleway",
                        color: step >= 1 ? "#c41c33" : "#999",
                      }}
                    >
                      Choose Date & Time
                    </span>
                  }
                />
                <Step
                  title={
                    <span
                      style={{
                        fontFamily: "Raleway",
                        color: step === 2 ? "#c41c33" : "#999",
                      }}
                    >
                      Confirmation
                    </span>
                  }
                />
              </Steps>
              <Title level={5} style={{ fontFamily: "Raleway" }}>
                Additional Information
              </Title>
              <Paragraph
                style={{ fontFamily: "Raleway", fontSize: 15, color: "#444" }}
              >
                Please arrive about 15 minutes before your appointment time.
              </Paragraph>
              <Paragraph
                style={{ fontFamily: "Raleway", fontSize: 14, color: "#444" }}
              >
                Don't forget to bring a valid ID and your health card.
              </Paragraph>
              <div style={{ marginTop: "40px" }}>
                <img src={banner2} alt="Rosso" style={{ height: 90 }} />
                <Text
                  type="secondary"
                  style={{
                    fontFamily: "Raleway",
                    fontSize: 14,
                    fontWeight: "bold",
                    display: "block",
                    marginTop: 8,
                  }}
                >
                  Booking service in collaboration with Hemora.
                </Text>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            {renderStepContent()}
          </Col>
        </Row>
      </Card>
    </div>
  );
};
