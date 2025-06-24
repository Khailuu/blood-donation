import React, { useState } from "react";
import { Button, Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { questions } from "../../../../assets/questions";
import "../../../../css/guest/DoubtsSection.css";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

export const DoubtsSection = () => {
  const [activeKeys, setActiveKeys] = useState([]);

  const handlePanelChange = (keys) => {
    setActiveKeys(keys);
  };

  const expandIcon = ({ isActive }) =>
    isActive ? (
      <MinusOutlined style={{ fontSize: 18, color: "#e53935" }} />
    ) : (
      <PlusOutlined style={{ fontSize: 18, color: "#555" }} />
    );

  return (
    <div className="doubts-container">
      <h1
        className="doubts-title"
        style={{
          color: "#bd0026",
          fontFamily: "Oi",
          fontWeight: "normal",
          fontSize: "50px",
        }}
      >
        Still have doubts?
      </h1>

      <Collapse
        bordered={false}
        activeKey={activeKeys}
        onChange={handlePanelChange}
        expandIcon={expandIcon}
        expandIconPosition="end"
        className="custom-accordion"
      >
        {questions.map((item) => (
          <Panel header={item.question} key={item.id} className="custom-panel">
            <div className="answer-content">{item.answer}</div>
          </Panel>
        ))}
      </Collapse>

      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Button
          className=""
          style={{
            height: "50px",
            backgroundColor: "#ffd8df",
            color: "black",
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
            e.currentTarget.style.backgroundColor = "#ffd8df";
            e.currentTarget.style.borderColor = "black";
            e.currentTarget.style.color = "black";
          }}
        >
          <Link>Contact us if you still have any doubts</Link>
        </Button>
      </div>
    </div>
  );
};
