import React, { useEffect, useState } from "react";
import { Card, Button, Spin } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { Column } from "@ant-design/charts";
import { manageBloodService } from "../../../services/manageBloodService";

const Statistics = () => {
  const [bloodData, setBloodData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBloodData = async () => {
    setLoading(true);
    try {
      const res = await manageBloodService.getAllBlood();
      setBloodData(res.data.data || []);
    } catch (error) {
      console.error("Failed to fetch blood data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBloodData();
  }, []);

  const chartData = bloodData.map((item) => ({
    bloodType: item.bloodTypeName,
    quantity: item.quantity,
  }));

  const config = {
    data: chartData,
    xField: "bloodType",
    yField: "quantity",
    colorField: "bloodType",
    color: [
      "#e11d48",
      "#fbbf24",
      "#6366f1",
      "#a21caf",
      "#22c55e",
      "#f59e42",
      "#2563eb",
      "#f87171",
    ],
    label: {
      position: "top",
      style: {
        fill: "#374151",
        fontWeight: 600,
        fontSize: 15,
      },
    },
    columnWidthRatio: 1,
    legend: false,
  };

  return (
    <Card
      title="Chart of Blood Quantity by Blood Type"
      style={{ marginBottom: 24 }}
      extra={
        <Button
          icon={<ReloadOutlined spin={loading} />}
          onClick={fetchBloodData}
          style={{
            marginRight: 10,
            fontFamily: "Raleway",
            fontWeight: 600,
            backgroundColor: "#fff",
            color: "#bd0026",
            border: "1px solid #bd0026",
            borderRadius: 50,
            height: 40,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s",
          }}
        >
          {loading ? <Spin size="small" style={{ marginLeft: 8 }} /> : "Refresh"}
        </Button>
      }
    >
      <Column {...config} />
    </Card>
  );
};

export default Statistics;
