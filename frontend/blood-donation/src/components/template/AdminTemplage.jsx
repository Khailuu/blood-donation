import React, { useState } from "react";
import { Layout, Button, Avatar } from "antd";
import {
  HomeOutlined,
  HeartOutlined,
  UserOutlined,
  NotificationOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import './AdminStyle.css';
import { PATH } from "../../constants/config";

const { Header, Sider, Content } = Layout;

const adminSidebarItems = [
  {
    key: "/admin/dashboard",
    label: "Dashboard",
    icon: <HomeOutlined />,
    to: "/admin/dashboard",
  },
  // {
  //   key: "/admin/donation",
  //   label: "Donation Management",
  //   icon: <HeartOutlined />,
  //   to: "/admin/donation",
  // },
  {
    key: "/admin/manage-user",
    label: "User Management",
    icon: <UserOutlined />,
    to: PATH.MANAGE_USER,
  },
  {
    key: "/admin/manage-blog",
    label: "Blogs Management",
    icon: <NotificationOutlined />,
    to: PATH.MANAGE_BLOG,
  },
  {
    key: "/admin/statistics",
    label: "Statistics",
    icon: <BarChartOutlined />,
    to: "/admin/statistics",
  },
];

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="admin-template">
      <Layout style={{ minHeight: '100vh' }}>
        {/* Sidebar */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          theme="light"
          width={240}
          style={{
            background: "#FFD8DF",
            boxShadow: "2px 0 8px #fce7ef",
            paddingTop: 24,
          }}
        >
          <div className="logo-admin" style={{ padding: 16, marginBottom: 24 }}>
            <img
              src="https://donarosso.it/wp-content/uploads/2024/10/Logo-Rosso-Orizzontale.png"
              alt="Blood Bank Logo"
              style={{ width: '100%', borderRadius: 12 }}
            />
          </div>
          <nav>
            {adminSidebarItems.map(item => {
              const isActive = location.pathname === item.to;
              return (
                <NavLink
                  key={item.key}
                  to={item.to}
                  className={`flex items-center gap-3 px-5 py-3 my-2 rounded-lg font-semibold transition-all text-base ${
                    isActive
                      ? "bg-[#fde2e2] text-[#e11d48] shadow"
                      : "text-gray-700 hover:bg-pink-50 hover:text-[#e11d48]"
                  }`}
                  style={{
                    fontSize: 17,
                  }}
                >
                  <span
                    className={`text-xl flex items-center justify-center ${
                      isActive ? "text-[#e11d48]" : "text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {!collapsed && <span>{item.label}</span>}
                </NavLink>
              );
            })}
          </nav>
        </Sider>

        {/* Main Content */}
        <Layout>
          <Header
            style={{
              backgroundColor: '#ffe4e6',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 24px',
            }}
          >
            <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#e11d48' }}>
              Blood Donation Management Dashboard
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar size="large" icon={<UserOutlined />} />
              <Button icon={<LogoutOutlined />} danger onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </Header>
          <Content style={{ margin: '24px', padding: '30px', background: '#fff', borderRadius: 8 }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminTemplate;
