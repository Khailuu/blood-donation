import React, { useState } from 'react';
import { Heart, User, Camera, Save, Edit3, Mail, Phone, MapPin, Calendar, Shield, Award, Clock } from 'lucide-react';

const UpdateProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Nguyễn Thị Hotaru',
    employeeId: 'BB2024001',
    email: 'hotaru.nguyen@bloodbank.vn',
    phone: '0123456789',
    dateOfBirth: '1995-03-15',
    gender: 'Nữ',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    citizenId: '079095123456',
    
    position: 'Nhân viên',
    department: 'Phòng Thu Thập Máu',
    startDate: '2022-01-15',
    supervisor: 'Nguyễn Văn Manager',
    workSchedule: 'Ca sáng (7:00 - 15:00)',
    
    bloodType: 'O+',
    medicalCertificate: 'Có hiệu lực đến 2025-12-31',
    vaccinationStatus: 'Đầy đủ',
    healthCheckDate: '2024-06-01',
    
    emergencyContact: 'Nguyễn Văn An (Anh trai)',
    emergencyPhone: '0987654321',
    
    certifications: ['Chứng chỉ Thu thập máu', 'Sơ cứu cơ bản', 'An toàn lao động'],
    languages: ['Tiếng Việt', 'Tiếng Anh cơ bản'],
    
    totalDonorProcessed: 1250,
    workDays: 520,
    performanceRating: 4.8
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Đã lưu thông tin hồ sơ thành công!');
  };

  return (
    <div className="min-h-screen" >
      <div className="max-w-7xl mx-auto px-12 py-24">
        
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Hồ Sơ Nhân Viên</h2>
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors flex items-center space-x-2"
            >
              {isEditing ? <Save className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
              <span>{isEditing ? 'Lưu thay đổi' : 'Chỉnh sửa'}</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-gray-400" />
              </div>
              <button className="absolute -bottom-1 -right-1 bg-pink-500 p-1.5 rounded-full hover:bg-pink-600 transition-colors">
                <Camera className="h-3 w-3 text-white" />
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{profileData.fullName}</h3>
              <p className="text-gray-600">Mã NV: {profileData.employeeId}</p>
              <p className="text-gray-600">{profileData.position} - {profileData.department}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-600">Người hiến máu đã xử lý</h4>
              <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                <Heart className="h-4 w-4 text-pink-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{profileData.totalDonorProcessed.toLocaleString()}</p>
            <p className="text-sm text-green-600 mt-1">↑ 12% so với tháng trước</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-600">Ngày làm việc</h4>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="h-4 w-4 text-blue-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{profileData.workDays}</p>
            <p className="text-sm text-gray-500 mt-1">Tính đến hiện tại</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-600">Đánh giá hiệu suất</h4>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Award className="h-4 w-4 text-green-600" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{profileData.performanceRating}/5.0</p>
            <p className="text-sm text-green-600 mt-1">Xuất sắc</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-pink-600" />
              Thông tin cá nhân
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{profileData.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Giới tính</label>
                  {isEditing ? (
                    <select
                      value={profileData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                      <option value="Khác">Khác</option>
                    </select>
                  ) : (
                    <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{profileData.gender}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                ) : (
                  <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    {profileData.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                ) : (
                  <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    {profileData.phone}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ngày sinh</label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={profileData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      {new Date(profileData.dateOfBirth).toLocaleDateString('vi-VN')}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CCCD/CMND</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.citizenId}
                      onChange={(e) => handleInputChange('citizenId', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{profileData.citizenId}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
                {isEditing ? (
                  <textarea
                    value={profileData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                ) : (
                  <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm flex items-start">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-0.5 flex-shrink-0" />
                    {profileData.address}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-pink-600" />
              Thông tin công việc
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Chức vụ</label>
                  <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{profileData.position}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phòng ban</label>
                  <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{profileData.department}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ngày bắt đầu</label>
                <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{new Date(profileData.startDate).toLocaleDateString('vi-VN')}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Người quản lý</label>
                <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{profileData.supervisor}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ca làm việc</label>
                <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                  {profileData.workSchedule}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-pink-600" />
              Thông tin y tế
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nhóm máu</label>
                <div className="px-3 py-2 bg-red-50 border border-red-200 rounded-lg">
                  <span className="text-red-700 font-bold text-lg">{profileData.bloodType}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Giấy khám sức khỏe</label>
                <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{profileData.medicalCertificate}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tình trạng tiêm chủng</label>
                <div className="px-3 py-2 bg-green-50 border border-green-200 rounded-lg">
                  <span className="text-green-700 font-medium">{profileData.vaccinationStatus}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lần khám gần nhất</label>
                <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{new Date(profileData.healthCheckDate).toLocaleDateString('vi-VN')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2 text-pink-600" />
              Liên hệ khẩn cấp
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Người liên hệ</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.emergencyContact}
                    onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                ) : (
                  <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{profileData.emergencyContact}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profileData.emergencyPhone}
                    onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                ) : (
                  <div className="px-3 py-2 bg-red-50 border border-red-200 rounded-lg">
                    <span className="text-red-700 font-semibold">{profileData.emergencyPhone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-pink-600" />
            Chứng chỉ và Kỹ năng
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Chứng chỉ</label>
              <div className="flex flex-wrap gap-2">
                {profileData.certifications.map((cert, index) => (
                  <span key={index} className="bg-pink-100 text-pink-700 px-3 py-1.5 rounded-full text-sm font-medium border border-pink-200">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Ngôn ngữ</label>
              <div className="flex flex-wrap gap-2">
                {profileData.languages.map((lang, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-200">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;