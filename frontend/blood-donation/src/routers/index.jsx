import { useRoutes, Navigate } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { MainLayoutGuest } from "../components/layouts/MainLayoutGuest";
import { DashboardLayout } from "../components/layouts/DashboardLayout"; // Layout mới cho staff/admin
import { HomePage } from "../pages/guest/HomePage";
import DonatePage from "../pages/guest/DonatePage";
import BlogPage from "../pages/guest/BlogPage";
import ContactsPage from "../pages/guest/ContactsPage";

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
import { HealthSurvey } from "../components/template/member/HealthSurvey";
import { ProfileMember } from "../components/template/member/ProfileMember";
import { MemberBlogPage } from "../components/template/member/blog/MemberBlogPage";
import { BlogDetailPage } from "../components/template/guest/blog/BlogDetailPage";
import { BlogDetailPageMember } from "../components/template/member/blog/BlogDetailPageMember";
import { UnauthorizedPage } from "../components/ui/common/UnauthorizedPage";
import { UnauthorizedLayout } from "../components/layouts/UnauthorizedLayout";
import { AdminDashboardPage } from "../pages/admin/AdminDashboardPage";
import { AdminDashboard } from "../components/template/admin/AdminDashboard";
import ManageUser from "../components/template/admin/ManageUser";
import ManageBlog from "../components/template/admin/ManageBlog";

const router = [
  {
    element: <UnauthorizedLayout/>,
    children: [
      { path: "/unauthorized", element: <UnauthorizedPage /> },
    ]
  },

  {
    element: <MainLayoutGuest />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/donate", element: <DonatePage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/:id", element: <BlogDetailPage /> },
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
    path: "/app/member",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["member"]}>
          <MainLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: "home", element: <MemberHomePage /> },
      { path: "donate", element: <MemberDonate /> },
      { path: "schedule", element: <MemberSchedule /> },
      { path: "blogs", element: <MemberBlogPage /> },
      { path: "blogs/:id", element: <BlogDetailPageMember /> },
      { path: "faq", element: <DoubtsSection /> },
      { path: "health-survey", element: <HealthSurvey /> },
      { path: "profile", element: <ProfileMember /> },
    ],
  },

  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "staff",
        element: <RoleRoute allowedRoles={["staff"]}>
          <StaffDashboard />
        </RoleRoute>,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "blood-requests", element: <BloodRequests /> },
          { path: "donation-schedule", element: <DonationSchedule /> },
          { path: "donation-requests", element: <DonationRequestsManager /> },
          { path: "inventory", element: <InventoryManagement /> },
          { path: "profile", element: <Profile /> },
          { path: "notifications", element: <Notifications /> },
          { path: "update-profile", element: <ProfileMember /> },
          { index: true, element: <Navigate to="dashboard" replace /> },
        ],
      },

      {
        path: "admin",
        element: <RoleRoute allowedRoles={["admin"]}>
          <AdminDashboardPage />
        </RoleRoute>,
        children: [
          
          { path: "dashboard", element: <AdminDashboard /> },
          { path: "manage-users", element: <ManageUser/> },
          { path: "manage-blogs", element: <ManageBlog/> },
          { index: true, element: <Navigate to="dashboard" replace /> },
        ],
      },
    ],
  },

  { path: "*", element: <Navigate to="/" replace /> },
];

export const Router = () => useRoutes(router);