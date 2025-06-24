import React from "react";

import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link, Outlet } from "react-router-dom";
import { BackgroundCloud } from "../ui/common/BackgroundCloud";

export const AuthLayout = () => {
  return (
    <Layout className="auth-layout">
      <BackgroundCloud/>
      <Content className="auth-container">
        <div className="auth-card">
          <Outlet/>
        </div>
      </Content>
    </Layout>
  );
};
