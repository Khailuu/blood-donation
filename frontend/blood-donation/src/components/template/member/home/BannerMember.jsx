import React, { useState, useEffect } from "react";
import { Card, Typography, Spin } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Droplet } from "lucide-react";
import { userService } from "../../../../services/manageUserService";
import "../../../../css/member/BannerMember.css";

const { Title, Text } = Typography;

export const BannerMember = () => {

  const [donationCount, setDonationCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
        const fetchUserInfo = async () => {
          try {
            const user = await userService.getCurrentUser();
            console.log({ user });
    
            setCurrentUser(user);
          } catch (error) {
            console.error("Failed to fetch user info:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUserInfo();
      }, []);
    

  useEffect(() => {
    const fetchDonationCount = async () => {
      try {
        setLoading(true);
        const donations = await userService.getDonationHistory();
        console.log({donations});
        
        const completedDonations = donations.donationHistories.filter(
          donation => donation.status === "Completed"
        );
        console.log({completedDonations});
        
        setDonationCount(completedDonations.length);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch donation history:", err);
        setError("Failed to load donation data");
      } finally {
        setLoading(false);
      }
    };

    fetchDonationCount();
  }, []);

  const stats = [
    {
      key: "total-donations",
      title: "Total Donations",
      value: donationCount,
      icon: <Droplet size={20} className="text-red-600" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div className="relative">
      <Card
        className="w-full max-w-2xl mx-auto p-6 text-center bg-transparent shadow-none border-none"
      >
        <div className="mb-8">
          <Title level={3} style={{ color: "#bd0026", marginBottom: 4, fontFamily: "Raleway" }}>
            Welcome to Hemora
          </Title>
          <Text strong style={{ fontSize: 40, color: "#333" }}>
            Hello, {currentUser?.fullName || "Guest"}
          </Text>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className={`flex-1 min-w-[180px] max-w-[200px] p-5 rounded-2xl ${stat.bgColor} shadow-sm`}
            >
              <div className="flex flex-col items-center">
                <div className="mb-2 p-2 rounded-full">
                  {stat.icon}
                </div>
                <Text className="font-semibold text-gray-700" style={{fontSize: "15px",fontFamily: "Raleway"}}> 
                  {stat.title}
                </Text>
                {loading ? (
                  <Spin size="small" className="my-2" />
                ) : error ? (
                  <Text type="danger" className="mt-2">Error</Text>
                ) : (
                  <Text strong className={`text-2xl mt-2 ${stat.color}`}>
                    {stat.value}
                  </Text>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center items-center gap-2">
          <SmileOutlined className="text-red-600" />
          <Text className="text-gray-600">
            To register to donate blood,{" "}
            <a href="/survey">
              <span className="text-red-600 font-bold">
                please take the health survey!
              </span>
            </a>
          </Text>
        </div> */}
      </Card>
    </div>
  );
};