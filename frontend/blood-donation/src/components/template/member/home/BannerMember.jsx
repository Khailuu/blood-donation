import React from "react";
import { Card, Typography } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { authService } from "../../../../services/authService";
import { Droplet } from "lucide-react";
import "../../../../css/member/BannerMember.css";

const { Title, Text } = Typography;

export const BannerMember = () => {
  const currentUser = authService.getCurrentUser();

  const options = [
    {
      key: "sangue",
      label: "Sangue",
      icon: <Droplet size={20} color="#c41c33" />,
      backgroundColor: "#ffe6eb",
    },
    {
      key: "plasma",
      label: "Plasma",
      icon: <Droplet size={20} color="#e6b800" />,
      backgroundColor: "#fff6d8",
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      {/* Background cloud layer */}
      <ul className="background">
        {[...Array(12)].map((_, i) => (
          <li key={i} style={{ animationDelay: `${i * 10}s` }}></li>
        ))}
      </ul>

      {/* Content */}
      <Card
        style={{
          width: "100%",
          maxWidth: 640,
          margin: "0 auto",
          padding: "36px 24px",
          textAlign: "center",
          backgroundColor: "transparent", 
          boxShadow: "none", 
          position: "relative",
          zIndex: 2, 
          border: "none"
        }}
      >

        <div style={{ marginBottom: 32 }}>
          <Title level={3} style={{ color: "#bd0026", marginBottom: 4, fontFamily: "Raleway" }}>
            Welcome to Hemora
          </Title>
          <Text strong style={{ fontSize: 40, color: "#333" }}>
            Hello, {currentUser?.name || "Guest"}
          </Text>
        </div>
        
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          {options.map((opt) => (
            <div
              key={opt.key}
              style={{
                flex: 1,
                maxWidth: 180,
                padding: "20px 12px",
                borderRadius: 24,
                backgroundColor: opt.backgroundColor,
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  borderRadius: "50%",
                  padding: 8,
                  marginBottom: 8,
                }}
              >
                {opt.icon}
              </div>
              <div style={{ fontWeight: 600, fontSize: 16, color: "#444" }}>
                {opt.label}
              </div>
              <div
                style={{
                  letterSpacing: 4,
                  fontSize: 14,
                  color: "#888",
                  marginTop: 4,
                }}
              >
                - - - -
              </div>
            </div>
          ))}
        </div>


        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <SmileOutlined style={{ fontSize: 20, color: "#bd0026" }} />
          <Text style={{ color: "#555", fontSize: 15 }}>
            Per aggiornare il conto alla rovescia,{" "}
            <a href="">
              <span style={{ color: "#bd0026", fontWeight: "bold" }}>
                fai il quiz!
              </span>
            </a>
          </Text>
        </div>
      </Card>
    </div>
  );
};
