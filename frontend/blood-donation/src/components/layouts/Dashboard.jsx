import React from 'react';

// Custom SVG Icons
const FileText = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Calendar = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Package = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const Bell = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.97 4.97a.235.235 0 00-.02.022L7.477 9.417 5.384 7.323a.75.75 0 00-1.06 1.061L6.97 10.03a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 00-1.071-1.05z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 3a6.5 6.5 0 00-6.5 6.5c0 .379.081.747.212 1.09l.755 2.077a.75.75 0 00.706.48h9.654a.75.75 0 00.706-.48l.755-2.077c.131-.343.212-.711.212-1.09A6.5 6.5 0 0013.5 3z" />
  </svg>
);

const Dashboard = () => {
  const donationRequests = [
    { id: 1, patientName: 'Nguyễn Văn A', bloodType: 'A+', hospital: 'Bệnh viện Chợ Rẫy', urgency: 'Khẩn cấp', status: 'Chờ xử lý' },
    { id: 2, patientName: 'Trần Thị B', bloodType: 'O-', hospital: 'Bệnh viện 115', urgency: 'Thường', status: 'Đã xử lý' }
  ];

  const inventory = [
    { bloodType: 'A+', quantity: 45, expiry: '2024-07-15', status: 'Đủ' },
    { bloodType: 'A-', quantity: 12, expiry: '2024-07-20', status: 'Thấp' },
    { bloodType: 'B+', quantity: 30, expiry: '2024-07-18', status: 'Đủ' },
    { bloodType: 'B-', quantity: 8, expiry: '2024-07-22', status: 'Thấp' },
    { bloodType: 'AB+', quantity: 15, expiry: '2024-07-25', status: 'Thấp' },
    { bloodType: 'AB-', quantity: 5, expiry: '2024-07-28', status: 'Rất thấp' },
    { bloodType: 'O+', quantity: 60, expiry: '2024-07-12', status: 'Đủ' },
    { bloodType: 'O-', quantity: 3, expiry: '2024-07-30', status: 'Rất thấp' }
  ];

  return (
    <div className="ml-72 space-y-6 p-24 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Quản lý Hiến máu</h1>
        <p className="text-gray-600 mt-2">Tổng quan hệ thống hiến máu</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Tổng yêu cầu hôm nay</p>
              <p className="text-2xl font-bold text-pink-600">12</p>
              <p className="text-xs text-green-600 mt-1">↑ 20% so với hôm qua</p>
            </div>
            <div className="bg-pink-100 p-3 rounded-full">
              <FileText className="h-8 w-8 text-pink-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Lịch hiến máu hôm nay</p>
              <p className="text-2xl font-bold text-pink-600">8</p>
              <p className="text-xs text-blue-600 mt-1">5 đã hoàn thành</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Kho máu thấp</p>
              <p className="text-2xl font-bold text-red-600">5</p>
              <p className="text-xs text-red-600 mt-1">Cần bổ sung khẩn cấp</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <Package className="h-8 w-8 text-red-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Thông báo mới</p>
              <p className="text-2xl font-bold text-pink-600">3</p>
              <p className="text-xs text-orange-600 mt-1">2 thông báo khẩn cấp</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Bell className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Yêu cầu khẩn cấp</h3>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
              {donationRequests.filter(req => req.urgency === 'Khẩn cấp').length} yêu cầu
            </span>
          </div>
          <div className="space-y-3">
            {donationRequests.filter(req => req.urgency === 'Khẩn cấp').map(req => (
              <div key={req.id} className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-400 hover:bg-red-100 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{req.patientName}</p>
                  <p className="text-sm text-gray-600">{req.bloodType} - {req.hospital}</p>
                  <p className="text-xs text-gray-500 mt-1">Trạng thái: {req.status}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                    {req.urgency}
                  </span>
                  <button className="text-xs text-blue-600 hover:text-blue-800">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
            {donationRequests.filter(req => req.urgency === 'Khẩn cấp').length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p>Không có yêu cầu khẩn cấp nào</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Kho máu cần bổ sung</h3>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
              {inventory.filter(item => item.status !== 'Đủ').length} loại máu
            </span>
          </div>
          <div className="space-y-3">
            {inventory.filter(item => item.status !== 'Đủ').map(item => (
              <div key={item.bloodType} className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 hover:bg-yellow-100 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Nhóm máu {item.bloodType}</p>
                  <p className="text-sm text-gray-600">Còn lại: {item.quantity} túi</p>
                  <p className="text-xs text-gray-500 mt-1">Hạn sử dụng: {item.expiry}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Rất thấp' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                  <button className="text-xs text-blue-600 hover:text-blue-800">
                    Thêm vào kho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tất cả nhóm máu trong kho</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {inventory.map(item => (
            <div key={item.bloodType} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-pink-600 mb-1">{item.bloodType}</div>
              <div className="text-sm text-gray-600 mb-2">{item.quantity} túi</div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.status === 'Đủ' ? 'bg-green-100 text-green-800' :
                item.status === 'Thấp' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;