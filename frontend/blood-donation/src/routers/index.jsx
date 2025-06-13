import { useRoutes } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { HomePage } from "../pages/guest/HomePage";
import { MainLayoutGuest } from "../components/layouts/MainLayoutGuest";
import DonatePage from "../pages/guest/DonatePage";
import BlogPage from "../pages/guest/BlogPage";
import ContactsPage from "../pages/guest/ContactsPage";
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";

const router = [
  {
    element: <MainLayoutGuest />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/donate", element: <DonatePage/> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/contacts", element: <ContactsPage /> },
      
    ],
  },

  {
    path: "/signin", element: <SignInPage />,
    
  },
  {
    path: "/signup", element: <SignUpPage />,
  }
];
export const Router = () => useRoutes(router);
