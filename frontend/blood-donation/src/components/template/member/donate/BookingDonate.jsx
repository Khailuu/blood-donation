import { Card, Button, Typography, Calendar, Space, Row, Col, Tag, Radio } from "antd";
import { EnvironmentOutlined, ClockCircleOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { banner2 } from "../../../../assets";

const { Title, Text, Paragraph } = Typography;

export const BookingDonate = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(dayjs());
    const [donationType, setDonationType] = useState(null);

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 60000);
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

  // Filter available time slots
  const getAvailableTimeSlots = () => {
    const isToday = selectedDate.isSame(dayjs(), 'day');
    return timeSlots.filter(time => {
      if (!isToday) return true;
      
      const slotTime = dayjs(`${selectedDate.format('YYYY-MM-DD')} ${time}`);
      return slotTime.isAfter(currentTime);
    });
  };

  const disabledDate = (current) => {
    // Disable dates before today
    return current && current < dayjs().startOf('day');
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    if (!donationType) {
      alert("Please select a donation type");
      return;
    }
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }
    alert(`Booked on ${selectedDate.format("YYYY-MM-DD")} at ${selectedTime}`);
  };

  const handleMonthChange = (date) => {
    setCurrentMonth(date);
  };

  const handlePrevMonth = () => {
    const newMonth = currentMonth.subtract(1, 'month');
    setCurrentMonth(newMonth);
  };

  const handleNextMonth = () => {
    const newMonth = currentMonth.add(1, 'month');
    setCurrentMonth(newMonth);
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
              <Title level={5} style={{ fontFamily: "Raleway" }}>
                Additional Information
              </Title>
              <Paragraph style={{ fontFamily: "Raleway", fontSize: 15, color: "#444" }}>
                Please arrive about 15 minutes before your appointment time. A
                specialist doctor will perform a short interview and preliminary
                tests to check your donation eligibility.
              </Paragraph>
              <Paragraph style={{ fontFamily: "Raleway", fontSize: 14, color: "#444" }}>
                Don't forget to bring a valid ID and your health card. You
                should be in good health and have had a light breakfast (avoid
                dairy or heavy fatty foods).
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
            <div
              style={{
                overflow: "hidden",
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
                  <div style={{ 
                    padding: 10, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    borderBottom: '1px solid #f0f0f0',
                    backgroundColor:"#c41c33"
                  }}>
                    <Button 
                      type="text" 
                      icon={<LeftOutlined />} 
                      onClick={handlePrevMonth}
                      style={{ color: '#fff' }}
                    />
                    <Title level={4} style={{ color: "#fff", margin: 0 }}>
                      {currentMonth.format("MMMM YYYY")}
                    </Title>
                    <Button 
                      type="text" 
                      icon={<RightOutlined />} 
                      onClick={handleNextMonth}
                      style={{ color: '#fff' }}
                    />
                  </div>
                )}
                style={{
                  fontFamily: "Raleway",
                  backgroundColor: "#fff",
                }}
                dateFullCellRender={(date) => {
                  const isSelected = date.isSame(selectedDate, 'day');
                  const isToday = date.isSame(dayjs(), 'day');
                  const isPast = date.isBefore(dayjs(), 'day');
                  const isCurrentMonth = date.isSame(currentMonth, 'month');
                  
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
                        color: isSelected ? "#fff" : 
                               isToday ? "#c41c33" : 
                               isPast ? "rgba(0, 0, 0, 0.25)" : 
                               isCurrentMonth ? "#616161" : "rgba(0, 0, 0, 0.25)",
                        fontWeight: isToday || (isCurrentMonth && !isPast) ? "bold" : "normal",
                        border: isToday ? "1px solid #c41c33" : "none",
                        opacity: isPast ? 0.6 : 1,
                        cursor: isPast ? 'not-allowed' : 'pointer',
                      }}
                      onClick={() => {
                        if (!isPast) {
                          setSelectedDate(date);
                        }
                      }}
                    >
                      <div>{date.date()}</div>
                    </div>
                  );
                }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
                <Title level={5} style={{ fontFamily: "Raleway", marginBottom: 8 }}>
                  Donation Type <span style={{ color: '#ff4d4f' }}>*</span>
                </Title>
                <Radio.Group 
                  onChange={(e) => setDonationType(e.target.value)} 
                  value={donationType}
                  style={{width: '100%' }}
                >
                  <Radio.Button 
                    value="blood" 
                    style={{
                      width: '50%',
                      textAlign: 'center',
                      fontFamily: 'Raleway',
                      backgroundColor: donationType === 'blood' ? '#c41c33' : '#fff',
                      color: donationType === 'blood' ? '#fff' : '#000',

                    }}
                  >
                    Whole Blood
                  </Radio.Button>
                  <Radio.Button 
                    value="plasma" 
                    style={{
                      width: '50%',
                      textAlign: 'center',
                      fontFamily: 'Raleway',
                      backgroundColor: donationType === 'plasma' ? '#c41c33' : '#fff',
                      color: donationType === 'plasma' ? '#fff' : '#000',

                    }}
                  >
                    Plasma
                  </Radio.Button>
                </Radio.Group>
              </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                <ClockCircleOutlined style={{ color: '#c41c33', marginRight: 8 }} />
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
                        backgroundColor: selectedTime === time ? "#c41c33" : "#fff",
                        color: selectedTime === time ? "#fff" : "#000",
                        border: selectedTime === time ? "1px solid #c41c33" : "1px solid #d9d9d9",
                        boxShadow: selectedTime === time ? "0 2px 6px rgba(0,0,0,0.1)" : "none",
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
              style={{
                backgroundColor: "#c41c33",
                borderRadius: 30,
                height: 48,
                fontWeight: "bold",
                fontSize: 16,
                fontFamily: "Raleway",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "all 0.3s",
              }}
              onClick={handleBookAppointment}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(0.98)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
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