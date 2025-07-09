import { Outlet } from "react-router-dom";
import { userService } from "../../services/manageUserService";
import { AdminNavbar } from "../ui/admin/AdminNavbar";
import { AdminSidebar } from "../ui/admin/AdminSidebar";
import { SideBar } from "../ui/staff/SideBar";
import { Navbar } from "../ui/staff/Navbar";
import { BackgroundCloud } from "../ui/common/BackgroundCloud";

export const DashboardLayout = () => {
  const user = userService.getCurrentUser();
  const role = user?.role;

  const SidebarComponent = role === "admin" ? AdminSidebar : SideBar;
  const HeaderComponent = role === "admin" ? AdminNavbar : Navbar;

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
