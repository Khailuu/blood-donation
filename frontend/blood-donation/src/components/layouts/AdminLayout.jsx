import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminTemplate from '../template/AdminTemplage'

export const AdminLayout = () => {
  return (
    <div>
      <AdminTemplate />
    </div>
  )
}
