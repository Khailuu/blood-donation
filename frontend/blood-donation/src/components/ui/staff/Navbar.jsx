import React from "react";
import { Heart, User, LogOut, Settings } from "lucide-react";
import { Typography } from "antd";
import { authService } from "../../../services/authService";
import { Navigate, useNavigate } from "react-router-dom";
const {Title} = Typography;

export const Navbar = ({ setActiveSection = () => {} }) => {
  const currentUser = authService.getCurrentUser();
  const navigate = useNavigate();
  console.log({currentUser});

const handleProfileClick = () => {
    navigate('/app/staff/update-profile'); 
  };

  return (
    <nav className="bg-gradient-to-r from-pink-50 to-rose-50 shadow-lg border-b-2 border-pink-200 fixed top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="logo-title">
            <Link to="/dashboard">
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
                  onClick: () => navigate("/app/staff/profile"),
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
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    {currentUser.name}
                  </span>
                  <span className="text-xs text-[#bd0026]" style={{fontWeight: 600}}>{currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)}</span>
                </div>
              </div>

              <div className="absolute mt-2 w-44 bg-white rounded-lg shadow-lg border border-pink-100 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 origin-top-right z-30 invisible group-hover:visible">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a
                      onClick={handleProfileClick}
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-pink-50 hover:text-[#bd0026]"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-pink-50 hover:text-[#bd0026]"
                      onClick={()=>authService.logout()}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Dropdown>
        </div>
      </div>

      <div className="h-1 bg-[#bd0026]"></div>
    </nav>
  );
};