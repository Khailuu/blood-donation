import React, { useState } from 'react';
import { User, Edit, Save, X, Heart, Users, Activity, ArrowLeft, Search, Filter } from 'lucide-react';

const UserManagement = () => {
  const [currentView, setCurrentView] = useState('list');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBloodType, setFilterBloodType] = useState('');

  const [users] = useState([
    {
      id: 1,
      name: 'Nguyen Van Hoang',
      email: 'hotaru@bloodbank.vn',
      phone: '0123 456 789',
      bloodType: 'O+',
      birthDate: '15/03/1990',
      address: 'District 1, Ho Chi Minh City',
      donationCount: 12,
      lastDonation: '2024-05-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Tran Thi Minh',
      email: 'minh.tran@bloodbank.vn',
      phone: '0987 654 321',
      bloodType: 'A+',
      birthDate: '22/08/1985',
      address: 'District 3, Ho Chi Minh City',
      donationCount: 8,
      lastDonation: '2024-04-20',
      status: 'active'
    },
    {
      id: 3,
      name: 'Le Van Dung',
      email: 'dung.le@bloodbank.vn',
      phone: '0369 258 147',
      bloodType: 'B+',
      birthDate: '10/12/1992',
      address: 'District 7, Ho Chi Minh City',
      donationCount: 15,
      lastDonation: '2024-06-01',
      status: 'active'
    },
    {
      id: 4,
      name: 'Pham Thi Lan',
      email: 'lan.pham@bloodbank.vn',
      phone: '0456 789 123',
      bloodType: 'AB+',
      birthDate: '05/07/1988',
      address: 'District 2, Ho Chi Minh City',
      donationCount: 6,
      lastDonation: '2024-03-15',
      status: 'inactive'
    },
    {
      id: 5,
      name: 'Hoang Van Nam',
      email: 'nam.hoang@bloodbank.vn',
      phone: '0741 852 963',
      bloodType: 'O-',
      birthDate: '18/11/1991',
      address: 'District 5, Ho Chi Minh City',
      donationCount: 20,
      lastDonation: '2024-05-28',
      status: 'active'
    }
  ]);

  const [tempProfileData, setTempProfileData] = useState({});

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBloodType = filterBloodType === '' || user.bloodType === filterBloodType;
    return matchesSearch && matchesBloodType;
  });

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setTempProfileData(user);
    setCurrentView('profile');
    setIsEditing(false);
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedUser(null);
    setIsEditing(false);
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setTempProfileData(selectedUser);
    }
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setSelectedUser(tempProfileData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setTempProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getBloodTypeColor = (bloodType) => {
    const colors = {
      'O+': 'bg-green-100 text-green-800',
      'O-': 'bg-green-200 text-green-900',
      'A+': 'bg-blue-100 text-blue-800',
      'A-': 'bg-blue-200 text-blue-900',
      'B+': 'bg-purple-100 text-purple-800',
      'B-': 'bg-purple-200 text-purple-900',
      'AB+': 'bg-red-100 text-red-800',
      'AB-': 'bg-red-200 text-red-900'
    };
    return colors[bloodType] || 'bg-gray-100 text-gray-800';
  };

  if (currentView === 'profile' && selectedUser) {
    return (
      <ProfileView
        user={selectedUser}
        tempData={tempProfileData}
        isEditing={isEditing}
        onBack={handleBackToList}
        onEditToggle={handleEditToggle}
        onSave={handleSave}
        onInputChange={handleInputChange}
        getBloodTypeColor={getBloodTypeColor}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-20 ml-72">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">User Profile Management</h1>
          <div className="text-sm text-gray-600">
            Total: {filteredUsers.length} users
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name or email..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                value={filterBloodType}
                onChange={(e) => setFilterBloodType(e.target.value)}
              >
                <option value="">All Blood Types</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div key={user.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-pink-500" />
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getBloodTypeColor(user.bloodType)}`}>
                    {user.bloodType}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-1">{user.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{user.email}</p>
                <p className="text-sm text-gray-600 mb-4">{user.phone}</p>

                <div className="flex justify-between items-center mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-pink-500">{user.donationCount}</div>
                    <div className="text-xs text-gray-600">Donations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-800">{user.lastDonation}</div>
                    <div className="text-xs text-gray-600">Last Donation</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                  <button
                    onClick={() => handleViewProfile(user)}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">
              <Users className="w-12 h-12 mx-auto mb-4" />
            </div>
            <p className="text-gray-600">No users found matching the filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileView = ({ user, tempData, isEditing, onBack, onEditToggle, onSave, onInputChange, getBloodTypeColor }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-20 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
          </div>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={onSave}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Save
                </button>
                <button
                  onClick={onEditToggle}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={onEditToggle}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Edit className="w-4 h-4" />
                Edit
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Avatar and Basic Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-pink-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {isEditing ? (
                  <input
                    type="text"
                    value={tempData.name}
                    onChange={(e) => onInputChange('name', e.target.value)}
                    className="text-center border border-gray-300 rounded px-2 py-1 w-full"
                  />
                ) : (
                  user.name
                )}
              </h2>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getBloodTypeColor(user.bloodType)}`}>
                Blood Type: {user.bloodType}
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={tempData.email}
                    onChange={(e) => onInputChange('email', e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                ) : (
                  <p className="text-gray-800">{user.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={tempData.phone}
                    onChange={(e) => onInputChange('phone', e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                ) : (
                  <p className="text-gray-800">{user.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Date of Birth</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempData.birthDate}
                    onChange={(e) => onInputChange('birthDate', e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                ) : (
                  <p className="text-gray-800">{user.birthDate}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Blood Type</label>
                {isEditing ? (
                  <select
                    value={tempData.bloodType}
                    onChange={(e) => onInputChange('bloodType', e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                ) : (
                  <p className="text-gray-800">{user.bloodType}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempData.address}
                    onChange={(e) => onInputChange('address', e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                ) : (
                  <p className="text-gray-800">{user.address}</p>
                )}
              </div>
            </div>
          </div>

          {/* Donation Statistics */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Donation Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Donations:</span>
                  <span className="text-2xl font-bold text-pink-500">{user.donationCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Donation:</span>
                  <span className="text-gray-800">{user.lastDonation}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status:</span>
                  <span className={`px-2 py-1 rounded text-sm ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status === 'active' ? 'Ready to Donate' : 'Inactive'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-yellow-600" />
                  </div>
                  <span className="text-gray-700">Active Blood Donor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="text-gray-700">Saved {user.donationCount * 3} lives</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">5 years of donating blood</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;