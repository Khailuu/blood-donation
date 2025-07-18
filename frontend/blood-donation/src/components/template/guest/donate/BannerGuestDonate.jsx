import { banner2 } from "../../../../assets/index";
import { Button, Col, Row } from "antd";
import "../../../../css/guest/BannerGuest.css";
import { Link } from "react-router-dom";

export const BannerGuestDonate = () => {
  return (
    <Row style={{ height: "80vh", marginTop: "20px" }}>
      {/* Hình bên trái */}
      <Col xs={0} md={12} style={{ height: "100%" }}>
        <div
          style={{ height: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            className="floating-image"
            src={banner2}
            alt="Banner"
            style={{
              width: "80%",
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
            COME TO
          </h1>
          <h1
            style={{
              fontSize: "90px",
              color: "#bd0026",
              fontFamily: "Oi",
            }}
          >
            DONATE
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
                color: "#000",
                fontSize: 15,
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
              Register to donate blood
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};
