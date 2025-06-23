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
import { Link } from "react-router-dom";

export const SideBar = ({
  activeSection
}) => {
  const sidebarItems = [
    {
      id: "dashboard",
      path: "/app/staff/dashboard",
      label: "Dashboard",
      icon: Heart,
      color: "text-pink-600",
    },
    {
      id: "blood-requests",
      path: "/app/staff/blood-requests",
      label: "Urgent Request",
      icon: Plus,
      color: "text-red-600",
    },
    {
      id: "donation-schedule",
      path: "/app/staff/donation-schedule",
      label: "Donation Schedule",
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      id: "donation-requests",
      path: "/app/staff/donation-requests",
      label: "Donation Request",
      icon: FileText,
      color: "text-purple-600",
    },
    {
      id: "inventory",
      path: "/app/staff/inventory",
      label: "Blood Inventory",
      icon: Package,
      color: "text-green-600",
    },
    {
      id: "profile",
      path: "/app/staff/profile",
      label: "Profile",
      icon: User,
      color: "text-orange-600",
    },
    {
      id: "notifications",
      path: "/app/staff/notifications",
      label: "Notifications",
      icon: Bell,
      color: "text-yellow-600",
    },
  ];

  return (
    <div className="w-64 bg-white shadow-lg fixed top-[85px] left-0 bottom-0 border-r border-gray-200 z-40">
      <div className="py-4 overflow-y-auto h-[calc(100vh-180px)] mt-3">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className="px-4 mb-1">
              <Link 
                to={item.path} 
                className={`w-full flex items-center px-3 py-3 rounded-lg text-left transition-all duration-200 group ${
                  isActive
                    ? "bg-pink-50 text-[#bd0026] border-r-4 border-[#bd0026]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center space-x-3 flex-1">
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? "text-[#bd0026]" : item.color
                    }`}
                  />
                  <span className="font-bold text-sm">{item.label}</span>
                </div>

                {item.badge && (
                  <div
                    className={`${
                      item.id === "blood-requests"
                        ? "bg-red-500 text-white animate-pulse"
                        : "bg-pink-500 text-white"
                    } text-xs font-semibold px-2 py-1 rounded-full min-w-[20px] text-center`}
                  >
                    {item.badge}
                  </div>
                )}

                {isActive && (
                  <ChevronRight className="h-4 w-4 text-[#bd0026] ml-2" />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-pink-50 to-transparent">
          <img
            className="loginTitle"
            src={banner2}
            alt="Blood Donation Logo"
            style={{ marginBottom: 0 }}
          />
      </div>
    </div>
  );
};
