import { Button, Card, Col, Row, Typography } from "antd";
const { Title, Paragraph } = Typography;
import React from "react";
import { banner1, blood_bag } from "../../../../assets";
import { Link } from "react-router-dom";
import { BloodBagIcon } from "../../../../assets/CutomIcons";

export const DonateSpace = () => {
  return (
    <div className="" style={{ margin: "50px 0"}}>

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
              href="#"
              style={{
                color: "#bd0026",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              Go to your schedule →
            </Link>
          </div>

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
            No bookings available
          </div>
        </Card>
      </Card>
    </div>
  );
};
