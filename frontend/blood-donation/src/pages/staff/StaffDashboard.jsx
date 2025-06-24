import React, { useState, useEffect } from "react";
import Dashboard from "../../components/template/staff/Dashboard";
import BloodRequests from "../../components/template/staff/BloodRequests";
import DonationSchedule from "../../components/template/staff/DonationSchedule";
import DonationRequestsManager from "../../components/template/staff/DonationRequestsManager";
import InventoryManagement from "../../components/template/staff/InventoryManagement";
import Notifications from "../../components/template/staff/Notifications";
import Profile from "../../components/template/staff/Profile";
import ProfilePage from "../../components/template/staff/ProfilePage";
import { Navbar } from "../../components/ui/staff/Navbar";
import { SideBar } from "../../components/ui/staff/SideBar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const StaffDashboard = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('dashboard');
  
  const pathSegments = location.pathname.split('/');
  const currentSection = pathSegments[pathSegments.length - 1] || 'dashboard';

  useEffect(() => {
    setActiveSection(currentSection);
  }, [currentSection]);

  const renderContent = () => {
    switch(activeSection) {
      case 'profile':
        return <ProfilePage />;
      case 'dashboard':
        return <Dashboard />;
      case 'blood-requests':
        return <BloodRequests />;
      case 'donation-schedule':
        return <DonationSchedule />;
      case 'donation-requests':
        return <DonationRequestsManager />;
      case 'inventory':
        return <InventoryManagement />;
      case 'notifications':
        return <Notifications />;
      default:
        return <Outlet />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <Navbar setActiveSection={setActiveSection} />
      <div className="flex">
        <SideBar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
        />
        <div className="flex p-6" style={{ border: "1px solid red" }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};