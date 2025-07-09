import React from "react";
import { Outlet } from "react-router-dom";

export const StaffDashboard = () => {
  return (
    <div className="flex-1" style={{ position: "relative" }}>
      {/* Background Cloud */}
      <main className="py-4">
        <div className="rounded-[50px] bg-white shadow-sm p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};