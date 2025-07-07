import {
  Heart,
  Calendar,
  FileText,
  Package,
  Bell,
  User,
  Plus,
  ChevronRight,
} from "lucide-react";
import { banner2 } from "../../../assets";
import { Link, useLocation } from "react-router-dom";
import { Typography } from "antd";

const { Title } = Typography;

export const SideBar = () => {
  const location = useLocation();
  
  const sidebarItems = [
    {
      id: "dashboard",
      path: "/app/staff/dashboard",
      label: "Dashboard",
      icon: Heart,
      color: "text-pink-500",
    },
    {
      id: "blood-requests",
      path: "/app/staff/blood-requests",
      label: "Urgent Request",
      icon: Plus,
      color: "text-red-500",
    },
    {
      id: "donation-schedule",
      path: "/app/staff/donation-schedule",
      label: "Donation Schedule",
      icon: Calendar,
      color: "text-blue-500",
    },
    {
      id: "donation-requests",
      path: "/app/staff/donation-requests",
      label: "Donation Request",
      icon: FileText,
      color: "text-purple-500",
    },
    {
      id: "inventory",
      path: "/app/staff/inventory",
      label: "Blood Inventory",
      icon: Package,
      color: "text-green-500",
    },
    {
      id: "profile",
      path: "/app/staff/profile",
      label: "Profile",
      icon: User,
      color: "text-orange-500",
    },
    {
      id: "notifications",
      path: "/app/staff/notifications",
      label: "Notifications",
      icon: Bell,
      color: "text-yellow-500",
    },
  ];

  const isActive = (path) => {
    return location.pathname === path || 
           location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className="w-64 h-full bg-white shadow-lg border-r border-gray-200 flex flex-col ">
      <div className="px-6 py-5 border-gray-200 border-b-2">
        <Link to="/app/staff/dashboard">
          <Title
            level={2}
            style={{
              color: "#bd0026",
              margin: 0,
              fontFamily: "Oi",
              fontWeight: "normal",
              letterSpacing: 1,
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            HEMORA
          </Title>

          <p className="text-gray-500 text-sm text-center mt-1">
            Blood Donation System 
          </p>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-2 mt-4 flex flex-col gap-2">
        {sidebarItems.map((item) => {
          const IconComponent = item.icon; // Sử dụng icon từ lucide-react
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center justify-between px-5 py-3  transition-all mx-3 my-1 rounded-lg
                ${isActive(item.path) 
                  ? "bg-gradient-to-r from-pink-50 to-pink-100 text-[#bd0026] font-semibold shadow-sm"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-lg ${
                  isActive(item.path) 
                    ? "bg-[#bd0026] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}>
                  <IconComponent
                    className={`w-4 h-4 ${
                      isActive(item.path) ? "text-white" : item.color
                    }`}
                  />
                </div>
                <span className="text-sm">{item.label}</span>
              </div>
              {isActive(item.path) && (
                <ChevronRight className="w-4 h-4 text-[#bd0026] animate-bounce-right" />
              )}
            </Link>
          );
        })}
      </div>

      <div className="p-4 bg-gradient-to-t from-pink-50 via-white to-transparent">
        <img
          src={banner2}
          alt="Blood Donation Logo"
          className="w-full h-16 object-contain rounded-md" 
        />
      </div>
    </div>
  );
};

// Thêm keyframes animation
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce-right {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(3px); }
  }
  .animate-bounce-right {
    animation: bounce-right 1s infinite;
  }
`;
document.head.appendChild(style);