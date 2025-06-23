import { Navbar } from "../../components/ui/staff/Navbar";
import { SideBar } from "../../components/ui/staff/SideBar";
import { Outlet, useLocation } from "react-router-dom";

export const StaffDashboard = () => {
  const location = useLocation();

  // Lấy phần cuối cùng của URL để xác định active section
  const pathSegments = location.pathname.split("/");
  const activeSection = pathSegments[pathSegments.length - 1] || "dashboard";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <Navbar />
      <div className="flex">
        <SideBar activeSection={activeSection} />
        <div className="p-6" style={{width: 2000, border: "1px solid red" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
