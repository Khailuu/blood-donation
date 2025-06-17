import React, { useState } from 'react';

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

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const User = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const Phone = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPin = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Clock = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Dashboard = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedInventory, setSelectedInventory] = useState(null);

  const donationRequests = [
    { 
      id: 1, 
      patientName: 'Nguyễn Văn A', 
      bloodType: 'A+', 
      hospital: 'Bệnh viện Chợ Rẫy', 
      urgency: 'Khẩn cấp', 
      status: 'Chờ xử lý',
      requestDate: '2024-06-17',
      requestTime: '14:30',
      requiredAmount: '3 túi',
      contactPerson: 'BS. Trần Minh Tuấn',
      contactPhone: '0903.123.456',
      patientAge: '45 tuổi',
      diagnosis: 'Phẫu thuật tim mạch',
      roomNumber: 'Phòng 302 - Khoa Tim mạch',
      notes: 'Bệnh nhân cần truyền máu gấp trước phẫu thuật dự kiến lúc 16:00 cùng ngày.',
      emergencyLevel: 'Cực kỳ khẩn cấp'
    },
    { 
      id: 2, 
      patientName: 'Trần Thị B', 
      bloodType: 'O-', 
      hospital: 'Bệnh viện 115', 
      urgency: 'Thường', 
      status: 'Đã xử lý',
      requestDate: '2024-06-16',
      requestTime: '09:15',
      requiredAmount: '2 túi',
      contactPerson: 'BS. Lê Thị Hồng',
      contactPhone: '0907.789.012',
      patientAge: '32 tuổi',
      diagnosis: 'Tai nạn giao thông',
      roomNumber: 'Phòng 105 - Khoa Cấp cứu',
      notes: 'Bệnh nhân đã được truyền máu thành công.',
      emergencyLevel: 'Bình thường'
    }
  ];

  const inventory = [
    { 
      bloodType: 'A+', 
      quantity: 45, 
      expiry: '2024-07-15', 
      status: 'Đủ',
      minRequired: 50,
      lastDonation: '2024-06-15',
      totalDonated: 120,
      avgMonthlyUsage: 35,
      donorCount: 45,
      location: 'Kho chính - Tủ lạnh A1',
      batchInfo: ['Batch001-A+', 'Batch002-A+', 'Batch003-A+']
    },
    { 
      bloodType: 'A-', 
      quantity: 12, 
      expiry: '2024-07-20', 
      status: 'Thấp',
      minRequired: 25,
      lastDonation: '2024-06-10',
      totalDonated: 80,
      avgMonthlyUsage: 20,
      donorCount: 15,
      location: 'Kho chính - Tủ lạnh A2',
      batchInfo: ['Batch004-A-', 'Batch005-A-']
    },
    { 
      bloodType: 'B+', 
      quantity: 30, 
      expiry: '2024-07-18', 
      status: 'Đủ',
      minRequired: 30,
      lastDonation: '2024-06-14',
      totalDonated: 95,
      avgMonthlyUsage: 25,
      donorCount: 32,
      location: 'Kho chính - Tủ lạnh B1',
      batchInfo: ['Batch006-B+', 'Batch007-B+']
    },
    { 
      bloodType: 'B-', 
      quantity: 8, 
      expiry: '2024-07-22', 
      status: 'Thấp',
      minRequired: 20,
      lastDonation: '2024-06-08',
      totalDonated: 45,
      avgMonthlyUsage: 15,
      donorCount: 12,
      location: 'Kho chính - Tủ lạnh B2',
      batchInfo: ['Batch008-B-']
    },
    { 
      bloodType: 'AB+', 
      quantity: 15, 
      expiry: '2024-07-25', 
      status: 'Thấp',
      minRequired: 25,
      lastDonation: '2024-06-12',
      totalDonated: 60,
      avgMonthlyUsage: 18,
      donorCount: 18,
      location: 'Kho chính - Tủ lạnh AB1',
      batchInfo: ['Batch009-AB+', 'Batch010-AB+']
    },
    { 
      bloodType: 'AB-', 
      quantity: 5, 
      expiry: '2024-07-28', 
      status: 'Rất thấp',
      minRequired: 15,
      lastDonation: '2024-06-05',
      totalDonated: 25,
      avgMonthlyUsage: 8,
      donorCount: 8,
      location: 'Kho chính - Tủ lạnh AB2',
      batchInfo: ['Batch011-AB-']
    },
    { 
      bloodType: 'O+', 
      quantity: 60, 
      expiry: '2024-07-12', 
      status: 'Đủ',
      minRequired: 60,
      lastDonation: '2024-06-16',
      totalDonated: 200,
      avgMonthlyUsage: 55,
      donorCount: 75,
      location: 'Kho chính - Tủ lạnh O1',
      batchInfo: ['Batch012-O+', 'Batch013-O+', 'Batch014-O+', 'Batch015-O+']
    },
    { 
      bloodType: 'O-', 
      quantity: 3, 
      expiry: '2024-07-30', 
      status: 'Rất thấp',
      minRequired: 30,
      lastDonation: '2024-06-03',
      totalDonated: 40,
      avgMonthlyUsage: 25,
      donorCount: 10,
      location: 'Kho chính - Tủ lạnh O2',
      batchInfo: ['Batch016-O-']
    }
  ];

  const openRequestDetails = (request) => {
    setSelectedRequest(request);
  };

  const closeRequestDetails = () => {
    setSelectedRequest(null);
  };

  const openInventoryDetails = (item) => {
    setSelectedInventory(item);
  };

  const closeInventoryDetails = () => {
    setSelectedInventory(null);
  };

  return (
    <div className="ml-72 space-y-6 p-24 bg-gray-50 min-h-screen relative">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Blood Donation Management </h1>
        <p className="text-gray-600 mt-2">Blood donation system overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total requests today</p>
              <p className="text-2xl font-bold text-pink-600">12</p>
              <p className="text-xs text-green-600 mt-1">↑ 20% compared to yesterday</p>
            </div>
            <div className="bg-pink-100 p-3 rounded-full">
              <FileText className="h-8 w-8 text-pink-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Blood donation schedule today</p>
              <p className="text-2xl font-bold text-pink-600">8</p>
              <p className="text-xs text-blue-600 mt-1">5 completed</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Low blood inventory</p>
              <p className="text-2xl font-bold text-red-600">5</p>
              <p className="text-xs text-red-600 mt-1">Urgent need to replenish</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <Package className="h-8 w-8 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">New announcement</p>
              <p className="text-2xl font-bold text-pink-600">3</p>
              <p className="text-xs text-orange-600 mt-1">2 emergency notice</p>
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
            <h3 className="text-lg font-semibold text-gray-800">Urgent request</h3>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
              {donationRequests.filter(req => req.urgency === 'Khẩn cấp').length} request
            </span>
          </div>
          <div className="space-y-3">
            {donationRequests.filter(req => req.urgency === 'Khẩn cấp').map(req => (
              <div key={req.id} className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-l-4 border-red-400 hover:bg-red-100 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{req.patientName}</p>
                  <p className="text-sm text-gray-600">{req.bloodType} - {req.hospital}</p>
                  <p className="text-xs text-gray-500 mt-1">Status: {req.status}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                    {req.urgency}
                  </span>
                  <button 
                    onClick={() => openRequestDetails(req)}
                    className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    See details
                  </button>
                </div>
              </div>
            ))}
            {donationRequests.filter(req => req.urgency === 'Khẩn cấp').length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p>There are no urgent requests.</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Blood bank needs replenishment</h3>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
              {inventory.filter(item => item.status !== 'Đủ').length} blood type
            </span>
          </div>
          <div className="space-y-3">
            {inventory.filter(item => item.status !== 'Đủ').map(item => (
              <div key={item.bloodType} className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 hover:bg-yellow-100 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Blood type {item.bloodType}</p>
                  <p className="text-sm text-gray-600">Remaining: {item.quantity} bag</p>
                  <p className="text-xs text-gray-500 mt-1">Expiry: {item.expiry}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Rất thấp' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status}
                  </span>
                  <button 
                    onClick={() => openInventoryDetails(item)}
                    className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    Add to stock
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">All blood types in stock</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {inventory.map(item => (
            <div key={item.bloodType} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-pink-600 mb-1">{item.bloodType}</div>
              <div className="text-sm text-gray-600 mb-2">{item.quantity} bag</div>
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

      {selectedInventory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-screen overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Chi tiết kho máu - Nhóm {selectedInventory.bloodType}</h2>
              <button 
                onClick={closeInventoryDetails}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className={`border rounded-lg p-4 ${
                selectedInventory.status === 'Rất thấp' ? 'bg-red-50 border-red-200' :
                selectedInventory.status === 'Thấp' ? 'bg-yellow-50 border-yellow-200' :
                'bg-green-50 border-green-200'
              }`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-4 h-4 rounded-full ${
                    selectedInventory.status === 'Rất thấp' ? 'bg-red-500' :
                    selectedInventory.status === 'Thấp' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}></div>
                  <span className={`font-semibold ${
                    selectedInventory.status === 'Rất thấp' ? 'text-red-800' :
                    selectedInventory.status === 'Thấp' ? 'text-yellow-800' :
                    'text-green-800'
                  }`}>
                    Trạng thái: {selectedInventory.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Hiện có:</span>
                    <p className="font-bold text-2xl text-blue-600">{selectedInventory.quantity} túi</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Tối thiểu cần:</span>
                    <p className="font-bold text-lg text-gray-800">{selectedInventory.minRequired} túi</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Thiếu hụt:</span>
                    <p className={`font-bold text-lg ${
                      selectedInventory.quantity < selectedInventory.minRequired ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {selectedInventory.quantity < selectedInventory.minRequired 
                        ? `${selectedInventory.minRequired - selectedInventory.quantity} túi` 
                        : 'Đủ'
                      }
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600">Hạn sử dụng:</span>
                    <p className="font-medium text-gray-800">{selectedInventory.expiry}</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5 text-purple-600" />
                  Thống kê sử dụng
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-600 block text-xs">Sử dụng trung bình/tháng</span>
                    <p className="font-bold text-xl text-blue-600">{selectedInventory.avgMonthlyUsage}</p>
                    <span className="text-xs text-gray-500">túi</span>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-600 block text-xs">Tổng hiến tặng năm nay</span>
                    <p className="font-bold text-xl text-green-600">{selectedInventory.totalDonated}</p>
                    <span className="text-xs text-gray-500">túi</span>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-600 block text-xs">Số người hiến</span>
                    <p className="font-bold text-xl text-orange-600">{selectedInventory.donorCount}</p>
                    <span className="text-xs text-gray-500">người</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Vị trí lưu trữ
                </h3>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-800">{selectedInventory.location}</p>
                  <p className="text-sm text-gray-600 mt-1">Lần hiến máu gần nhất: {selectedInventory.lastDonation}</p>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Thông tin lô hàng</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedInventory.batchInfo.map((batch, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-mono text-sm text-gray-800">{batch}</span>
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Còn hạn</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Mức độ đầy kho</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hiện tại: {selectedInventory.quantity} túi</span>
                    <span>Mục tiêu: {selectedInventory.minRequired} túi</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className={`h-4 rounded-full transition-all duration-500 ${
                        selectedInventory.quantity >= selectedInventory.minRequired 
                          ? 'bg-green-500' 
                          : selectedInventory.quantity >= selectedInventory.minRequired * 0.5
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ 
                        width: `${Math.min(100, (selectedInventory.quantity / selectedInventory.minRequired) * 100)}%` 
                      }}
                    ></div>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    {Math.round((selectedInventory.quantity / selectedInventory.minRequired) * 100)}% mục tiêu
                  </div>
                </div>
              </div>

              {selectedInventory.status !== 'Đủ' && (
                <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-red-800 mb-2">⚠️ Khuyến nghị hành động</h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    {selectedInventory.status === 'Rất thấp' && (
                      <>
                        <li>• Liên hệ ngay với các nhà hiến máu thường xuyên</li>
                        <li>• Tổ chức chiến dịch hiến máu khẩn cấp</li>
                        <li>• Ưu tiên sử dụng cho các ca cấp cứu</li>
                      </>
                    )}
                    {selectedInventory.status === 'Thấp' && (
                      <>
                        <li>• Lên kế hoạch tổ chức hiến máu trong tuần tới</li>
                        <li>• Thông báo cho các bệnh viện về tình trạng kho</li>
                        <li>• Tăng cường tuyên truyền hiến máu</li>
                      </>
                    )}
                  </ul>
                </div>
              )}

              <div className="flex gap-3 pt-4 border-t">
                <button className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Tổ chức hiến máu khẩn cấp
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Liên hệ người hiến
                </button>
                <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Cập nhật kho
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Chi tiết yêu cầu hiến máu</h2>
              <button 
                onClick={closeRequestDetails}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-red-800">{selectedRequest.emergencyLevel}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Nhóm máu cần:</span>
                    <p className="font-bold text-red-600 text-lg">{selectedRequest.bloodType}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Số lượng:</span>
                    <p className="font-semibold text-gray-800">{selectedRequest.requiredAmount}</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600" />
                  Thông tin bệnh nhân
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Họ tên:</span>
                    <p className="font-medium">{selectedRequest.patientName}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Tuổi:</span>
                    <p className="font-medium">{selectedRequest.patientAge}</p>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-gray-600">Chẩn đoán:</span>
                    <p className="font-medium">{selectedRequest.diagnosis}</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Thông tin bệnh viện
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Bệnh viện:</span>
                    <p className="font-medium">{selectedRequest.hospital}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Phòng:</span>
                    <p className="font-medium">{selectedRequest.roomNumber}</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-purple-600" />
                  Thông tin liên hệ
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Người liên hệ:</span>
                    <p className="font-medium">{selectedRequest.contactPerson}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Số điện thoại:</span>
                    <p className="font-medium text-blue-600">{selectedRequest.contactPhone}</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  Thông tin thời gian
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Ngày yêu cầu:</span>
                    <p className="font-medium">{selectedRequest.requestDate}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Thời gian:</span>
                    <p className="font-medium">{selectedRequest.requestTime}</p>
                  </div>
                </div>
              </div>

              {selectedRequest.notes && (
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Ghi chú quan trọng</h3>
                  <p className="text-sm text-gray-700 bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    {selectedRequest.notes}
                  </p>
                </div>
              )}

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Trạng thái xử lý</h3>
                <div className="flex items-center gap-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedRequest.status === 'Chờ xử lý' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {selectedRequest.status}
                  </span>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedRequest.urgency === 'Khẩn cấp' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {selectedRequest.urgency}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <button className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Xử lý yêu cầu ngay
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Liên hệ bệnh viện
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;