
import Dashboard from "../../components/template/staff/Dashboard";
import BloodRequests from "../../components/template/staff/BloodRequests";
import DonationSchedule from "../../components/template/staff/DonationSchedule";
import DonationRequestsManager from "../../components/template/staff/DonationRequestsManager";
import InventoryManagement from "../../components/template/staff/InventoryManagement";
import Notifications from "../../components/template/staff/Notifications";
import Profile from "../../components/template/staff/Profile";
import { Navbar } from "../../components/ui/staff/Navbar";
import { SideBar } from "../../components/ui/staff/SideBar";
import {  Navigate, Outlet, useLocation } from "react-router-dom";



export const StaffDashboard = () => {
  const location = useLocation();
  
  const pathSegments = location.pathname.split('/');
  const activeSection = pathSegments[pathSegments.length - 1] || 'dashboard';

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <Navbar />
      <div className="flex">
        <SideBar activeSection={activeSection} />
        <div className="flex p-6" style={{ border: "1px solid red" }}>
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};