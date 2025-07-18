import React from "react";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "../ui/common/FooterComponent";
import { NavbarGuest } from "../ui/guest/NavbarGuest";
import { BackgroundCloud } from "../ui/common/BackgroundCloud";

export const MainLayoutGuest = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ position: "relative" }}>
      <BackgroundCloud/>
      <div className="" style={{ zIndex: 2 }}>
        <NavbarGuest />
        <div className="flex-1 sm:w-[90%] w-[90%] mx-auto md:w-[90%] iphone-6:mx-auto iphone-6-plus:mx-auto iphone-6:w-[90%] iphone-6-plus:w-[90%]">
          <Outlet />
        </div>
        <FooterComponent />
      </div>
    </div>
  );
};
