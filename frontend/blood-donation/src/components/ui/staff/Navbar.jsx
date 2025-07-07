import React from "react";
import { User, LogOut, Settings, Bell } from "lucide-react";
import { Dropdown, Badge } from "antd";
import { authService } from "../../../services/authService";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const currentUser = authService.getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
  };

  const unreadNotifications = 5;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 mx-6 mt-3 rounded-[50px] mb-1">
      <div className="px-6 ">
        <div className="flex justify-between items-center h-16">
          <div></div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Badge
                count={unreadNotifications}
                size="small"
                className="text-xs"
                offset={[2, 0]}
              >
                <Bell size={18} className="text-[#bd0026]" />
              </Badge>
            </button>

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
