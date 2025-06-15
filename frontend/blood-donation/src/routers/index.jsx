import { useRoutes, Navigate } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { MainLayoutGuest } from "../components/layouts/MainLayoutGuest";
import { HomePage } from "../pages/guest/HomePage";
import DonatePage from "../pages/guest/DonatePage";
import BlogPage from "../pages/guest/BlogPage";
import ContactsPage from "../pages/guest/ContactsPage";

import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { MemberPage } from "../pages/member/MemberPage";
import { StaffDashboard } from "../pages/staff/StaffDashboard";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import RoleRoute from "../components/layouts/RoleRoute";
import { AuthLayout } from "../components/layouts/AuthLayout";
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";

const router = [
  // Public routes with guest layout (accessible without login)
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
      { path: "/signup", element: <SignUpPage/> },
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
      // { index: true, element: <Navigate to="/app/dashboard" replace /> },

      { path: "member", element: <MemberPage /> },
      {
        path: "staff",
        element: <RoleRoute allowedRoles={["staff", "admin"]} />,
        children: [
          { index: true, element: <StaffDashboard /> },
        ],
      },
      {
        path: "admin",
        element: <RoleRoute allowedRoles={["admin"]} />,
        children: [
          { index: true, element: <AdminDashboard /> },
        ],
      },
    ],
  },

  // Fallback route
  { path: "*", element: <Navigate to="/" replace /> },
];

export const Router = () => useRoutes(router);
