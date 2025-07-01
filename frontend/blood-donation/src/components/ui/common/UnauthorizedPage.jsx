import React from "react";
import { Result, Button, Typography, Row, Col } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

export const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#fdd8df",
        padding: "24px",
      }}
    >
      <Row justify="center" style={{ width: "100%" }}>
        <Col xs={24} md={16} lg={12}>
          <Result
            icon={<LockOutlined style={{ color: "#bd0026", fontSize: "72px" }} />}
            title={
              <Title level={2} style={{fontFamily: "Raleway", color: "#bd0026", marginTop: 20 }}>
                Access Denied
              </Title>
            }
            subTitle={
              <Paragraph type="secondary" style={{fontFamily: "Raleway",fontWeight:600, fontSize: "16px" }}>
                You do not have permission to access this page. Please check your login information or contact the administrator.
              </Paragraph>
            }
            extra={[
              <Button
                type="primary"
                key="home"
                onClick={() => navigate("/")}
                style={{
                  backgroundColor: "#bd0026",
                  borderRadius: "50px",
                  padding: "0 32px",
                  height: "40px",
                  fontWeight: 600,
                }}
              >
                Back to Home
              </Button>,
              <Button
                key="login"
                onClick={() => navigate("/signin")}
                style={{
                  borderColor: "#bd0026",
                  color: "#bd0026",
                  borderRadius: "50px",
                  padding: "0 32px",
                  height: "40px",
                  fontWeight: 600,
                }}
              >
                Log in again
              </Button>,
            ]}
          />

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Paragraph type="secondary" style={{fontFamily: "Raleway",fontWeight: 600}}>
              Error Code: 401 Unauthorized
            </Paragraph>
            <Paragraph style={{fontFamily: "Raleway",fontWeight: 600}}>
              <Button type="link" onClick={() => window.location.reload()} style={{fontWeight: 600, color: "#bd0026"}}>
                Try again
              </Button>
              or contact support if you believe this is a system error.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
};
