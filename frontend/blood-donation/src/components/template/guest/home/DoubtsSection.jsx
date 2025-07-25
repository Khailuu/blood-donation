import React, { useEffect, useState } from "react";
import { Button, Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "../../../../css/guest/DoubtsSection.css";
import { Link } from "react-router-dom";
import { manageServicesQA } from "../../../../services/manageServicesQA";

const { Panel } = Collapse;

export const DoubtsSection = () => {
  const [activeKeys, setActiveKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const handlePanelChange = (keys) => {
    setActiveKeys(keys);
  };

  const fetchQA = async (page = 1, pageSize = 100) => {
    setLoading(true);
    try {
      const res = await manageServicesQA.getQA(page, pageSize);
      const { data } = res.data;
      setQuestions(data.items);
      setPagination({
        current: page,
        pageSize,
        total: data.totalItems,
      });
    } catch (error) {
      message.error("Failed to load QA data!");
    } finally {
      setLoading(false);
    }
  };

  console.log(questions);
  useEffect(() => {
    fetchQA(pagination.current, pagination.pageSize);
  }, []);
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
        {questions
          .filter(
            (item) => Array.isArray(item?.comments) && item.comments.length > 0
          )
          .map((item) => (
            <Panel
              header={item?.content}
              key={item?.questionId}
              className="custom-panel"
            >
              {item.comments.map((cmt) => (
                <div key={cmt?.id}>
                  <p className="text-bold">- {cmt?.content}</p>
                </div>
              ))}
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
          <Link to="contacts">Contact us if you still have any doubts</Link>
        </Button>
      </div>
    </div>
  );
};
