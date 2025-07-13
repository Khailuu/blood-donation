import React, { useState } from "react";
import { User, LogOut, Settings, Bell, Clock, AlertCircle, Users, Heart, Check, X } from "lucide-react";
import { Dropdown, Badge } from "antd";
import { authService } from "../../../services/authService";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const currentUser = authService.getCurrentUser();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = () => {
    authService.logout();
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const unreadNotifications = 5;

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: 'urgent',
      title: 'Urgent blood donation request',
      message: 'Cho Ray Hospital urgently needs O+ blood type for surgery.',
      time: '5 minutes ago',
      isRead: false,
      icon: <AlertCircle className="w-4 h-4 text-red-500" />
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Blood donation reminder',
      message: 'You are eligible to donate blood again.',
      time: '2 hours ago',
      isRead: false,
      icon: <Clock className="w-4 h-4 text-orange-500" />
    },
    {
      id: 3,
      type: 'success',
      title: 'Test results complete',
      message: 'Your blood test results are ready.',
      time: '1 day ago',
      isRead: true,
      icon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      id: 4,
      type: 'info',
      title: 'Blood donation event',
      message: 'Blood donation festival at Bach Khoa University.',
      time: '2 days ago',
      isRead: true,
      icon: <Users className="w-4 h-4 text-blue-500" />
    }
  ];

  return (
    <nav className="bg-[#fff] border-b border-gray-200 mx-6 mt-3 rounded-[50px] mb-2 relative" style={{padding: "10px 24px",boxShadow: "1px 2px 10px 10px rgba(10, 10, 10, 0.116)"}}>
      <div className="px-6 ">
        <div className="flex justify-between items-center h-16">
          <div></div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={handleNotificationClick}
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Badge
                  count={unreadNotifications}
                  size="small"
                  className="text-xs"
                  offset={[2, 0]}
                >
                  <Bell size={18} className="text-[#bd0026]" />
                </Badge>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 top-12 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
                      <button
                        onClick={() => setShowNotifications(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                          !notification.isRead ? 'bg-blue-50' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            {notification.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className={`text-sm font-medium ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                                {notification.title}
                                {!notification.isRead && (
                                  <span className="ml-2 w-2 h-2 bg-red-500 rounded-full inline-block"></span>
                                )}
                              </h4>
                              <span className="text-xs text-gray-500 flex-shrink-0">
                                {notification.time}
                              </span>
                            </div>
                            <p className={`text-xs ${!notification.isRead ? 'text-gray-800' : 'text-gray-600'}`}>
                              {notification.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-3 border-t border-gray-200 bg-gray-50">
                    <button className="w-full text-center text-sm text-[#bd0026] hover:text-[#9a0020] font-medium transition-colors">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Dropdown
              menu={{
                items: [
                  {
                    key: "profile",
                    label: (
                      <div className="flex items-center gap-2 px-2 py-1.5">
                        <Settings size={16} className="text-gray-600" />
                        <span className="text-sm">Edit Profile</span>
                      </div>
                    ),
                    onClick: () => navigate("/app/staff/update-profile"),
                  },
                  {
                    type: "divider",
                  },
                  {
                    key: "logout",
                    label: (
                      <div className="flex items-center gap-2 px-2 py-1.5">
                        <LogOut size={16} className="text-gray-600" />
                        <span className="text-sm">Logout</span>
                      </div>
                    ),
                    onClick: handleLogout,
                  },
                ],
              }}
              placement="bottomRight"
              trigger={["click"]}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 12px",
                  borderRadius: 50,
                  cursor: "pointer",
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  border: "1px solid #ffebee",
                }}
              >
                <div
                  style={{
                    background: "#bd0026",
                    borderRadius: "50%",
                    padding: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <User size={16} color="white" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    {currentUser?.name || "User"}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#bd0026",
                      fontWeight: 600,
                      lineHeight: "16px",
                    }}
                  >
                    {currentUser?.role
                      ? currentUser.role.charAt(0).toUpperCase() +
                        currentUser.role.slice(1)
                      : "Member"}
                  </div>
                </div>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};