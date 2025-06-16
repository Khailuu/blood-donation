import React, { useState } from 'react';

const DonationSchedule = () => {
  const [donationSchedule, setDonationSchedule] = useState([
    { id: 1, date: '2024-06-10', time: '09:00', location: 'Trung tâm Hiến máu', donor: 'Lê Văn C', bloodType: 'B+' },
    { id: 2, date: '2024-06-12', time: '14:00', location: 'Bệnh viện Đại học Y Dược', donor: 'Phạm Thị D', bloodType: 'AB-' }
  ]);

  const handleEdit = (id) => {
    console.log('Edit schedule with id:', id);
  };

  const handleDelete = (id) => {
    setDonationSchedule(donationSchedule.filter(schedule => schedule.id !== id));
  };

  return (
    <div className="space-y-6 ml-72 p-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Quản lý lịch hiến máu</h2>
        <div className="flex gap-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center gap-2">
            <span>🔍</span>
            Lọc
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 flex items-center gap-2">
            <span>📥</span>
            Xuất báo cáo
          </button>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 flex items-center gap-2">
            <span>➕</span>
            Thêm lịch mới
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-pink-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-pink-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giờ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Địa điểm</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Người hiến</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nhóm máu</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {donationSchedule.map((schedule) => (
                <tr key={schedule.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{schedule.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.donor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">
                      {schedule.bloodType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEdit(schedule.id)}
                        className="text-pink-600 hover:text-pink-900"
                      >
                        ✏️
                      </button>
                      <button 
                        onClick={() => handleDelete(schedule.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        🗑️
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

export default DonationSchedule;