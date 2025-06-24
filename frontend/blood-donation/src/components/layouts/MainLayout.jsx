import React from "react";
import { HeaderComponent } from "../ui/common/HeaderComponent";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "../ui/common/FooterComponent";
import { authService } from "../../services/authService";
import { BackgroundCloud } from "../ui/common/BackgroundCloud";

export const MainLayout = () => {
  const user = authService.getCurrentUser();
  const role = user?.role;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ position: "relative" }}
    >
      <BackgroundCloud />
      <div className="" style={{ zIndex: 2 }}>
        <HeaderComponent />
        <div className="flex-1">
          <Outlet />
        </div>
        {role !== "staff" && role !== "admin" && <FooterComponent />}
      </div>
    </div>
  );
};
