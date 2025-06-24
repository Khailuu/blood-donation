import { Row, Col, Button, Typography, Divider } from "antd";
import { beforeDonation, donationSteps } from "../../../../assets/text";
import { after, before, during } from "../../../../assets";
import { CheckCircleFilled } from "@ant-design/icons";
const { Text, Title, Paragraph } = Typography;

export const Process = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#a80022",
          padding: "40px",
          borderRadius: "50px"
        }}
      >
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
              color: "white",
            }}
          >
            Donating has never been easier
          </Title>
        </div>

        <Row gutter={[24, 24]} style={{ margin: "0 50px" }}>
          {donationSteps.map((step) => (
            <Col key={step.id} xs={24} md={8}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    backgroundColor: "#ffd8df",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <img src={step.image} alt={step.title} />
                </div>
                <Title
                  level={4}
                  style={{ fontFamily: "raleway", fontWeight: "bold" }}
                >
                  {step.id}. {step.title}
                </Title>
                <Paragraph style={{ fontFamily: "raleway", fontSize: "18px" }}>
                  {step.description}
                </Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#fff"
        }}
      >
        <Col style={{ padding: 20 }}>
          <Row>
            <Title
              level={2}
              style={{
                textAlign: "center",
                color: "#bd0026",
                fontFamily: "Oi",
                fontWeight: "normal",
                fontSize: "50px",
              }}
            >
              How the donation process works
            </Title>
          </Row>
          <Row>
            <Col md={7}>
              <img
                src={before}
                alt="before donation"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md={17}>
              <div
                style={{
                  margin: 20,
                  textAlign: "center",
                  backgroundColor: "#ffd8df",
                  borderRadius: "50px",
                  height: "80%",
                  marginTop: 20,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Title
                  style={{
                    color: "#bd0026",
                    fontFamily: "Raleway",
                    fontWeight: "bold",
                  }}
                >
                  Before
                </Title>

                {beforeDonation.map((item, index) => (
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
                        fontWeight: item.checked ? "bold" : "normal",
                      }}
                    >
                      {item.content}
                    </span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={17}>
              <div
                style={{
                  margin: 20,
                  textAlign: "center",
                  backgroundColor: "#e99bad",
                  borderRadius: "50px",
                  height: "80%",
                  marginTop: 20,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Title
                  style={{
                    color: "#3a3a3a",
                    fontFamily: "Raleway",
                    fontWeight: "bold",
                  }}
                >
                  During
                </Title>

                {beforeDonation.map((item, index) => (
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
              </div>
            </Col>

            <Col md={7}>
              <img src={during} alt="" style={{ width: "100%" }} />
            </Col>
          </Row>

          <Row>
            <Col md={7}>
              <img src={after} alt="" style={{ width: "100%" }} />
            </Col>
            <Col md={17}>
              <div
                style={{
                  margin: 20,
                  textAlign: "center",
                  backgroundColor: "#ffd8df",
                  borderRadius: "50px",
                  height: "80%",
                  marginTop: 20,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Title
                  style={{
                    color: "#bd0026",
                    fontFamily: "Raleway",
                    fontWeight: "bold",
                  }}
                >
                  After
                </Title>

                {beforeDonation.map((item, index) => (
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
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
};
