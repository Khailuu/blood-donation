import React from "react";
import { banner1 } from "../../../../assets/index";
import { Button, Col, Row } from "antd";
import "../../../../css/guest/BannerGuest.css";
import { Link } from "react-router-dom";

export const BannerGuest = () => {
  return (
    <Row style={{ height: "80vh", marginTop: "20px" }}>
      <Col xs={0} md={12} style={{ height: "100%" }}>
        <div
          style={{ height: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            className="floating-image"
            src={banner1}
            alt="Banner"
            style={{
              width: "90%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </Col>

      <Col
        xs={24}
        md={12}
        style={{
          height: "100%",
          display: "flex",
          marginTop: "40px",
          flexDirection: "column",
        }}
      >
        <div style={{ maxWidth: "600px", marginBottom: "10px" }}>
          <h1
            style={{
              fontSize: "60px",
              color: "black",
              fontFamily: "Oi",
            }}
          >
            WELCOME TO
          </h1>
          <h1
            style={{
              fontSize: "90px",
              color: "#bd0026",
              fontFamily: "Oi",
            }}
          >
            HEMORA
          </h1>
          <p style={{ fontSize: "20px" }}>
            Every second, someone, somewhere, is fighting for their life waiting
            for a miracle. That miracle could be you. Blood cannot be
            manufactured; it can only be given by heroes like you. One donation
            can save up to three lives
          </p>
        </div>

        <div
          className=""
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <Link to="/signin">
            <Button
              style={{
                height: "50px",
                // backgroundColor: "#ffd8df",
                color: "black",
                borderRadius: "50px",
                padding: "10px 20px",
                fontWeight: "bold",
                fontSize: "15px",
                border: "1px solid black",
                transition: "all 0.1s ease",
              }}
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
              Login or Register
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};
