import React, { useState } from "react";
import { Card, Typography, Button, Row, Col } from "antd";
import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { authService } from "../../../../services/authService";
import { blood_bag } from "../../../../assets";

const { Title, Text } = Typography;

export const DonateSchedule = () => {
  const currentUser = authService.getCurrentUser(); // giả sử có name
  const [activeTab, setActiveTab] = useState("upcoming");

  const appointments = [
    {
      date: dayjs("2025-06-20"),
      time: "14:15 - 14:30",
      donationType: "Blood",
      location: "Piazza Ospedale Maggiore, 3, 20162, Milano",
      status: "pending",
    },
    {
      date: dayjs("2025-06-24"),
      time: "09:00 - 09:30",
      donationType: "Plasma",
      location: "Via della Salute, 12, 20100, Milano",
      status: "pending",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff2f2",
        padding: "48px 16px",
        fontFamily: "Raleway",
      }}
    >
      <Card
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          borderRadius: 20,
          padding: 24,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <Title level={3} style={{ textAlign: "center", fontFamily: "Raleway" }}>
          {currentUser.name}'s Donation Schedule
        </Title>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              background: "#f3f3f3",
              borderRadius: 999,
              padding: 4,
            }}
          >
            {["upcoming", "archived"].map((key) => (
              <Button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  fontFamily: "Raleway",
                  border: "none",
                  backgroundColor:
                    activeTab === key ? "#bd0026" : "transparent",
                  color: activeTab === key ? "white" : "#444",
                  padding: "6px 20px",
                  borderRadius: 999,
                  fontWeight: activeTab === key ? "bold" : "normal",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                {key === "upcoming" ? "Programmate" : "Archiviate"}
              </Button>
            ))}
          </div>
        </div>

        {activeTab === "upcoming" ? (
          <Row gutter={[16, 16]}>
            {appointments.map((item, idx) => (
              <Col xs={24} md={12} key={idx}>
                <Card
                  style={{
                    borderRadius: 16,
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    padding: 0,
                  }}
                  bodyStyle={{ padding: 0 }}
                >
                  <div
                    style={{
                      backgroundColor: "#ffd9df",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      padding: "12px 0",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={blood_bag}
                      alt="donation"
                      style={{ height: 60, marginBottom: 4 }}
                    />
                  </div>

                  <div style={{ padding: 16 }}>
                    <div
                      style={{
                        backgroundColor: "#fff",
                        width: 50,
                        height: 60,
                        textAlign: "center",
                        borderRadius: 12,
                        fontFamily: "Raleway",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                        marginBottom: 16,
                      }}
                    >
                      <Title level={4} style={{ margin: 0, color: "#bd0026" }}>
                        {item.date.format("DD")}
                      </Title>
                      <Text style={{ fontSize: 12 }}>
                        {item.date.format("MMM").toUpperCase()}
                      </Text>
                    </div>

                    <Title
                      level={5}
                      style={{ fontFamily: "Raleway", marginBottom: 8 }}
                    >
                      {item.donationType} Donation
                    </Title>
                    <Text style={{ display: "block", marginBottom: 4 }}>
                      <ClockCircleOutlined /> {item.time}
                    </Text>
                    <Text style={{ display: "block", marginBottom: 12 }}>
                      <EnvironmentOutlined /> {item.location}
                    </Text>

                    <Button
                      type="default"
                      style={{
                        backgroundColor:
                          item.status === "cancelled" ? "#f0f0f0" : "#bd0026",
                        borderColor:
                          item.status === "cancelled" ? "#ccc" : "#bd0026",
                        color: item.status === "cancelled" ? "#444" : "#fff",
                        width: "100%",
                        borderRadius: "50px",
                        height: "40px",
                        fontWeight: "bold",
                        fontSize: "14px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "scale(0.95)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      {item.status === "cancelled"
                        ? "Cancelled"
                        : "Cancel Booking"}
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div style={{ textAlign: "center", padding: 32 }}>
            No archived appointments.
          </div>
        )}
      </Card>
    </div>
  );
};
