import React, { useState, useEffect } from 'react';
import { userService } from '../../../services/manageUserService';
import {
  User,
  Edit,
  Save,
  X,
  Heart,
  Users,
  Activity,
  Loader,
  ArrowLeft,
  Eye,
  Trash,
  RefreshCw,
  Filter,
  Download
} from 'lucide-react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfileData, setTempProfileData] = useState({});
  
  const [bloodTypeFilter, setBloodTypeFilter] = useState('');
  const [componentTypeFilter, setComponentTypeFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await userService.getAllUser();
        let usersData = response || [];

        if (!Array.isArray(usersData)) {
          if (usersData && typeof usersData === 'object') {
            usersData = Object.values(usersData);
          } else {
            throw new Error('Invalid users data received - expected an array');
          }
        }

        const mappedUsers = usersData.map((userPayload) => {
          if (!userPayload || typeof userPayload !== 'object') {
            return null;
          }

          return {
            id: userPayload.id || userPayload.userId || Date.now() + Math.random(),
            name: userPayload.fullName || userPayload.name || userPayload.userName || 'Unknown User',
            email: userPayload.email || userPayload.emailAddress || 'No email',
            phone: userPayload.phone || userPayload.phoneNumber || userPayload.mobile || 'No phone',
            bloodType: userPayload.bloodTypeName || userPayload.bloodType || 'Unknown',
            birthDate: userPayload.dateOfBirth || userPayload.birthDate || 'Not specified',
            address: userPayload.address || userPayload.fullAddress || 'No address',
            donationCount: userPayload.donorInformation?.donationCount || userPayload.donationCount || 0,
            lastDonation: userPayload.lastDonationDate || userPayload.lastDonation || 'N/A',
            status: userPayload.status === 1 || userPayload.status === 'active' ? 'active' : 'inactive',
            role: userPayload.role || userPayload.userRole || 'User',
            gender: userPayload.gender === 1 ? 'Male' : userPayload.gender === 2 ? 'Female' : 'Not specified',
            isDonor: userPayload.isDonor || userPayload.is_donor || false
          };
        }).filter(user => user !== null);

        if (mappedUsers.length === 0) {
          const fakeUsers = [
            {
              id: 1,
              name: 'John Doe',
              email: 'john.doe@example.com',
              phone: '0123456789',
              bloodType: 'O+',
              birthDate: '1992-03-15',
              address: 'District 1, Ho Chi Minh City',
              donationCount: 5,
              lastDonation: '2025-05-15',
              status: 'active',
              role: 'User',
              gender: 'Male',
              isDonor: true
            },
            {
              id: 2,
              name: 'Nguyen Van Minh',
              email: 'minh.nguyen@example.com',
              phone: '0901234567',
              bloodType: 'A+',
              birthDate: '1990-05-12',
              address: 'District 1, Ho Chi Minh City',
              donationCount: 12,
              lastDonation: '2025-06-10',
              status: 'active',
              role: 'Admin',
              gender: 'Male',
              isDonor: true
            },
            {
              id: 3,
              name: 'Tran Thi Mai',
              email: 'mai.tran@example.com',
              phone: '0912345678',
              bloodType: 'O-',
              birthDate: '1985-11-20',
              address: 'District 3, Ho Chi Minh City',
              donationCount: 9,
              lastDonation: '2025-04-28',
              status: 'active',
              role: 'User',
              gender: 'Female',
              isDonor: true
            }
          ];
          setUsers(fakeUsers);
        } else {
          setUsers(mappedUsers);
        }
      } catch (err) {
        console.error('Error fetching users:', err);
        setError(err.message);
        
        const fakeUsers = [
          {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '0123456789',
            bloodType: 'O+',
            birthDate: '1992-03-15',
            address: 'District 1, Ho Chi Minh City',
            donationCount: 5,
            lastDonation: '2025-05-15',
            status: 'active',
            role: 'User',
            gender: 'Male',
            isDonor: true
          },
          {
            id: 2,
            name: 'Nguyen Van Minh',
            email: 'minh.nguyen@example.com',
            phone: '0901234567',
            bloodType: 'A+',
            birthDate: '1990-05-12',
            address: 'District 1, Ho Chi Minh City',
            donationCount: 12,
            lastDonation: '2025-06-10',
            status: 'active',
            role: 'Admin',
            gender: 'Male',
            isDonor: true
          },
          {
            id: 3,
            name: 'Tran Thi Mai',
            email: 'mai.tran@example.com',
            phone: '0912345678',
            bloodType: 'O-',
            birthDate: '1985-11-20',
            address: 'District 3, Ho Chi Minh City',
            donationCount: 9,
            lastDonation: '2025-04-28',
            status: 'active',
            role: 'User',
            gender: 'Female',
            isDonor: true
          }
        ];
        setUsers(fakeUsers);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesBloodType = !bloodTypeFilter || user.bloodType === bloodTypeFilter;
    const matchesComponentType = !componentTypeFilter || user.role === componentTypeFilter;
    
    let matchesDateRange = true;
    if (startDate || endDate) {
      const donationDate = user.lastDonation === 'N/A' ? null : new Date(user.lastDonation);
      if (donationDate) {
        matchesDateRange = (!startDate || donationDate >= new Date(startDate)) &&
                          (!endDate || donationDate <= new Date(endDate));
      } else {
        matchesDateRange = false;
      }
    }
    
    return matchesBloodType && matchesComponentType && matchesDateRange;
  });

  const totalPages = Math.ceil(filteredUsers.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredUsers.length);
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const resetAllFilters = () => {
    setBloodTypeFilter('');
    setComponentTypeFilter('');
    setStartDate('');
    setEndDate('');
    setCurrentPage(1);
  };

  const handleExportCSV = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Blood Type', 'Role', 'Status', 'Last Donation'].join(','),
      ...filteredUsers.map(u =>
        [u.name, u.email, u.phone, u.bloodType, u.role, u.status, u.lastDonation].join(',')
      )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'users_filtered.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        setUsers(prev => prev.filter(u => u.id !== userId));
      } catch (err) {
        setError(`Error deleting user: ${err.message}`);
      }
    }
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setTempProfileData(user);
    setIsEditing(false);
    setError(null);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedUser(null);
    setIsEditing(false);
    setError(null);
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
      'AB-': 'bg-red-200 text-red-900',
      'Unknown': 'bg-gray-100 text-gray-800'
    };
    return colors[bloodType] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader className="w-8 h-8 animate-spin text-pink-500" />
        <span className="ml-2 text-gray-600">Loading users...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p><strong>Error:</strong> {error}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
          <div className="flex gap-3">
            <button 
              onClick={() => window.location.reload()} 
              className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button 
              onClick={resetAllFilters} 
              className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Reset Filters
            </button>
            <button 
              onClick={handleExportCSV} 
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blood Type
              </label>
              <select
                value={bloodTypeFilter}
                onChange={(e) => {
                  setBloodTypeFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white"
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
                <option value="Unknown">Unknown</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Component Type
              </label>
              <select
                value={componentTypeFilter}
                onChange={(e) => {
                  setComponentTypeFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent bg-white"
              >
                <option value="">All Types</option>
                <option value="Member">Member</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  placeholder="Start date"
                />
                <span className="text-gray-500 font-medium">—</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  placeholder="End date"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
            <span>Showing {filteredUsers.length} of {users.length} users</span>
            {(bloodTypeFilter || componentTypeFilter || startDate || endDate) && (
              <div className="flex items-center gap-2">
                <span>Filters applied:</span>
                {bloodTypeFilter && (
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">
                    Blood: {bloodTypeFilter}
                  </span>
                )}
                {componentTypeFilter && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    Type: {componentTypeFilter}
                  </span>
                )}
                {(startDate || endDate) && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    Date: {startDate || '...'} to {endDate || '...'}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white border border-pink-200">
            <thead className="bg-pink-100 text-pink-800">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">Name</th>
                <th className="py-3 px-4 text-left font-semibold">Email</th>
                <th className="py-3 px-4 text-left font-semibold">Phone</th>
                <th className="py-3 px-4 text-left font-semibold">Blood Type</th>
                <th className="py-3 px-4 text-left font-semibold">Role</th>
                <th className="py-3 px-4 text-left font-semibold">Last Donation</th>
                <th className="py-3 px-4 text-left font-semibold">Status</th>
                <th className="py-3 px-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user) => (
                  <tr key={user.id} className="border-t hover:bg-pink-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-gray-900">{user.name}</td>
                    <td className="py-3 px-4 text-gray-700">{user.email}</td>
                    <td className="py-3 px-4 text-gray-700">{user.phone}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBloodTypeColor(user.bloodType)}`}>
                        {user.bloodType}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-700">{user.role}</td>
                    <td className="py-3 px-4 text-gray-700">{user.lastDonation}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleViewDetails(user)}
                          className="p-2 hover:bg-pink-100 rounded-lg transition-colors group"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4 text-pink-500 group-hover:text-pink-700" />
                        </button>
                        <button 
                          onClick={() => handleDeleteUser(user.id)}
                          className="p-2 hover:bg-red-100 rounded-lg transition-colors group"
                          title="Delete User"
                        >
                          <Trash className="w-4 h-4 text-red-500 group-hover:text-red-700" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="py-8 px-4 text-gray-500 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Users className="w-12 h-12 text-gray-300" />
                      <p className="text-lg">No users found</p>
                      <p className="text-sm">Try adjusting your filters or search criteria</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {filteredUsers.length > 0 && (
          <div className="flex justify-center items-center mt-6 gap-4">
            <span className="text-sm text-gray-600">
              {startIndex + 1}-{endIndex} of {filteredUsers.length} users
            </span>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {Array.from({ length: Math.min(totalPages, 20) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-lg transition-colors ${
                      currentPage === pageNum 
                        ? 'bg-red-600 text-white' 
                        : 'border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <select 
              value={pageSize} 
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
            >
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
              <option value={50}>50 / page</option>
            </select>
          </div>
        )}

        {/* User Details Popup */}
        {showPopup && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl">
              <ProfileView
                user={selectedUser}
                tempData={tempProfileData}
                isEditing={isEditing}
                onEditToggle={() => {
                  if (isEditing) setTempProfileData(selectedUser);
                  setIsEditing(!isEditing);
                }}
                onSave={async () => {
                  try {
                    if (!selectedUser?.id) {
                      throw new Error('Cannot save - user ID is missing');
                    }
                    setSelectedUser(tempProfileData);
                    setUsers(prev => prev.map(u => u.id === tempProfileData.id ? tempProfileData : u));
                    setIsEditing(false);
                  } catch (err) {
                    setError(`Failed to save changes: ${err.message}`);
                  }
                }}
                onInputChange={(field, val) =>
                  setTempProfileData((prev) => ({ ...prev, [field]: val }))
                }
                getBloodTypeColor={getBloodTypeColor}
                onClose={handleClosePopup}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileView = ({
  user,
  tempData,
  isEditing,
  onEditToggle,
  onSave,
  onInputChange,
  getBloodTypeColor,
  onClose
}) => (
  <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <button
        onClick={onClose}
        className="text-pink-500 hover:text-pink-700 flex items-center gap-2 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Users
      </button>
      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button 
              onClick={onSave} 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Save className="w-4 h-4" /> Save Changes
            </button>
            <button 
              onClick={onEditToggle} 
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <X className="w-4 h-4" /> Cancel
            </button>
          </>
        ) : (
          <button 
            onClick={onEditToggle} 
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Edit className="w-4 h-4" /> Edit Profile
          </button>
        )}
      </div>
    </div>
    
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-12 h-12 text-pink-500" />
        </div>
        {isEditing ? (
          <input
            type="text"
            value={tempData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            className="text-center border border-gray-300 rounded-lg px-3 py-2 w-full mb-2 font-semibold"
          />
        ) : (
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h3>
        )}
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getBloodTypeColor(user.bloodType)}`}>
          Blood Type: {user.bloodType}
        </div>
      </div>
      
      <div className="lg:col-span-2">
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <User className="w-5 h-5" />
            Personal Information
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">📧 Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  value={tempData.email}
                  onChange={(e) => onInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              ) : (
                <p className="text-gray-800 bg-white px-3 py-2 rounded border">{user.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">📱 Phone:</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={tempData.phone}
                  onChange={(e) => onInputChange('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              ) : (
                <p className="text-gray-800 bg-white px-3 py-2 rounded border">{user.phone}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">🎂 Birthdate:</label>
              {isEditing ? (
                <input
                  type="date"
                  value={tempData.birthDate}
                  onChange={(e) => onInputChange('birthDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              ) : (
                <p className="text-gray-800 bg-white px-3 py-2 rounded border">{user.birthDate}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">👤 Role:</label>
              {isEditing ? (
                <select
                  value={tempData.role}
                  onChange={(e) => onInputChange('role', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="Staff">Staff</option>
                </select>
              ) : (
                <p className="text-gray-800 bg-white px-3 py-2 rounded border">{user.role}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">⚧️ Gender:</label>
              {isEditing ? (
                <select
                  value={tempData.gender}
                  onChange={(e) => onInputChange('gender', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Not specified">Not specified</option>
                </select>
              ) : (
                <p className="text-gray-800">{user.gender}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">🏠 Address:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={tempData.address}
                  onChange={(e) => onInputChange('address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              ) : (
                <p className="text-gray-800">{user.address}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserManagement;