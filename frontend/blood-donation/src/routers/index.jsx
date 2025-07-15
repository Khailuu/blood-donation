import { useRoutes, Navigate } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { MainLayoutGuest } from "../components/layouts/MainLayoutGuest";
import { HomePage } from "../pages/guest/HomePage";
import DonatePage from "../pages/guest/DonatePage";
import BlogPage from "../pages/guest/BlogPage";
import ContactsPage from "../pages/guest/ContactsPage";

import { MemberPage } from "../pages/member/MemberPage";
import { StaffDashboard } from "../pages/staff/StaffDashboard";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import RoleRoute from "../components/layouts/RoleRoute";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";
import Dashboard from "../components/template/staff/Dashboard";
import BloodRequests from "../components/template/staff/BloodRequests";
import DonationSchedule from "../components/template/staff/DonationSchedule";
import DonationRequestsManager from "../components/template/staff/DonationRequestsManager";
import InventoryManagement from "../components/template/staff/InventoryManagement";
import Notifications from "../components/template/staff/Notifications";
import Profile from "../components/template/staff/Profile";
import UpdateProfile from "../components/template/staff/UpdateProfile";
import { MemberDonate } from "../pages/member/MemberDonate";

import { MemberHomePage } from "../pages/member/MemberHomePage";
import { DoubtsSection } from "../components/template/guest/home/DoubtsSection";
import { MemberSchedule } from "../pages/member/MemberSchedule";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { element } from "prop-types";
import ManageBlogPage from "../components/ui/admin/ManageBlogPage";
import ManageUser from "../components/ui/admin/ManageUser";
import { AdminDashboard } from "../components/ui/admin/AdminDashboard";
import Statistics from "../components/ui/admin/Statistics";

const router = [
  {
    element: <MainLayoutGuest />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/donate", element: <DonatePage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contacts", element: <ContactsPage /> },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      { path: "/signin", element: <SignInPage /> },
      { path: "/signup", element: <SignUpPage /> },
    ],
  },

  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "member",
        element: (
          <RoleRoute allowedRoles={["member"]}>
            <MemberPage />,
          </RoleRoute>
        ),
        children: [
          { index: true, element: <Navigate to="home" replace /> },
          { path: "home", element: <MemberHomePage /> },
          { path: "donate", element: <MemberDonate /> },
          { path: "schedule", element: <MemberSchedule /> },
          { path: "faq", element: <DoubtsSection /> },
        ],
      },

      {
        path: "staff",
        element: (
          <RoleRoute allowedRoles={["staff"]}>
            <StaffDashboard />
          </RoleRoute>
        ),
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "blood-requests", element: <BloodRequests /> },
          { path: "donation-schedule", element: <DonationSchedule /> },
          { path: "donation-requests", element: <DonationRequestsManager /> },
          { path: "inventory", element: <InventoryManagement /> },
          { path: "profile", element: <Profile /> },
          { path: "notifications", element: <Notifications /> },
          { path: "update-profile", element: <UpdateProfile /> },
          { index: true, element: <Navigate to="dashboard" replace /> },
        ],
      },
    ],
  },

  {
    path: "admin",
    element: (
      <RoleRoute allowedRoles={["admin"]}>
        <AdminLayout />
      </RoleRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "manage-blog",
        element: <ManageBlogPage />,
      },
      {
        path: "manage-user",
        element: <ManageUser />,
      },
      {
        path: "statistics",
        element: <Statistics />
      }
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
];

export const Router = () => useRoutes(router);
