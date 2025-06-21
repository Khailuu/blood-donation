import { CheckOutlined } from "@ant-design/icons";
import { Row, Col, Button, Typography } from "antd";
import { features } from "../../../../assets/text";
const { Title, Paragraph } = Typography;

export const Convenience = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12"
        style={{
          backgroundColor: "#ffd8df",
          padding: "20px",
          // borderTopLeftRadius: "50px",
          // borderTopRightRadius: "50px",
          border: "1px solid blue",
        }}
      >
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckOutlined style={{ color: "#bd0026", fontSize: "40px" }} />
            <p className="text-4xl leading-snug">
              <strong>
                {item.text.replace(item.bold, "") === ""
                  ? item.bold
                  : item.bold}
              </strong>
              {item.text.replace(item.bold, "")}
            </p>
          </div>
        ))}
      </div>

      <div style={{ border: "1px solid purple", padding: "60px 40px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <Title
            level={2}
            style={{
              fontFamily: "Oi",
              fontWeight: "normal",
              fontSize: "50px",
              color: "#bd0026",
            }}
          >
            For whom
          </Title>
        </div>

        <Row gutter={[24, 24]} style={{ margin: "0 50px" }}>
          <Col xs={24} md={8}>
            <div
              style={{
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                border: "2px dashed #000",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <Title
                level={4}
                style={{ fontFamily: "raleway", fontWeight: "bold" }}
              >
                People
              </Title>
              <Paragraph style={{ fontFamily: "Raleway", fontSize: "18px" }}>
                Book your donation in less than 24 hours. Receive support,
                reminders, useful information.
              </Paragraph>
              <Button
                shape="round"
                style={{
                  fontweight: "bold",
                  fontSize: "15px",
                  margin: "0 auto",
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
                  e.currentTarget.style.backgroundColor = "#f8f8f8";
                  e.currentTarget.style.borderColor = "black";
                  e.currentTarget.style.color = "black";
                }}
              >
                Find out how to donate
              </Button>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div
              style={{
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                border: "2px dashed #000",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <Title
                level={4}
                style={{ fontFamily: "raleway", fontWeight: "bold" }}
              >
                Associations and Hospitals
              </Title>
              <Paragraph style={{ fontFamily: "Raleway", fontSize: "18px" }}>
                We help you engage new donors and better manage bookings.
              </Paragraph>
              <Button
                shape="round"
                style={{
                  fontweight: "bold",
                  fontSize: "15px",
                  margin: "0 auto",
                  height: "40px",
                  border: "1px solid #000",
                  fontWeight: "600",
                }}
                className="info-btn "
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(0.95)";
                  e.currentTarget.style.backgroundColor = "#a80022";
                  e.currentTarget.style.borderColor = "#a80022";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor = "#f8f8f8";
                  e.currentTarget.style.borderColor = "black";
                  e.currentTarget.style.color = "black";
                }}
              >
                Collaborate with us
              </Button>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div
              style={{
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                border: "2px dashed #000",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <Title
                level={4}
                style={{ fontFamily: "raleway", fontWeight: "bold" }}
              >
                Companies
              </Title>
              <Paragraph style={{ fontFamily: "Raleway", fontSize: "18px" }}>
                Custom projects to bring the culture of giving into the office.
              </Paragraph>
              <Button
                shape="round"
                style={{
                  fontweight: "bold",
                  fontSize: "15px",
                  margin: "0 auto",
                  height: "40px",
                  border: "1px solid #000",
                  fontWeight: "600",
                }}
                className="info-btn "
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(0.95)";
                  e.currentTarget.style.backgroundColor = "#a80022";
                  e.currentTarget.style.borderColor = "#a80022";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor = "#f8f8f8";
                  e.currentTarget.style.borderColor = "black";
                  e.currentTarget.style.color = "black";
                }}
              >
                Become a Partner
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
