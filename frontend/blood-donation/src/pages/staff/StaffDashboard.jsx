import React from "react";
import { Outlet } from "react-router-dom";

export const StaffDashboard = () => {
  return (
    <div className="flex-1" style={{ position: "relative" }}>
      <main className="py-4" >
        <div className="rounded-[50px] bg-white shadow-sm p-5" style={{padding: "10px 24px",boxShadow: "1px 2px 10px 10px rgba(10, 10, 10, 0.116)"}}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};