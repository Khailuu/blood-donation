import React, { useState } from "react";
import Dashboard from "../../components/template/staff/Dashboard";
import BloodRequests from "../../components/template/staff/BloodRequests";
import DonationSchedule from "../../components/template/staff/DonationSchedule";
import DonationRequestsManager from "../../components/template/staff/DonationRequestsManager";
import InventoryManagement from "../../components/template/staff/InventoryManagement";
import Notifications from "../../components/template/staff/Notifications";
import Profile from "../../components/template/staff/Profile";
import { Navbar } from "../../components/ui/common/Navbar";
import { SideBar } from "../../components/ui/common/SideBar";
import ProfilePage from "../../components/template/staff/ProfilePage";
import { Navbar } from "../../components/ui/staff/Navbar";
import { SideBar } from "../../components/ui/staff/SideBar";
import { Outlet, useLocation } from "react-router-dom";

export const StaffDashboard = () => {
  const location = useLocation();

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "blood-requests":
        return <BloodRequests />;
      case "donation-schedule":
        return <DonationSchedule />;
      case "donation-requests":
        return <DonationRequestsManager />;
      case "inventory":
        return <InventoryManagement />;
      case "profile":
        return <Profile />;
      case "settings":
        return <ProfilePage/>
      case "notifications":
        return <Notifications />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <div className="flex">
        <SideBar activeSection={activeSection} />
        <div className="p-6" style={{width: 2000, border: "1px solid red" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
