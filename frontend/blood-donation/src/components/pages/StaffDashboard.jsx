import React, { useState } from 'react';
import Dashboard from '../layouts/Dashboard';
import BloodRequests from '../layouts/BloodRequests';
import DonationSchedule from '../layouts/DonationSchedule';
import DonationRequestsManager from '../layouts/DonationRequestsManager';
import InventoryManagement from '../layouts/InventoryManagement';
import Profile from '../layouts/Profile';
import Notifications from '../layouts/Notifications';
import Navbar from '../ui/Navbar';
import Sidebar from '../ui/Sidebar';
import ProfilePage from '../layouts/ProfilePage';

const StaffDashboard = () => {
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
      case 'settings':
        return <ProfilePage/>
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
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        <div className="flex-1 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;