import React from "react";
import { Navbar } from "../../components/ui/staff/Navbar";
import { SideBar } from "../../components/ui/staff/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { Col, Row } from "antd";

export const StaffDashboard = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const activeSection = pathSegments[pathSegments.length - 1] || "dashboard";

  return (
    <div className="min-h-screen bg-[#fff]">
      <div>
        <div>
          <SideBar activeSection={activeSection} />
        </div>
      </div>
      <div className="flex-1 w-full max-w-[1265px] mt-[85px] ml-[256px] sm:px-6 lg:px-5 py-6">
        <main style={{margin: "20px", backgroundColor: "#f8cfd3", borderRadius: "50px"}}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
