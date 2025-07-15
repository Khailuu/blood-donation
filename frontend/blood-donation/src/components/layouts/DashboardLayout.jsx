import { Outlet } from "react-router-dom";
import { userService } from "../../services/manageUserService";
import { AdminNavbar } from "../ui/admin/AdminNavbar";
import { AdminSidebar } from "../ui/admin/AdminSidebar";
import { SideBar } from "../ui/staff/SideBar";
import { Navbar } from "../ui/staff/Navbar";
import { BackgroundCloud } from "../ui/common/BackgroundCloud";
import { useEffect, useState } from "react";

export const DashboardLayout = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await userService.getCurrentUser();
        console.log("Fetched user data:", userData); // Kiểm tra dữ liệu nhận được
        setUser(userData);
      } catch (err) {
        console.error("Error fetching user:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user data</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const role = user?.role;
  console.log("Current user role:", role);

  const SidebarComponent = role === "Admin" ? AdminSidebar : SideBar;
  const HeaderComponent = role === "Admin" ? AdminNavbar : Navbar;

  return (
    <div className="flex h-screen" style={{ position: "relative" }}>
      <BackgroundCloud />
      <div className="fixed z-50 h-full">
        <SidebarComponent />
      </div>

      <div className="flex-1 flex flex-col justify-center ml-64">
        <div className="sticky top-0 z-40">
          <HeaderComponent />
        </div>

        <main className="flex-1 px-6 overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
