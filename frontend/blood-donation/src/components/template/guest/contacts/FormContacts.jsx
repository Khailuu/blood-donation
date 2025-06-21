import React from "react";
import { Form, Input, Button, Checkbox, Typography, Row, Col } from "antd";
import { requirement_donation } from "../../../../assets";

const { Title, Text, Paragraph } = Typography;

export const FormContacts = () => {
  const [form] = Form.useForm();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        padding: "24px",
        backgroundColor: "#ffd8df",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Title
        level={1}
        style={{
          fontFamily: "Oi",
          fontSize: "50px",
          fontWeight: "normal",
          color: "#bd0026",
          marginBottom: "24px",
        }}
      >
        Contact us
      </Title>

      <Paragraph
        style={{
          fontFamily: "Raleway",
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#333",
          marginBottom: "32px",
        }}
      >
        Do you have questions about <Text strong>donations</Text> or do you want
        to join our <Text strong>mission?</Text>
        <br />
        Fill out the <Text strong>form</Text> and our team will answer you as
        soon as possible.
        <br />
        We are here for any request or information!
        <br />
        <Text strong>Email:</Text> ciao@donarosso.it
      </Paragraph>

      <Row>
        <Col md={14} style={{display: 'flex', alignItems: 'center'}}>
          <Form form={form} layout="vertical" style={{width: '80%'}}>
            <Title
              level={4}
              style={{
                color: "#bd0026",
                marginBottom: "24px",
                fontFamily: "Raleway",
                fontWeight: "bold",
              }}
            >
              Name and Surname
            </Title>

            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Your full name" size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="E-mail" size="large" />
            </Form.Item>

            <Form.Item
              name="interest"
              rules={[{ required: true, message: "Please select an option!" }]}
            >
              <Checkbox.Group style={{ width: "100%" }}>
                <Checkbox
                  value="donation"
                  style={{ display: "block", marginBottom: "8px" }}
                >
                  What interests you most?
                </Checkbox>
                <Checkbox value="partner" style={{ display: "block" }}>
                  Become a Partner with COMPANY
                </Checkbox>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item
              name="message"
              rules={[
                { required: true, message: "Please input your message!" },
              ]}
            >
              <Input.TextArea
                placeholder="Message"
                rows={4}
                size="large"
                style={{ resize: "vertical" }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{
                  backgroundColor: "#bd0026",
                  borderColor: "#bd0026",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col md={10}>
          <img src={requirement_donation} alt="" style={{width: '80%'}}/>
        </Col>
      </Row>
    </div>
  );
};
