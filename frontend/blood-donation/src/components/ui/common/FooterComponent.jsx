import { Col, Menu, Row, Typography, Button } from "antd";
const { Title, Paragraph } = Typography;

import React from "react";
import { hemora_logo, logo_fpt } from "../../../assets";
import { menuItems } from "../../../assets/menu";
import { InstagramOutlined, LinkedinOutlined, TikTokOutlined, WhatsAppOutlined } from "@ant-design/icons";

const SocialIcon = ({ icon }) => (
  <div
    style={{
      border: "1px solid #000",
      borderRadius: "50%",
      width: 36,
      height: 36,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }}
  >
    {icon}
  </div>
);

export const FooterComponent = () => {


  return (
    <Row style={{ backgroundColor: "#fff", padding: "40px 20px" }}>
      <Col xs={24} md={12} style={{ padding: "0 30px" }}>
        <img src={hemora_logo} style={{width: '10%'}}/>
        <Paragraph style={{ color: "black", paddingTop: "20px" }}>
          <strong>Ema Health Vietnam Co., Ltd</strong>
          <br />
          <strong>VAT number:</strong> 03133670640 <br />
          <strong>Registered office:</strong> 5 Le Duan Street, Ben Nghe Ward,
          District 1, Ho Chi Minh City <br />
          <strong>Operational headquarters:</strong> 12th Floor, Vincom Center,
          45 Le Thanh Ton Street, Ben Nghe Ward, District 1, Ho Chi Minh City
        </Paragraph>

        <Title level={5} style={{ color: "black", paddingTop: "20px" }}>
          <span>ACCELERATED BY</span>
          <img src={logo_fpt} style={{ width: "20%", height: "auto", marginLeft: 10 }} />
        </Title>
      </Col>

      <Col
        xs={24}
        md={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      > 
        <Title style={{fontFamily:'Oi', fontWeight: 'normal', fontSize: '30px', color: '#bd0026'}}>HEMORA</Title>
        <Menu
          mode="vertical"
          selectable={false}
          items={menuItems.map(({ key, label, path }) => ({
            key,
            label: (
              <a
                href={path}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "500",
                  fontFamily: "Raleway",
                }}
              >
                {label}
              </a>
            ),
          }))}
          style={{
            border: "none",
            backgroundColor: "transparent",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",

          }}
        />
      </Col>

      <Col
        xs={24}
        md={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Title level={5} style={{ fontWeight: 600 }}>Contacts</Title>
        <Paragraph style={{ marginBottom: 10 }}>
          team6@gmail.com
        </Paragraph>
        <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
          <SocialIcon icon={<LinkedinOutlined />} />
          <SocialIcon icon={<InstagramOutlined />} />
          <SocialIcon icon={<TikTokOutlined />} />
        </div>
        <Title level={5} style={{ fontWeight: 600 }}>Do you need help?</Title>
        <Button
          type="default"
          icon={<WhatsAppOutlined />}
          style={{
            borderRadius: 50,
            padding: "6px 20px",
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Write to us now
        </Button>
      </Col>
    </Row>
  );
};
