import React from "react";

import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <Layout className="auth-layout">
      <Content className="auth-container">
        <div className="auth-card">
          {/* Nội dung trang auth */}
          <Outlet/>
        </div>
      </Content>
    </Layout>
  );
};
