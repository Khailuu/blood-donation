import React from 'react'
import { banner2 } from '../../assets'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export const AuthLayout = ({children}) => {
  return (
    <Layout className="auth-layout">
      <Content className="auth-container">
        <div className="auth-card">
          {/* Logo công ty */}
          <Link to="/" className="logo-container">
            <Image src={banner2} preview={false} width={120} />
          </Link>
          
          {/* Nội dung trang auth */}
          <div className="auth-content">
            {children}
          </div>
          
          {/* Footer đơn giản */}
          <div className="auth-footer">
            <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </Content>
    </Layout>
  )
}
