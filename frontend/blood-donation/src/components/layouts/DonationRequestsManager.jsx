import React, { useState } from 'react';

const DonationRequestsManager = () => {
  const [donationRequests, setDonationRequests] = useState([
    { id: 1, patientName: 'Nguyễn Văn A', bloodType: 'A+', hospital: 'Bệnh viện Chợ Rẫy', urgency: 'Khẩn cấp', status: 'Chờ xử lý' },
    { id: 2, patientName: 'Trần Thị B', bloodType: 'O-', hospital: 'Bệnh viện 115', urgency: 'Thường', status: 'Đã xử lý' }
  ]);

  const handleApprove = (id) => {
    setDonationRequests(donationRequests.map(request => 
      request.id === id ? { ...request, status: 'Đã xử lý' } : request
    ));
  };

  const handleReject = (id) => {
    setDonationRequests(donationRequests.map(request => 
      request.id === id ? { ...request, status: 'Từ chối' } : request
    ));
  };

  const handleFilter = () => {
    console.log('Filter functionality');
  };

  const handleExportReport = () => {
    console.log('Export report functionality');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Đã xử lý':
        return 'bg-green-100 text-green-800';
      case 'Từ chối':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 ml-72 p-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Quản lý yêu cầu máu</h2>
        <div className="flex gap-2">
          <button 
            onClick={handleFilter}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center gap-2"
          >
            <span>🔍</span>
            Lọc
          </button>
          <button 
            onClick={handleExportReport}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 flex items-center gap-2"
          >
            <span>📥</span>
            Xuất báo cáo
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-pink-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-pink-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bệnh nhân</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nhóm máu</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bệnh viện</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mức độ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {donationRequests.map((request) => (
                <tr key={request.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{request.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.patientName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">
                      {request.bloodType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.hospital}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      request.urgency === 'Khẩn cấp' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {request.urgency}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleApprove(request.id)}
                        disabled={request.status === 'Đã xử lý'}
                        className="text-green-600 hover:text-green-900 disabled:text-gray-400 disabled:cursor-not-allowed"
                        title="Phê duyệt"
                      >
                        ✅
                      </button>
                      <button 
                        onClick={() => handleReject(request.id)}
                        disabled={request.status === 'Từ chối'}
                        className="text-red-600 hover:text-red-900 disabled:text-gray-400 disabled:cursor-not-allowed"
                        title="Từ chối"
                      >
                        ❌
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonationRequestsManager;