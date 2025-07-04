import { Button, Card, Col, message, Row, Typography, Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
const { Title, Paragraph, Text } = Typography;
import React, { useEffect, useState } from "react";
import { banner1, blood_bag } from "../../../../assets";
import { Link } from "react-router-dom";
import { BloodBagIcon } from "../../../../assets/CutomIcons";

import { authService } from "../../../../services/authService";
import dayjs from "dayjs";
import { donationRequestService } from "../../../../services/donationRequestService ";

export const DonateSpace = () => {
  const currentUser = authService.getCurrentUser();
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser?.userId) return;

    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const response = await donationRequestService.getMyDonationRequests(
          currentUser.userId
        );

        const allItems = response?.items || response?.data?.items || [];
        const myItems = allItems.filter(
          (item) => item?.userId === currentUser.userId
        );

        console.log({ myItems });

        const formatted = myItems
          .filter((item) => item?.status?.toLowerCase() === "pending")
          .map((item) => ({
            date: item?.requestTime ? dayjs(item.requestTime) : dayjs(),
            time: item?.requestTime
              ? dayjs(item.requestTime).format("HH:mm")
              : "00:00",
            donationType: item?.componentType || "Unknown",
            status: item?.status || "Unknown",
            id: item?.requestId || "",
          }));

        setUpcomingAppointments(formatted);
      } catch (error) {
        console.error("Fetch appointments error:", error);
        message.error("Failed to fetch appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [currentUser?.userId]);

  const getStatusColor = (status) => {
    if (!status) return "blue";

    switch (status.toLowerCase()) {
      case "pending":
        return "orange";
      case "approved":
        return "green";
      case "rejected":
        return "red";
      case "cancelled":
        return "gray";
      default:
        return "blue";
    }
  };

  if (!currentUser) {
    return (
      <div style={{ margin: "50px 0", textAlign: "center" }}>
        <Card>
          <Title level={4}>Please login to view this content</Title>
          <Button type="primary" href="/login">
            Login
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="" style={{ margin: "50px 0" }}>
      <Card
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "50px",
          padding: "30px 50px",
        }}
      >
        <Card
          style={{
            padding: "40px",
            borderRadius: 50,
            background: "#fff",
            boxShadow: "0 0 12px rgba(0,0,0,0.05)",
            minHeight: 360,
            display: "flex",
            flexDirection: "column",
            marginBottom: "40px",
          }}
        >
          <Row>
            <Col md={14}>
              <Title style={{ fontFamily: "Raleway" }}>What you can do</Title>
              <Paragraph style={{ fontFamily: "Raleway", fontSize: "20px" }}>
                Welcome to your personal area! Here you can book a donation,
                find your donation history, view our events and much more!
              </Paragraph>
            </Col>
            <Col md={10}>
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={banner1}
                  alt="Banner"
                  style={{
                    width: "60%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Card>

        <Card
          style={{
            padding: "40px",
            borderRadius: 50,
            background: "#fff",
            boxShadow: "0 0 12px rgba(0,0,0,0.05)",
            minHeight: 360,
            display: "flex",
            flexDirection: "column",
            marginBottom: "40px",
          }}
        >
          <Title style={{ fontFamily: "Raleway" }}>What you can do</Title>

          <Row gutter={[24, 24]} style={{ margin: "0 50px" }}>
            <Col xs={24} md={12}>
              <div
                style={{
                  minHeight: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  border: "2px dashed #000",
                  borderRadius: "16px",
                  padding: "24px",
                  backgroundColor: "#ffd8df",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={blood_bag}
                    alt="Banner"
                    style={{
                      width: "60%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Title style={{ fontFamily: "Raleway", textAlign: "center" }}>
                  Donate Blood
                </Title>
                <Button
                  shape="round"
                  style={{
                    fontweight: "bold",
                    fontSize: "15px",
                    backgroundColor: "transparent",
                    height: "40px",
                    border: "1px solid #000",
                    fontWeight: "600",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(0.95)";
                    e.currentTarget.style.backgroundColor = "#a80022";
                    e.currentTarget.style.borderColor = "#a80022";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "black";
                    e.currentTarget.style.color = "black";
                  }}
                >
                  Donate Now
                </Button>
              </div>
            </Col>

            <Col xs={24} md={12}>
              <div
                style={{
                  minHeight: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  border: "2px dashed #000",
                  borderRadius: "16px",
                  padding: "24px",
                  backgroundColor: "#fff8d0",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={blood_bag}
                    alt="Banner"
                    style={{
                      width: "60%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Title style={{ fontFamily: "Raleway", textAlign: "center" }}>
                  Donate Plasma
                </Title>
                <Button
                  shape="round"
                  style={{
                    fontweight: "bold",
                    fontSize: "15px",
                    backgroundColor: "transparent",
                    height: "40px",
                    border: "1px solid #000",
                    fontWeight: "600",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(0.95)";
                    e.currentTarget.style.backgroundColor = "#a80022";
                    e.currentTarget.style.borderColor = "#a80022";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "black";
                    e.currentTarget.style.color = "black";
                  }}
                >
                  Donate Now
                </Button>
              </div>
            </Col>
          </Row>
        </Card>

        <Card
          style={{
            padding: "40px",
            borderRadius: 50,
            background: "#fff",
            boxShadow: "0 0 12px rgba(0,0,0,0.05)",
            minHeight: 360,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",

              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Title
              style={{
                margin: 0,
                fontFamily: "Raleway",
              }}
            >
              Your upcoming appointments
            </Title>
            <Link
              to="/app/member/schedule"
              style={{
                color: "#bd0026",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              Go to your schedule →
            </Link>
          </div>

          {loading ? (
            <div style={{ textAlign: "center", padding: "50px 0" }}>
              <Button type="text" loading />
            </div>
          ) : upcomingAppointments.length > 0 ? (
            <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
              {upcomingAppointments.map((item, idx) => (
                <Col key={idx} span={8}>
                  <Card
                    style={{
                      width: "100%",
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
                        display: "flex",
                        justifyContent: "center",
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
                        <Title
                          level={4}
                          style={{ margin: 0, color: "#bd0026" }}
                        >
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

                      <Tag
                        color={getStatusColor(item.status)}
                        style={{ marginBottom: 12, fontWeight: "bold" }}
                      >
                        {item.status}
                      </Tag>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <div
              style={{
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              No upcoming appointments
            </div>
          )}
        </Card>
      </Card>
    </div>
  );
};
