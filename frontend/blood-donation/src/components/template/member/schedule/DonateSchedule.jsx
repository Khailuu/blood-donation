import React, { useState, useEffect } from "react";
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
  const [allAppointments, setAllAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await donationRequestService.getMyDonationRequests(
          currentUser.userId
        );
        console.log(response);
        
        const allItems = response.items || response.data?.items || [];

        const myItems = allItems.filter(
          (item) => item.userId === currentUser.userId
        );

        console.log({allItems});
        
        const formatted = myItems.map((item) => ({
          date: dayjs(item.requestTime),
          time: dayjs(item.requestTime).format("HH:mm"),
          donationType: item.componentType,
          status: item.status,
          statusLower: item.status.toLowerCase(),
          id: item.requestId,
        }));

        console.log({formatted});
        
        setAllAppointments(formatted);
      } catch (error) {
        console.error(error);
        message.error("Failed to fetch appointments");
      }
    };

    fetchAppointments();
  }, [currentUser.userId]);

  const handleCancelBooking = async (appointmentId) => {
  const shouldCancel = window.confirm("Bạn có chắc chắn muốn hủy cuộc hẹn này không?");
  if (!shouldCancel) return;

  setLoading(true);
  try {
    let apiResult;
    let success = false;

    // Thử gọi API từ service có sẵn
    if (typeof donationRequestService.updateDonationRequestStatus === "function") {
      apiResult = await donationRequestService.updateDonationRequestStatus(appointmentId, "rejected");
    } else if (typeof donationRequestService.cancelDonationRequest === "function") {
      apiResult = await donationRequestService.cancelDonationRequest(appointmentId);
    } else if (typeof donationRequestService.updateRequest === "function") {
      apiResult = await donationRequestService.updateRequest(appointmentId, { status: "rejected" });
    }

    // Kiểm tra phản hồi API có phải thành công không
    if (apiResult?.success || apiResult?.status === "success") {
      success = true;
    }

    // ✅ Luôn cập nhật giao diện, nhưng phân biệt rõ kết quả
    setAllAppointments(prev =>
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

    // Chuyển tab sau khi cập nhật
    setTimeout(() => setActiveTab("archived"), 1000);

  } catch (error) {
    console.error("Lỗi khi gọi API:", error);

    // Vẫn cập nhật giao diện tạm thời nếu API thất bại
    setAllAppointments(prev =>
      prev.map(appointment =>
        appointment.id === appointmentId
          ? { ...appointment, status: "Rejected", statusLower: "rejected" }
          : appointment
      )
    );

    message.error("Không thể đồng bộ trạng thái hủy với hệ thống.");
    setTimeout(() => setActiveTab("archived"), 1000);
  } finally {
    setLoading(false);
  }
};


  // Filter appointments based on active tab
  const filteredAppointments = allAppointments.filter((item) => {
    if (activeTab === "upcoming") {
      return item.statusLower === "pending";
    } else  {
      return item.statusLower !== "pending";
    }
  });

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