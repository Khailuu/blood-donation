import React from "react";
import { Typography, Checkbox, Col, Row } from "antd";
import "../../../../css/guest/WhyDonation.css"; // Assuming you have a CSS module for styling
import { img1 } from "../../../../assets/index";
import { CheckCircleFilled } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
import "../../../../css/floating-image.css";
import { items } from "../../../../assets/text";

export const WhyDonation = () => {
  return (
    <div className="container">
      <Title
        style={{
          color: "#bd0026",
          fontFamily: "Oi",
          fontWeight: "normal",
          fontSize: "50px",
        }}
      >
        Why Do We Need Blood Donation ?
      </Title>

      <Paragraph
        className="paragraph"
        style={{ fontFamily: "Raleway", fontSize: 25, color: "#000" }}
      >
        Currently in Italy, only{" "}
        <span className="stat">2.7% of the population</span> donates blood and
        the average age of donors is increasing.
        <br />
        Every year, approximately <span className="stat">2.8 million</span>{" "}
        transfusions are performed for{" "}
        <span className="stat">639,000 patients</span>, saving approximately
        <br /> <span>1,800 lives per day</span>. Rosso is committed to
        supporting generational change among the donor ranks.
      </Paragraph>

      <div
        className="listContainer"
        style={{ marginTop: 80, backgroundColor: "#ffd8df", borderRadius: 50 }}
      >
        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col xs={0} md={10}>
            <img src={img1} alt="" className="floating-image" />
          </Col>
          <Col xs={24} md={14}>
            {items.map((item, index) => (
              <div
                key={index}
                className="listItem"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px 60px",
                }}
              >
                <CheckCircleFilled
                  checked={item.checked}
                  style={{ color: "red", fontSize: "24px" }}
                />
                <span
                  style={{
                    fontSize: "23px",
                    color: "#3a3a3a",
                    marginLeft: "10px",
                    fontWeight: item.checked ? "bold" : "normal",
                  }}
                >
                  {item.content}
                </span>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};
