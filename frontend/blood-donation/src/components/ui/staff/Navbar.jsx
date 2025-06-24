import React from "react";
import { Heart, User, LogOut, Settings } from "lucide-react";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../services/authService";
const {Title} = Typography;

export const Navbar = ({ setActiveSection = () => {} }) => {
  const currentUser = authService.getCurrentUser();
  const navigate = useNavigate();
  console.log({currentUser});

  const handleProfileClick = () => {
    if (setActiveSection) {
      setActiveSection('profile');
    }
  };
  
  return (
    <nav className="bg-gradient-to-r from-pink-50 to-rose-50 shadow-lg border-b-2 border-pink-200 fixed top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="logo-title">
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
            </div>

          <div className="flex items-center space-x-8">
            <div className="relative group">
              <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm border border-pink-100 cursor-pointer">
                <div className="bg-[#bd0026] p-2 rounded-full">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    {currentUser?.name}
                  </span>
                  <span className="text-xs text-[#bd0026] ">Staff</span>
                </div>
              </div>

              <div className="absolute mt-2 w-44 bg-white rounded-lg shadow-lg border border-pink-100 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 origin-top-right z-30 invisible group-hover:visible">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <button 
                      onClick={handleProfileClick}
                      className="flex items-center w-full px-4 py-2 hover:bg-pink-50 hover:text-pink-600 text-left"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center w-full px-4 py-2 hover:bg-pink-50 hover:text-[#bd0026] text-left"
                      onClick={() => {
                        authService.logout();
                        navigate('/login'); 
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-[#bd0026]"></div>
    </nav>
  );
};