import React from 'react';
import { Heart, User, LogOut, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-50 to-rose-50 shadow-lg border-b-2 border-pink-200 fixed top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-pink-600 p-2 rounded-xl shadow-md">
              <Heart className="h-8 w-8 text-white" fill="currentColor" />
            </div>
            <div>
              <span className="text-2xl font-bold text-pink-700">Blood Bank</span>
              <p className="text-xs text-pink-500 font-medium">Quản lý hiến máu</p>
            </div>
          </div>

          {/* User Dropdown */}
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
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-pink-50 hover:text-pink-600">
                      <Settings className="h-4 w-4 mr-2" />
                      Chỉnh sửa hồ sơ
                    </a>
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

export default Navbar;
