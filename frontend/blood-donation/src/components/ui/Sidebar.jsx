import React from 'react';
import { Heart, Calendar, FileText, Package, Bell, User, Plus, ChevronRight } from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sidebarItems = [
    { id: 'dashboard', label: 'Overview', icon: Heart, color: 'text-pink-600' },
    { id: 'blood-requests', label: 'Urgent blood donation request', icon: Plus, color: 'text-red-600', },
    { id: 'donation-schedule', label: 'Blood donation schedule management', icon: Calendar, color: 'text-blue-600' },
    { id: 'donation-requests', label: 'Blood Request Management', icon: FileText, color: 'text-purple-600', },
    { id: 'inventory', label: 'Blood warehouse management', icon: Package, color: 'text-green-600' },
    { id: 'profile', label: 'Profile Managements', icon: User, color: 'text-orange-600' },
    { id: 'notifications', label: 'Notifications', icon: Bell, color: 'text-yellow-600', }
  ];

  return (
    <div className="w-64 bg-white shadow-lg fixed top-20 left-0 bottom-0 border-r border-gray-200 z-40">
      <div className="p-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <Heart className="h-5 w-5 text-white" fill="currentColor" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Dashboard</h3>
            <p className="text-pink-100 text-xs">Blood donation management</p>
          </div>
        </div>
      </div>

      <div className="py-4 overflow-y-auto h-[calc(100vh-180px)]">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <div key={item.id} className="px-4 mb-1">
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-3 py-3 rounded-lg text-left transition-all duration-200 group ${
                  isActive
                    ? 'bg-pink-50 text-pink-700 border-r-4 border-pink-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center space-x-3 flex-1">
                  <Icon className={`h-5 w-5 ${isActive ? 'text-pink-600' : item.color}`} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
                
                {item.badge && (
                  <div className={`${
                    item.id === 'blood-requests' 
                      ? 'bg-red-500 text-white animate-pulse' 
                      : 'bg-pink-500 text-white'
                  } text-xs font-semibold px-2 py-1 rounded-full min-w-[20px] text-center`}>
                    {item.badge}
                  </div>
                )}
                
                {isActive && (
                  <ChevronRight className="h-4 w-4 text-pink-500 ml-2" />
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-pink-50 to-transparent">
        <div className="bg-pink-500 rounded-lg p-3 text-white text-center">
          <Heart className="h-4 w-4 mx-auto mb-1" fill="currentColor" />
          <p className="text-xs font-medium">Saving lives is fun</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;