import React from "react";
import { HeaderComponent } from "../ui/common/HeaderComponent";
import { Outlet, useLocation } from "react-router-dom";
import { FooterComponent } from "../ui/common/FooterComponent";
import { authService } from "../../services/authService";
import { BackgroundCloud } from "../ui/common/BackgroundCloud";

export const MainLayout = () => {
  const user = authService.getCurrentUser();
  const role = user?.role;

  const location = useLocation();

  const hideLayout =
    location.pathname === "/app/member/health-survey";

  return (
    <div
      className="flex flex-col"
      style={{ position: "relative" }}
    >
      <BackgroundCloud />
      <div className="" style={{ zIndex: 2 }}>
        {!hideLayout && <HeaderComponent />}
        <div className="flex-1">
          <Outlet />
        </div>
        {!hideLayout && role !== "staff" && role !== "admin" && <FooterComponent />}
      </div>
    </div>
  );
};
