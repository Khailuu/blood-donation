import React, { useState, useEffect, useCallback } from "react";
import { Card, Typography, Button, Row, Col, message, Tag, Modal } from "antd";
import { ClockCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { authService } from "../../../../services/authService";
import { blood_bag } from "../../../../assets";
import { donationRequestService } from "../../../../services/donationRequestService ";

const { Title, Text } = Typography;

export const DonateSchedule = () => {
  const currentUser = authService.getCurrentUser();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [archivedAppointments, setArchivedAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUpcomingAppointments = useCallback(async () => {
    try {
      const response = await donationRequestService.getMyDonationRequests(
        currentUser.userId
      );
      console.log("Upcoming appointments response:", response);
      
      const allItems = response.items || response.data?.items || [];
      const myItems = allItems.filter(
        (item) => item.userId === currentUser.userId
      );
      
      const formatted = myItems.map((item) => ({
        date: dayjs(item.requestTime),
        time: dayjs(item.requestTime).format("HH:mm"),
        donationType: item.componentType,
        donationAmount: item.donationAmount || "N/A",
        status: item.status,
        statusLower: item.status.toLowerCase(),
        id: item.requestId,
      }));
      
      setUpcomingAppointments(formatted);
    } catch (error) {
      console.error("Error fetching upcoming appointments:", error);
      message.error("Failed to fetch upcoming appointments");
    }
  }, [currentUser.userId]);

  const fetchArchivedAppointments = useCallback(async () => {
    try {
      console.log("Fetching archived appointments for user:", currentUser.userId);
      
      let allItems = [];
      
      try {
        if (donationRequestService.getAllRequests) {
          console.log("Trying getAllRequests API...");
          const allResponse = await donationRequestService.getAllRequests();
          console.log("getAllRequests Response:", allResponse);
          allItems = allResponse || [];
        }
      } catch (error) {
        console.log("getAllRequests not available:", error.message);
      }
      
      if (allItems.length === 0) {
        try {
          console.log("Trying getMyDonationRequests API...");
          const myResponse = await donationRequestService.getMyDonationRequests(
            currentUser.userId
          );
          console.log("getMyDonationRequests Response:", myResponse);
          allItems = myResponse.items || myResponse.data?.items || myResponse || [];
        } catch (error) {
          console.log("getMyDonationRequests failed:", error.message);
        }
      }
      
      if (allItems.length === 0) {
        try {
          if (donationRequestService.getDonationHistory) {
            console.log("Trying getDonationHistory API...");
            const historyResponse = await donationRequestService.getDonationHistory(currentUser.userId);
            console.log("getDonationHistory Response:", historyResponse);
            allItems = historyResponse.items || historyResponse.data?.items || historyResponse || [];
          }
        } catch (error) {
          console.log("getDonationHistory not available:", error.message);
        }
      }

      console.log("All items from APIs:", allItems);

      const myItems = allItems.filter(
        (item) => item.userId === currentUser.userId
      );

      console.log("My items:", myItems);

      const archivedItems = myItems.filter(
        (item) => item.status && item.status.toLowerCase() !== "pending"
      );

      console.log("Archived items:", archivedItems);

      const formatted = archivedItems.map((item) => ({
        date: dayjs(item.requestTime),
        time: dayjs(item.requestTime).format("HH:mm"),
        donationType: item.componentType,
        donationAmount: item.donationAmount || "N/A",
        status: item.status,
        statusLower: item.status.toLowerCase(),
        id: item.requestId,
      }));

      console.log("Formatted Archived Appointments:", formatted);
      
      setArchivedAppointments(formatted);
    } catch (error) {
      console.error("Error fetching archived appointments:", error);
      console.error("Error details:", error.message);
      message.error("Failed to fetch archived appointments: " + error.message);
    }
  }, [currentUser.userId]);

  useEffect(() => {
    if (activeTab === "upcoming") {
      fetchUpcomingAppointments();
    } else if (activeTab === "archived") {
      fetchArchivedAppointments();
    }
  }, [activeTab, fetchUpcomingAppointments, fetchArchivedAppointments]);

  const handleCancelBooking = async (appointmentId) => {
    const shouldCancel = window.confirm("Bạn có chắc chắn muốn hủy cuộc hẹn này không?");
    if (!shouldCancel) return;

    setLoading(true);
    try {
      let apiResult;
      let success = false;

      if (typeof donationRequestService.updateDonationRequestStatus === "function") {
        apiResult = await donationRequestService.updateDonationRequestStatus(appointmentId, "rejected");
      } else if (typeof donationRequestService.cancelDonationRequest === "function") {
        apiResult = await donationRequestService.cancelDonationRequest(appointmentId);
      } else if (typeof donationRequestService.updateRequest === "function") {
        apiResult = await donationRequestService.updateRequest(appointmentId, { status: "rejected" });
      } else if (typeof donationRequestService.rejectDonationRequest === "function") {
        apiResult = await donationRequestService.rejectDonationRequest(appointmentId);
      }

      if (apiResult?.success || apiResult?.status === "success") {
        success = true;
      }

      setUpcomingAppointments(prev =>
        prev.map(appointment =>
          appointment.id === appointmentId
            ? { ...appointment, status: "Rejected", statusLower: "rejected" }
            : appointment
        )
      );

      if (success) {
        message.success("Cuộc hẹn đã được hủy thành công!");
      } else {
        message.warning("Cuộc hẹn đã bị hủy trên giao diện nhưng chưa chắc đã lưu vào hệ thống.");
      }

      setTimeout(() => {
        setActiveTab("archived");
        fetchArchivedAppointments(); 
      }, 1000);

    } catch (error) {
      console.error("Lỗi khi gọi API:", error);

      setUpcomingAppointments(prev =>
        prev.map(appointment =>
          appointment.id === appointmentId
            ? { ...appointment, status: "Rejected", statusLower: "rejected" }
            : appointment
        )
      );

      message.error("Không thể đồng bộ trạng thái hủy với hệ thống.");
      setTimeout(() => {
        setActiveTab("archived");
        fetchArchivedAppointments(); 
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentAppointments = () => {
    if (activeTab === "upcoming") {
      return upcomingAppointments.filter(item => item.statusLower === "pending");
    } else {
      return archivedAppointments;
    }
  };

  const filteredAppointments = getCurrentAppointments();

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "orange";
      case "approved":
        return "green";
      case "rejected":
        return "red";
      case "cancelled":
        return "gray";
      case "completed":
        return "blue";
      default:
        return "blue";
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "48px 16px",
        fontFamily: "Raleway",
      }}
    >
      <Card
        style={{
          margin: "0 auto",
          borderRadius: 20,
          padding: 24,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <Title level={3} style={{ textAlign: "center" }}>
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
            {[
              { key: "upcoming", label: "Programmate" },
              { key: "archived", label: "Archiviate" },
            ].map(({ key, label }) => (
              <Button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  border: "none",
                  backgroundColor:
                    activeTab === key ? "#bd0026" : "transparent",
                  color: activeTab === key ? "white" : "#444",
                  padding: "6px 20px",
                  borderRadius: 999,
                  fontWeight: activeTab === key ? "bold" : "normal",
                  cursor: "pointer",
                }}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        <Row gutter={[16, 16]}>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((item, idx) => (
              <Col key={idx} xs={24} sm={12} md={8} lg={6}>
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
                      Amount: {item.donationAmount} mL
                    </Text>
                    <Text style={{ display: "block", marginBottom: 4 }}>
                      <ClockCircleOutlined /> {item.time}
                    </Text>

                    <Tag
                      color={getStatusColor(item.status)}
                      style={{ marginBottom: 12, fontWeight: "bold" }}
                    >
                      {item.status}
                    </Tag>

                    {item.statusLower === "pending" && (
                      <Button
                        type="default"
                        loading={loading}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log("Button clicked for item:", item.id);
                          handleCancelBooking(item.id);
                        }}
                        style={{
                          backgroundColor: "#bd0026",
                          borderColor: "#bd0026",
                          color: "#fff",
                          width: "100%",
                          borderRadius: "50px",
                          height: "40px",
                          fontWeight: "bold",
                          fontSize: "14px",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          marginTop: 8,
                          cursor: "pointer",
                        }}
                      >
                        Cancel Booking
                      </Button>
                    )}
                  </div>
                </Card>
              </Col>
            ))
          ) : (
            <div style={{ width: "100%", textAlign: "center", padding: 32 }}>
              {activeTab === "upcoming"
                ? "No pending appointments found."
                : "No archived appointments found."}
            </div>
          )}
        </Row>
      </Card>
    </div>
  );
};