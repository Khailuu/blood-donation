import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Column } from "@ant-design/charts";
import { manageBloodService } from "../../../services/manageBloodService";

const Statistics = () => {
  const [bloodData, setBloodData] = useState([]);

  useEffect(() => {
    manageBloodService.getAllBlood().then((res) => {
      setBloodData(res.data.data || []);
    });
  }, []);

  const chartData = bloodData.map((item) => ({
    bloodType: item.bloodTypeName,
    quantity: item.quantity,
  }));
  const config = {
    data: chartData,
    xField: "bloodType",
    yField: "quantity",
    colorField: "bloodType", // <-- Dòng này thay thế seriesField
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
      title="Biểu đồ số lượng máu theo nhóm máu"
      style={{ marginBottom: 24 }}
    >
      <Column {...config} />
    </Card>
  );
};

export default Statistics;
