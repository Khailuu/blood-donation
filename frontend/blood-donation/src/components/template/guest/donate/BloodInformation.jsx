import { Button, Col, Row, Typography } from "antd";
const { Title, Text, Paragraph } = Typography;
import React from "react";
import {
  a_plus,
  ab_minus,
  ab_plus,
  blood_type,
  blood_used,
  type,
} from "../../../../assets";
import { Link } from "react-router-dom";
import { CheckCircleFilled } from "@ant-design/icons";
import { types } from "../../../../assets/text";

export const BloodInformation = () => {
  return (
    <>
      <Row style={{ border: "1px solid red", padding: 40 }}>
        <Col md={12}>
          <Title
            style={{
              color: "#bd0026",
              fontFamily: "Oi",
              fontWeight: "normal",
              fontSize: "50px",
            }}
          >
            What type are your ?
          </Title>
          <Paragraph
            style={{
              fontFamily: "Raleway",
              fontWeight: "normal",
              fontSize: 20,
              marginTop: 40,
            }}
          >
            Blood types are genetically determined and cannot be changed. They
            are divided based on the presence of proteins called antigens. If
            incompatible red blood cells are transfused, the immune system
            reacts by producing antibodies against the foreign antigens.
          </Paragraph>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
            }}
          >
            <Button
              style={{
                height: "50px",
                color: "black",
                borderRadius: "50px",
                padding: "10px 20px",
                fontWeight: "bold",
                fontSize: "15px",
                border: "1px solid black",
                transition: "all 0.1s ease",
                marginTop: 20,
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
              <Link>Download All Material</Link>
            </Button>
          </div>
        </Col>

        <Col md={12} style={{ display: "flex", alignItems: "center" }}>
          <Col md={3}>
            <img src={ab_plus} alt="" className="floating-image" />
          </Col>
          <Col md={3}>
            <img src={ab_minus} alt="" className="floating-image" />
          </Col>
          <Col md={3}>
            <img src={a_plus} alt="" className="floating-image" />
          </Col>
          <Col md={15}>
            <img src={blood_type} alt="" style={{ width: "100%" }} />
          </Col>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          border: "1px solid red",
          justifyContent: "center",
        }}
      >
        <Title
          style={{
            marginTop: "40px",
            fontFamily: "Oi",
            color: "#bd0026",
            fontWeight: "normal",
            fontSize: 50,
          }}
        >
          How is blood used ?
        </Title>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Raleway",
            fontWeight: "normal",
            fontSize: 20,
          }}
        >
          After donating blood, it is separated into its main components,
          including red blood cells, platelets, and plasma. Each component is
          used to treat specific medical conditions, and blood donation plays a
          vital role in saving lives and advancing medical science in a variety
          of settings.
        </Text>

        <div className="container">
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#ffd8df",
              borderRadius: 50,
            }}
          >
            <Col xs={0} md={10}>
              <img
                src={type}
                alt=""
                className="floating-image"
                style={{ width: "80%" }}
              />
            </Col>
            <Col xs={24} md={14}>
              {types.map((item, index) => (
                <div
                  key={index}
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
                    }}
                  >
                    {item.title}
                    <br />
                    <span>
                      {item.subtitle}
                      <span>{item.content}</span>
                    </span>
                  </span>
                </div>
              ))}
            </Col>
          </Row>
        </div>
      </Row>

      <Row style={{ border: "1px solid red", padding: 40 }}>
        <Col md={12}>
          <Title
            style={{
              color: "#bd0026",
              fontFamily: "Oi",
              fontWeight: "normal",
              fontSize: "50px",
            }}
          >
            And when blood cannot be used?
          </Title>

          <Title
            style={{ fontFamily: "Raleway", fontSize: 25, fontWeight: 600 }}
          >
            Donated blood that cannot be used for transfusion can be used for:
          </Title>

          <Paragraph
            style={{
              fontFamily: "Raleway",
              fontWeight: "normal",
              fontSize: 20,
            }}
          >
            1. Quality controls in blood testing laboratories.
            <br />
            2. Medical research for the study of diseases and the development of
            treatments.
            <br />
            3. Production of blood products such as platelets, plasma, and
            clotting factors.
          </Paragraph>

          <Paragraph
            style={{
              fontFamily: "Raleway",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            This ensures the responsible and safe use of blood donations.
          </Paragraph>
        </Col>

        <Col md={12}>
          <img src={blood_used} alt="" style={{ width: "100%" }} />
        </Col>
      </Row>
    </>
  );
};
