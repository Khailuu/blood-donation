import { banner4 } from "../../../../assets/index";
import { Button, Col, Row } from "antd";
import "../../../../css/guest/BannerGuest.css";
import { Link } from "react-router-dom";

export const BannerGuestContacts = () => {
  return (
    <Row style={{ height: "80vh", marginTop: "20px", border: "1px solid green"}}>
      {/* Hình bên trái */}
      <Col xs={0} md={12} style={{ height: "100%" }}>
        <div
          style={{ height: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            className="floating-image"
            src={banner4}
            alt="Banner"
            style={{
              width: "90%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
      </Col>

      {/* Nội dung bên phải */}
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
            CONTACT 
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
          <p style={{ fontSize: "20px", color: "#333" }}>
            From today, with Rosso, thanks to the personalized booking service ,
            you can make an appointment in less than a click at a mobile or
            fixed collection center.
            <br />
            <span style={{ fontWeight: "bold" }}>Book Now!</span>
          </p>
        </div>

        <div
          className=""
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <Button
            className=""
            style={{
              height: "50px",
              // backgroundColor: "#ffd8df",
              color: "black",
              borderRadius: "50px",
              padding: "10px 20px",
              fontWeight: "bold",
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
            <Link>Register to donate blood</Link>
          </Button>
        </div>
      </Col>
    </Row>
  );
};
