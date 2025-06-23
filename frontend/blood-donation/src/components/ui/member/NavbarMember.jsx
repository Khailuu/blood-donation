import { Button, Menu } from "antd";
import Title from "antd/es/typography/Title";
import { Link, useNavigate } from "react-router-dom";
import "../../../css/guest/NavBarGuest.css";
import { menuItems, menuItemsMember } from "../../../assets/menu";
import { banner2 } from "../../../assets";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import { authService } from "../../../services/authService";
import { LogOut, Settings, User } from "lucide-react";

export const NavbarMember = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    const clicked = menuItems.find((item) => item.key === e.key);
    if (clicked) navigate(clicked.path);
  };

  const currentUser = authService.getCurrentUser();

  return (

    <div className="navbar-wrapper" style={{ borderBottom: "1px solid red" }}>
      <div className="header">
        <div
          className="logo-title"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <img src={banner2} alt="" style={{ width: 55, height: 50 }} />
        </div>

        <Menu
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          onClick={handleMenuClick}
          items={menuItemsMember.map(({ key, label }) => ({ key, label }))}
          style={{ fontFamily: "raleway", fontWeight: "bold" }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="flex items-center space-x-8">
            <div className="relative group">
              <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm border border-pink-100 cursor-pointer">
                <div className="bg-[#bd0026] p-2 rounded-full">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    {currentUser.name}
                  </span>
                  <span className="text-xs text-[#bd0026] ">Staff</span>
                </div>
              </div>

              <div className="absolute mt-2 w-44 bg-white rounded-lg shadow-lg border border-pink-100 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 origin-top-right z-30 invisible group-hover:visible">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a
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
          </div>
          <Button
            type="primary"
            style={{
              backgroundColor: "#bd0026",
              borderColor: "#bd0026",
              color: "white",
              marginRight: 12,
              borderRadius: "50px",

              height: "40px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Link style={{ color: "white", textDecoration: "none" }}>
              Health Survey
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};