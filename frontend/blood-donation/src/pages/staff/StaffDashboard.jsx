import React, { useState } from 'react';

import DonationSchedule from '../../components/template/staff/DonationSchedule';
import DonationRequestsManager from '../../components/template/staff/DonationRequestsManager';
import InventoryManagement from '../../components/template/staff/InventoryManagement';
import Profile from '../../components/template/staff/Profile';
import Notifications from '../../components/template/staff/Notifications';
import Dashboard from '../../components/template/staff/Dashboard';
import { Navbar } from '../../components/ui/common/Navbar';
import { SideBar } from '../../components/ui/common/SideBar';
import BloodRequests from '../../components/template/staff/BloodRequests';

export const StaffDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
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
      case 'profile':
        return <Profile />;
      case 'notifications':
        return <Notifications />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <Navbar/>
      <div className="flex">
        <SideBar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="flex-1 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

