
import React, { useState } from 'react';
import { Heart, User, LogOut, Settings, Camera, Save, Edit3, Mail, Phone, MapPin, Calendar, Shield, Award, Clock, ArrowLeft } from 'lucide-react';

// Navbar Component

const Navbar = ({ onProfileClick }) => {
  return (
    <nav className="bg-gradient-to-r from-pink-50 to-rose-50 shadow-lg border-b-2 border-pink-200 fixed top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-pink-600 p-2 rounded-xl shadow-md">
              <Heart className="h-8 w-8 text-white" fill="currentColor" />
            </div>
            <div>
              <span className="text-2xl font-bold text-pink-700">Blood Bank</span>
              <p className="text-xs text-pink-500 font-medium">Quản lý hiến máu</p>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="relative group">
              <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm border border-pink-100 cursor-pointer">
                <div className="bg-gradient-to-br from-pink-400 to-rose-500 p-2 rounded-full">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">Hotaru</span>
                  <span className="text-xs text-pink-600">Nhân viên</span>
                </div>
              </div>

              <div className="absolute mt-2 w-44 bg-white rounded-lg shadow-lg border border-pink-100 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 origin-top-right z-30 invisible group-hover:visible">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <button 
                      onClick={onProfileClick}
                      className="flex items-center w-full px-4 py-2 hover:bg-pink-50 hover:text-pink-600"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Chỉnh sửa hồ sơ
                    </button>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-pink-50 hover:text-pink-600">
                      <LogOut className="h-4 w-4 mr-2" />
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500"></div>
    </nav>
  );
};

const ProfilePage = ({ onBackClick }) => {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <button 
              onClick={onBackClick}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8" fill="currentColor" />
              <h1 className="text-2xl font-bold">Hồ Sơ Nhân Viên</h1>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12" />
                </div>
                <button className="absolute -bottom-1 -right-1 bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div>
                <h2 className="text-xl font-semibold">{profileData.fullName}</h2>
                <p className="opacity-90">Mã NV: {profileData.employeeId}</p>
                <p className="opacity-90">{profileData.position} - {profileData.department}</p>
              </div>
            </div>
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-pink-50 transition-colors flex items-center space-x-2"
            >
              {isEditing ? <Save className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
              <span>{isEditing ? 'Lưu thay đổi' : 'Chỉnh sửa'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <User className="h-5 w-5 mr-2 text-pink-600" />
            Thông tin cá nhân
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <p className="px-3 py-2 bg-gray-50 rounded-lg">{profileData.fullName}</p>
              )}
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
                <p className="px-3 py-2 bg-gray-50 rounded-lg flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
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
                <p className="px-3 py-2 bg-gray-50 rounded-lg flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  {profileData.phone}
                </p>
              )}
            </div>
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
                <p className="px-3 py-2 bg-gray-50 rounded-lg flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  {new Date(profileData.dateOfBirth).toLocaleDateString('vi-VN')}
                </p>
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
                <p className="px-3 py-2 bg-gray-50 rounded-lg">{profileData.gender}</p>
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
                <p className="px-3 py-2 bg-gray-50 rounded-lg">{profileData.citizenId}</p>
              )}
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
              {isEditing ? (
                <textarea
                  value={profileData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              ) : (
                <p className="px-3 py-2 bg-gray-50 rounded-lg flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  {profileData.address}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-pink-600" />
            Thông tin công việc
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Chức vụ</label>
              <p className="px-3 py-2 bg-gray-50 rounded-lg">{profileData.position}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phòng ban</label>
              <p className="px-3 py-2 bg-gray-50 rounded-lg">{profileData.department}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ngày bắt đầu</label>
              <p className="px-3 py-2 bg-gray-50 rounded-lg">{new Date(profileData.startDate).toLocaleDateString('vi-VN')}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Người quản lý</label>
              <p className="px-3 py-2 bg-gray-50 rounded-lg">{profileData.supervisor}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ca làm việc</label>
              <p className="px-3 py-2 bg-gray-50 rounded-lg flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gray-500" />
                {profileData.workSchedule}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Thông tin y tế */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-pink-600" />
              Thông tin y tế
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nhóm máu</label>
                <p className="px-3 py-2 bg-red-50 text-red-700 rounded-lg font-semibold">{profileData.bloodType}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Giấy khám sức khỏe</label>
                <p className="px-3 py-2 bg-gray-50 rounded-lg text-sm">{profileData.medicalCertificate}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tình trạng tiêm chủng</label>
                <p className="px-3 py-2 bg-green-50 text-green-700 rounded-lg">{profileData.vaccinationStatus}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Lần khám gần nhất</label>
                <p className="px-3 py-2 bg-gray-50 rounded-lg">{new Date(profileData.healthCheckDate).toLocaleDateString('vi-VN')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
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
                  <p className="px-3 py-2 bg-gray-50 rounded-lg">{profileData.emergencyContact}</p>
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
                  <p className="px-3 py-2 bg-gray-50 rounded-lg font-semibold text-red-600">{profileData.emergencyPhone}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-pink-600" />
            Chứng chỉ và Kỹ năng
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Chứng chỉ</label>
              <div className="flex flex-wrap gap-2">
                {profileData.certifications.map((cert, index) => (
                  <span key={index} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ngôn ngữ</label>
              <div className="flex flex-wrap gap-2">
                {profileData.languages.map((lang, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-pink-600" />
            Thống kê hiệu suất
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg">
              <div className="text-2xl font-bold text-pink-600">{profileData.totalDonorProcessed.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Người hiến máu đã xử lý</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{profileData.workDays}</div>
              <div className="text-sm text-gray-600">Ngày làm việc</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{profileData.performanceRating}/5.0</div>
              <div className="text-sm text-gray-600">Đánh giá hiệu suất</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
