import React, { useState } from 'react';
import { Check, Clock, AlertCircle, Users, Heart, Bell, X, MapPin, Phone, Calendar, User } from 'lucide-react';

const Notifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'urgent',
      title: 'Yêu cầu hiến máu khẩn cấp',
      message: 'Bệnh viện Chợ Rẫy cần nhóm máu O+ gấp cho ca phẫu thuật',
      time: '5 phút trước',
      isRead: false,
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      details: {
        hospital: 'Bệnh viện Chợ Rẫy',
        bloodType: 'O+',
        quantity: '3 đơn vị',
        urgency: 'Khẩn cấp',
        purpose: 'Ca phẫu thuật tim mạch',
        contactPerson: 'BS. Nguyễn Văn A',
        phone: '028-3855-4269',
        address: '201B Nguyễn Chí Thanh, Quận 5, TP.HCM',
        deadline: '18:00 hôm nay',
        patientInfo: 'Nam, 45 tuổi, tai nạn giao thông'
      }
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Nhắc nhở hiến máu',
      message: 'Bạn đã có thể hiến máu trở lại. Lần hiến cuối: 15/03/2024',
      time: '2 giờ trước',
      isRead: false,
      icon: <Clock className="w-5 h-5 text-orange-500" />,
      details: {
        lastDonation: '15/03/2024',
        nextEligible: '15/06/2024',
        donationCount: 9,
        bloodType: 'A+',
        eligibilityStatus: 'Đủ điều kiện',
        recommendedLocation: 'Trung tâm Huyết học TP.HCM',
        note: 'Bạn sắp đạt mốc 10 lần hiến máu!'
      }
    },
    {
      id: 3,
      type: 'success',
      title: 'Xét nghiệm hoàn tất',
      message: 'Kết quả xét nghiệm máu của bạn đã sẵn sàng. Tất cả chỉ số bình thường.',
      time: '1 ngày trước',
      isRead: true,
      icon: <Check className="w-5 h-5 text-green-500" />,
      details: {
        testDate: '05/06/2024',
        testType: 'Xét nghiệm máu toàn diện',
        results: {
          'Hồng cầu': '4.5 triệu/μL (Bình thường)',
          'Bạch cầu': '7,200/μL (Bình thường)', 
          'Tiểu cầu': '280,000/μL (Bình thường)',
          'Hemoglobin': '14.2 g/dL (Bình thường)',
          'HIV': 'Âm tính',
          'HBV': 'Âm tính',
          'HCV': 'Âm tính'
        },
        doctor: 'BS. Trần Thị B',
        conclusion: 'Kết quả tốt, đủ điều kiện hiến máu'
      }
    },
    {
      id: 4,
      type: 'info',
      title: 'Sự kiện hiến máu',
      message: 'Ngày hội hiến máu tại Đại học Bách Khoa - 20/07/2024',
      time: '2 ngày trước',
      isRead: true,
      icon: <Users className="w-5 h-5 text-blue-500" />,
      details: {
        eventName: 'Ngày hội hiến máu tình nguyện 2024',
        date: '20/07/2024',
        time: '8:00 - 16:00',
        location: 'Đại học Bách Khoa TP.HCM',
        address: '268 Lý Thường Kiệt, Quận 10, TP.HCM',
        organizer: 'Đoàn thanh niên ĐH Bách Khoa',
        expectedDonors: '500 người',
        benefits: ['Khám sức khỏe miễn phí', 'Xét nghiệm máu miễn phí', 'Quà tặng kỷ niệm'],
        registration: 'Đăng ký tại chỗ hoặc online'
      }
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Chúc mừng!',
      message: 'Bạn đã đạt mốc 10 lần hiến máu. Cảm ơn sự đóng góp của bạn!',
      time: '1 tuần trước',
      isRead: true,
      icon: <Heart className="w-5 h-5 text-pink-500" />
    },
    {
      id: 6,
      type: 'urgent',
      title: 'Cần máu khẩn cấp - AB-',
      message: 'Bệnh viện Nguyễn Tri Phương cần nhóm máu AB- cho bệnh nhân tai nạn',
      time: '3 giờ trước',
      isRead: false,
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      details: {
        hospital: 'Bệnh viện Nguyễn Tri Phương',
        bloodType: 'AB-',
        quantity: '2 đơn vị',
        urgency: 'Cực kỳ khẩn cấp',
        purpose: 'Cấp cứu tai nạn giao thông',
        contactPerson: 'BS. Lê Văn C',
        phone: '028-3950-7775',
        address: '415 Nguyễn Tri Phương, Quận 10, TP.HCM',
        deadline: '20:00 hôm nay',
        patientInfo: 'Nữ, 28 tuổi, mất máu nhiều'
      }
    },
    {
      id: 7,
      type: 'reminder',
      title: 'Lịch hẹn hiến máu',
      message: 'Nhắc nhở: Bạn có lịch hiến máu vào ngày 25/07/2024 tại Trung tâm Huyết học',
      time: '1 ngày trước',
      isRead: true,
      icon: <Clock className="w-5 h-5 text-orange-500" />
    },
    {
      id: 8,
      type: 'info',
      title: 'Cập nhật chính sách',
      message: 'Chính sách mới về hiến máu có hiệu lực từ tháng 8/2024',
      time: '3 ngày trước',
      isRead: true,
      icon: <Users className="w-5 h-5 text-blue-500" />
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({
        ...notification,
        isRead: true
      }))
    );
  };

  const markAsRead = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  // Lọc thông báo theo loại
  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === 'all') return true;
    return notification.type === activeFilter;
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Cấu hình cho các nút filter
  const filterButtons = [
    { key: 'all', label: 'Tất cả', style: 'bg-white hover:bg-gray-50 text-gray-700 border' },
    { key: 'urgent', label: 'Khẩn cấp', style: 'bg-red-50 hover:bg-red-100 text-red-700 border-red-200' },
    { key: 'reminder', label: 'Nhắc nhở', style: 'bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200' },
    { key: 'success', label: 'Thành công', style: 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200' },
    { key: 'info', label: 'Thông tin', style: 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-24 ml-72">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-pink-500" />
            <h1 className="text-2xl font-bold text-gray-800">Thông báo</h1>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          {unreadCount > 0 && (
            <button 
              onClick={markAllAsRead}
              className="text-pink-500 hover:text-pink-600 text-sm font-medium transition-colors"
            >
              Đánh dấu tất cả đã đọc
            </button>
          )}
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {filterButtons.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`${filter.style} px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                activeFilter === filter.key 
                  ? 'ring-2 ring-pink-200 shadow-md' 
                  : ''
              }`}
            >
              {filter.label}
              {filter.key !== 'all' && (
                <span className="ml-2 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full">
                  {notifications.filter(n => n.type === filter.key).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Hiển thị thông tin về filter hiện tại */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Hiển thị {filteredNotifications.length} thông báo
            {activeFilter !== 'all' && (
              <span className="ml-1">
                - {filterButtons.find(f => f.key === activeFilter)?.label}
              </span>
            )}
          </p>
        </div>

        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => !notification.isRead && markAsRead(notification.id)}
              className={`bg-white rounded-lg shadow-md p-4 border-l-4 cursor-pointer transition-all hover:shadow-lg ${
                notification.type === 'urgent' ? 'border-red-500' :
                notification.type === 'reminder' ? 'border-orange-500' :
                notification.type === 'success' ? 'border-green-500' :
                notification.type === 'info' ? 'border-blue-500' :
                'border-pink-500'
              } ${!notification.isRead ? 'bg-blue-50 ring-2 ring-blue-100' : ''}`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {notification.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-sm font-semibold ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.title}
                      {!notification.isRead && (
                        <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                          Mới
                        </span>
                      )}
                    </h3>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      {notification.time}
                    </span>
                  </div>
                  <p className={`text-sm mb-3 ${!notification.isRead ? 'text-gray-800' : 'text-gray-600'}`}>
                    {notification.message}
                  </p>
                  {notification.type === 'urgent' && (
                    <div className="flex gap-2">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                        Đăng ký ngay
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNotification(notification);
                        }}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium transition-colors"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  )}
                  {notification.type === 'reminder' && (
                    <div className="flex gap-2">
                      <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                        Đặt lịch
                      </button>
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium transition-colors">
                        Nhắc tôi sau
                      </button>
                    </div>
                  )}
                  {notification.type === 'info' && (
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNotification(notification);
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  )}
                  {notification.type === 'success' && (
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNotification(notification);
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  )}
                </div>
                {!notification.isRead && (
                  <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0 mt-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Hiển thị khi không có thông báo nào phù hợp với filter */}
        {filteredNotifications.length === 0 && (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              Không có thông báo {activeFilter !== 'all' && filterButtons.find(f => f.key === activeFilter)?.label.toLowerCase()}
            </h3>
            <p className="text-gray-400">
              {activeFilter === 'all' 
                ? 'Bạn sẽ nhận được thông báo về các yêu cầu hiến máu và cập nhật tại đây.'
                : 'Thử chọn loại thông báo khác hoặc quay lại xem tất cả.'
              }
            </p>
          </div>
        )}

        {/* Load More Button - chỉ hiển thị khi có thông báo */}
        {filteredNotifications.length > 0 && (
          <div className="mt-8 text-center">
            <button className="bg-white hover:bg-gray-50 text-pink-500 border border-pink-500 hover:border-pink-600 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              Xem thêm thông báo
            </button>
          </div>
        )}

        {/* Popup chi tiết thông báo */}
        {selectedNotification && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-xl">
                <h2 className="text-xl font-bold text-gray-800">Chi tiết thông báo</h2>
                <button 
                  onClick={() => setSelectedNotification(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 mt-1">
                    {selectedNotification.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {selectedNotification.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{selectedNotification.message}</p>
                    <p className="text-sm text-gray-500">{selectedNotification.time}</p>
                  </div>
                </div>

                {/* Thông tin chi tiết theo loại thông báo */}
                {selectedNotification.type === 'urgent' && selectedNotification.details && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 border-b pb-2">Thông tin yêu cầu</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Bệnh viện</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.hospital}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Nhóm máu</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.bloodType}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-orange-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Số lượng</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.quantity}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Thời hạn</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.deadline}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">Mục đích sử dụng</p>
                      <p className="text-sm text-gray-600">{selectedNotification.details.purpose}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">Thông tin bệnh nhân</p>
                      <p className="text-sm text-gray-600">{selectedNotification.details.patientInfo}</p>
                    </div>
                    <div className="border-t pt-4">
                      <h5 className="font-medium text-gray-700 mb-2">Thông tin liên hệ</h5>
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{selectedNotification.details.contactPerson}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{selectedNotification.details.phone}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span className="text-sm text-gray-600">{selectedNotification.details.address}</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedNotification.type === 'success' && selectedNotification.details && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 border-b pb-2">Kết quả xét nghiệm</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Ngày xét nghiệm</p>
                        <p className="text-sm text-gray-600">{selectedNotification.details.testDate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Loại xét nghiệm</p>
                        <p className="text-sm text-gray-600">{selectedNotification.details.testType}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-3">Kết quả chi tiết</p>
                      <div className="space-y-2">
                        {Object.entries(selectedNotification.details.results).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-gray-600">{key}:</span>
                            <span className="text-gray-800 font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Bác sĩ phụ trách: {selectedNotification.details.doctor}</span>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800">Kết luận</p>
                        <p className="text-sm text-blue-700">{selectedNotification.details.conclusion}</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedNotification.type === 'info' && selectedNotification.details && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 border-b pb-2">Thông tin sự kiện</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Ngày tổ chức</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Thời gian</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Địa điểm</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Dự kiến</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.expectedDonors}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">Quyền lợi tham gia</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {selectedNotification.details.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="w-3 h-3 text-green-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t pt-4">
                      <div className="text-sm text-gray-600">
                        <p><strong>Đơn vị tổ chức:</strong> {selectedNotification.details.organizer}</p>
                        <p><strong>Đăng ký:</strong> {selectedNotification.details.registration}</p>
                        <p><strong>Địa chỉ:</strong> {selectedNotification.details.address}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex gap-3 pt-4 border-t">
                  <button 
                    onClick={() => setSelectedNotification(null)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    Đóng
                  </button>
                  {selectedNotification.type === 'urgent' && (
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Đăng ký hiến máu
                    </button>
                  )}
                  {selectedNotification.type === 'info' && (
                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Đăng ký tham gia
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;