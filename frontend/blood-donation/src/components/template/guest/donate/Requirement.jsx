import { Button, Col, Row, Typography } from "antd";
import { requirement_donation } from "../../../../assets";
import { requirements } from "../../../../assets/text";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Title, Paragraph } = Typography;

export const Requirement = () => {
  return (
    <Row
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        border: "1px solid green",
        padding: "20px",
        
      }}
    >
      <Col xs={0} md={16}>
        <Title
          style={{
            fontFamily: "Oi",
            fontWeight: "normal",
            fontSize: "50px",
            color: "#bd0026",
          }}
        >
          Want to donate but don't know where to start?
        </Title>
        <Paragraph
          style={{ fontSize: "20px", fontFamily: "Raleway" }}
        >
          If you meet all eligibility requirements, discover the nearest blood
          donation center <br />
          and complete your registration to become a life-saving donor today!
        </Paragraph>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",

          }}
        >
          {requirements.map((requirement, index) => (
            <div key={index} style={{ marginBottom: "40px"}}>
              <CheckCircleFilled
                checked={requirement.checked}
                style={{ color: "red", fontSize: "24px", marginRight: "10px" }}
              />
              <span
                style={{
                  fontSize: "25px",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                {requirement.content}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",

          }}
        >
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
            <Link>Discover all donation requirements</Link>
          </Button>
        </div>
      </Col>
      <Col xs={24} md={8}>
        <img src={requirement_donation} alt="requirement donation" style={{ width: "100%" }} />
      </Col>
    </Row>
  );
};
