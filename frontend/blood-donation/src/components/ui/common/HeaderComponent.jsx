import React from 'react';
import { authService } from '../../../services/authService';

import { HeaderMember } from '../member/HeaderMember';
import { StaffDashboard } from '../../../pages/staff/StaffDashboard';
import { AdminDashboard } from '../../../pages/admin/AdminDashboard';
import { Navbar } from './Navbar';
import { Staff } from './Staff';

export const HeaderComponent = () => {
  const user = authService.getCurrentUser();
  const role = user?.role;

  return (
    <div>
      {role === "member" && <HeaderMember />}
      {role === "staff" && <Staff />}
    </div>
  );
};