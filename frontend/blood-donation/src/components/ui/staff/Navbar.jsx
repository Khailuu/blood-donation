import React from "react";
import { Heart, User, LogOut, Settings } from "lucide-react";
import { Dropdown, Typography } from "antd";
import { authService } from "../../../services/authService";
import { Link, Navigate, useNavigate } from "react-router-dom";
const { Title } = Typography;

export const Navbar = () => {
  const currentUser = authService.getCurrentUser();
  const navigate = useNavigate();
  console.log({ currentUser });

  const handleLogout = () => {
    authService.logout();
  };

  return (
    <nav className="bg-gradient-to-r from-pink-50 to-rose-50 shadow-lg border-b-2 border-pink-200 fixed top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="logo-title">
            <Link>
              <Title
                level={2}
                style={{
                  color: "#bd0026",
                  margin: 0,
                  fontFamily: "Oi",
                  fontWeight: "normal",
                }}
              >
                HEMORA
              </Title>
            </Link>
          </div>

          <Dropdown
            menu={{
              items: [
                {
                  key: "profile",
                  label: (
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <Settings size={16} />
                      <span>Edit Profile</span>
                    </div>
                  ),
                  onClick: () => navigate("/app/staff/update-profile"),
                },
                {
                  key: "logout",
                  label: (
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
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

      <div className="h-1 bg-[#bd0026]"></div>
    </nav>
  );
};
