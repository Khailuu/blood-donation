import { Card, Button, Typography, Calendar, Space, Row, Col } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useState } from "react";
import { banner2 } from "../../../../assets";

const { Title, Text, Paragraph } = Typography;

export const BookingDonate = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState("14:15");

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "14:00",
    "14:15",
    "14:30",
    "15:00",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "48px 16px",
      }}
    >
      <Card
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          borderRadius: 20,
          padding: 24,
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        }}
      >
        <Row gutter={[32, 32]} style={{ marginTop: 24 }}>
          <Col xs={24} md={12}>
            <Title level={3} style={{ fontFamily: "Raleway" }}>
              Hemora Hospital
            </Title>
            <Text style={{ fontFamily: "Raleway", fontSize: 16 }}>
              <EnvironmentOutlined /> District 1, HCMC
            </Text>

            <div style={{ marginTop: 32 }}>
              <Title level={5} style={{ fontFamily: "Raleway" }}>
                Additional Information
              </Title>
              <Paragraph
                style={{ fontFamily: "Raleway", fontSize: 14, color: "#444" }}
              >
                Please arrive about 15 minutes before your appointment time. A
                specialist doctor will perform a short interview and preliminary
                tests to check your donation eligibility.
              </Paragraph>
              <Paragraph
                style={{ fontFamily: "Raleway", fontSize: 14, color: "#444" }}
              >
                Don’t forget to bring a valid ID and your health card. You
                should be in good health and have had a light breakfast (avoid
                dairy or heavy fatty foods).
              </Paragraph>

              <img src={banner2} alt="Rosso" style={{ height: 90 }} />
              <Text
                type="secondary"
                style={{
                  fontFamily: "Raleway",
                  fontSize: 12,
                  display: "block",
                  marginTop: 8,
                }}
              >
                Booking service in collaboration with Emos Health.
              </Text>
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div
              style={{
                overflow: "hidden",
                marginBottom: 24,
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <Calendar
                fullscreen={false}
                value={selectedDate}
                onSelect={(value) => setSelectedDate(value)}
                style={{
                  fontFamily: "Raleway",
                  backgroundColor: "#c41c33",
                  border: "1px solid #c41c33",
                }}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <Title level={5} style={{ fontFamily: "Raleway" }}>
                Select a Time Slot
              </Title>
              <Space wrap>
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    type={selectedTime === time ? "primary" : "default"}
                    onClick={() => setSelectedTime(time)}
                    style={{
                      borderRadius: 12,
                      padding: "6px 16px",
                      fontFamily: "Raleway",
                      backgroundColor:
                        selectedTime === time ? "#c41c33" : "#fff",
                      color: selectedTime === time ? "#fff" : "#000",
                      border:
                        selectedTime === time ? "1px solid #c41c33" : undefined,
                      boxShadow:
                        selectedTime === time
                          ? "0 2px 6px rgba(0,0,0,0.1)"
                          : undefined,
                    }}
                  >
                    {time}
                  </Button>
                ))}
              </Space>
            </div>

            <Button
              type="primary"
              block
              size="large"
              style={{
                backgroundColor: "#c41c33",
                borderRadius: 30,
                height: 48,
                fontWeight: "bold",
                fontSize: 16,
                fontFamily: "Raleway",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
              onClick={() =>
                alert(
                  `Booked on ${selectedDate.format(
                    "YYYY-MM-DD"
                  )} at ${selectedTime}`
                )
              }
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(0.95)";
                e.currentTarget.style.backgroundColor = "#a80022";
                e.currentTarget.style.borderColor = "#a80022";
                e.currentTarget.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.borderColor = "black";
                e.currentTarget.style.color = "black";
              }}
            >
              Book Appointment
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
