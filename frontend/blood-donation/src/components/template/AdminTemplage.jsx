import React, { useState } from "react";
import { Layout, Button, Avatar } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  NotificationOutlined,
  BarChartOutlined,
  LogoutOutlined,
  FileTextOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import "./AdminStyle.css";
import { PATH } from "../../constants/config";

const { Header, Sider, Content } = Layout;

const adminSidebarItems = [
  {
    key: "/admin/dashboard",
    label: "Dashboard",
    icon: <HomeOutlined style={{ color: "#e11d48" }} />, // hồng đậm
    to: "/admin/dashboard",
  },
  {
    key: "/admin/manage-user",
    label: "User Management",
    icon: <TeamOutlined style={{ color: "#6366f1" }} />, // xanh tím
    to: PATH.MANAGE_USER,
  },
  {
    key: "/admin/manage-blog",
    label: "Blogs Management",
    icon: <FileTextOutlined style={{ color: "#f59e42" }} />, // cam nhạt
    to: PATH.MANAGE_BLOG,
  },
  {
    key: "/admin/manage-profile",
    label: "Statistics",
    icon: <BarChartOutlined style={{ color: "#22c55e" }} />, // xanh lá
    to: "/admin/statistics",
  },
];

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="admin-template">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width={250}
          className="admin-sidebar"
          style={{
            background: "#fff",
            borderRight: "1px solid #f3f3f3",
            boxShadow: "2px 0 8px #fce7ef",
          }}
        >
          <div className="logo-admin" style={{ padding: 24, marginBottom: 12 }}>
            <img
              src="https://donarosso.it/wp-content/uploads/2024/10/Logo-Rosso-Orizzontale.png"
              alt="Blood Bank Logo"
              style={{ width: "100%", borderRadius: 12 }}
            />
          </div>
          <nav>
            {adminSidebarItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.key}
                  to={item.to}
                  className={`admin-sidebar-item${isActive ? " active" : ""}`}
                  style={{
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  <span className="admin-sidebar-icon">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                  {isActive && !collapsed && (
                    <span
                      style={{
                        marginLeft: "auto",
                        color: "#e11d48",
                        fontWeight: 700,
                        fontSize: 18,
                      }}
                    >
                      &gt;
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </Sider>
        <Layout>
          <Header
            style={{
              backgroundColor: "#fff0f6",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 24px",
              borderBottom: "1px solid #f3f3f3",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e11d48",
                letterSpacing: 1,
              }}
            >
              Blood Donation Admin Dashboard
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Avatar size="large" icon={<UserOutlined />} />
              <Button icon={<LogoutOutlined />} danger onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px",
              padding: "30px",
              background: "#fff",
              borderRadius: 12,
              minHeight: 360,
              boxShadow: "0 2px 8px #f0f1f2",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminTemplate;
