import React from "react";
import { authService } from "../../../services/authService";
import { NavbarMember } from "../member/NavbarMember";
import { NavbarGuest } from "../guest/NavbarGuest";
import { Staff } from "../staff/Staff";

export const HeaderComponent = () => {
  const user = authService.getCurrentUser();
  const role = user?.role;

  return (
    <div style={{ zIndex: 2 }}>
      {role === "member" ? (
        <NavbarMember />
      ) : role === "staff" ? (
        <Staff />
      ) : (
        <NavbarGuest />
      )}
    </div>
  );
};
