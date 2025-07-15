
import React, { useState, useEffect } from 'react';
import {
  User,
  Edit,
  Save,
  X,
  Heart,
  Users,
  Activity,
  Loader
} from 'lucide-react';
import { userService } from '../../../services/manageUserService';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfileData, setTempProfileData] = useState({});

  useEffect(() => {
  const fetchCurrentUser = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await userService.getCurrentUser();
      let userPayload = response?.data ?? response;

      if (!userPayload || typeof userPayload !== 'object') {
        throw new Error('Invalid user data received');
      }

      const mappedUser = {
        id: userPayload.id || userPayload.userId || Date.now(),
        name:
          userPayload.fullName ||
          userPayload.name ||
          userPayload.userName ||
          'Unknown User',
        email: userPayload.email || userPayload.emailAddress || 'No email',
        phone:
          userPayload.phone ||
          userPayload.phoneNumber ||
          userPayload.mobile ||
          'No phone',
        bloodType:
          userPayload.bloodTypeName || userPayload.bloodType || 'Unknown',
        birthDate:
          userPayload.dateOfBirth ||
          userPayload.birthDate ||
          'Not specified',
        address:
          userPayload.address || userPayload.fullAddress || 'No address',
        donationCount:
          userPayload.donorInformation?.donationCount ||
          userPayload.donationCount ||
          0,
        lastDonation:
          userPayload.lastDonationDate ||
          userPayload.lastDonation ||
          'N/A',
        status:
          userPayload.status === 1 || userPayload.status === 'active'
            ? 'active'
            : 'inactive',
        role: userPayload.role || userPayload.userRole || 'User',
        gender:
          userPayload.gender === 1
            ? 'Male'
            : userPayload.gender === 2
            ? 'Female'
            : 'Not specified',
        isDonor:
          userPayload.isDonor || userPayload.is_donor || false
      };

      const fakeUsers = [
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
        },
        {
          id: 4,
          name: 'Le Quang Huy',
          email: 'huy.le@example.com',
          phone: '0934567890',
          bloodType: 'B+',
          birthDate: '1993-02-08',
          address: 'Thu Duc City, HCMC',
          donationCount: 5,
          lastDonation: '2025-07-05',
          status: 'inactive',
          role: 'Moderator',
          gender: 'Male',
          isDonor: true
        },
        {
          id: 5,
          name: 'Pham Thanh Nhan',
          email: 'nhan.pham@example.com',
          phone: '0967890123',
          bloodType: 'AB-',
          birthDate: '1997-12-30',
          address: 'District 7, Ho Chi Minh City',
          donationCount: 2,
          lastDonation: '2025-03-22',
          status: 'active',
          role: 'User',
          gender: 'Male',
          isDonor: false
        },
        {
          id: 6,
          name: 'Doan Thi Linh',
          email: 'linh.doan@example.com',
          phone: '0976543210',
          bloodType: 'O+',
          birthDate: '1992-08-15',
          address: 'Binh Thanh District, HCMC',
          donationCount: 7,
          lastDonation: '2025-06-01',
          status: 'active',
          role: 'User',
          gender: 'Female',
          isDonor: true
        }
      ];

      setUsers([mappedUser, ...fakeUsers]);
    } catch (err) {
      console.error(err);
      if (err.message.includes('fetch')) {
        setError('Network error - please check your connection');
      } else if (
        err.message.includes('401') ||
        err.message.includes('unauthorized')
      ) {
        setError('Authentication required - please log in again');
      } else if (err.message.includes('404')) {
        setError('User not found');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  fetchCurrentUser();
}, []);


  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setTempProfileData(user);
    setShowProfile(true);
    setIsEditing(false);
    setError(null);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
    setSelectedUser(null);
    setIsEditing(false);
    setError(null);
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          User Dashboard
        </h1>

        <div className="relative mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="🔍 Search users by name..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <User className="w-5 h-5" />
          </span>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="bg-white border border-pink-100 rounded-lg p-4 shadow hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <User className="text-pink-500 w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleViewDetails(user)}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md mt-2"
                  >
                    View Details
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No users found.</p>
            )}
          </div>


        {showProfile && selectedUser && (
          <div className="mt-8">
            <button
              onClick={handleCloseProfile}
              className="text-pink-500 hover:underline mb-4"
            >
              &larr; Back to list
            </button>
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
                  const res = await fetch(
                    `https://blood-donation-sys.up.railway.app/api/user/update/${selectedUser.id}`,
                    {
                      method: 'PUT',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(tempProfileData)
                    }
                  );
                  if (!res.ok) {
                    throw new Error(
                      `Failed to update user: ${res.status} ${res.statusText}`
                    );
                  }
                  setSelectedUser(tempProfileData);
                  setUsers([tempProfileData]);
                  setIsEditing(false);
                } catch (err) {
                  console.error(err);
                  setError(`Failed to save changes: ${err.message}`);
                }
              }}
              onInputChange={(field, val) =>
                setTempProfileData((prev) => ({ ...prev, [field]: val }))
              }
              getBloodTypeColor={(bt) => {
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
                return colors[bt] || 'bg-gray-100 text-gray-800';
              }}
            />
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
  getBloodTypeColor
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-gray-800">Profile Details</h2>
      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={onSave}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save
            </button>
            <button
              onClick={onEditToggle}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <X className="w-4 h-4" /> Cancel
            </button>
          </>
        ) : (
          <button
            onClick={onEditToggle}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Edit className="w-4 h-4" /> Edit
          </button>
        )}
      </div>
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      {/* Avatar & Name */}
      <div className="text-center">
        <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-12 h-12 text-pink-500" />
        </div>
        {isEditing ? (
          <input
            type="text"
            value={tempData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            className="text-center border border-gray-300 rounded px-2 py-1 w-full"
          />
        ) : (
          <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
        )}
        <div
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            getBloodTypeColor(user.bloodType)
          }`}
        >
          Blood Type: {user.bloodType}
        </div>
      </div>

      {/* Personal Info */}
      <div className="lg:col-span-2">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          Personal Information
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={tempData.email}
                onChange={(e) =>
                  onInputChange('email', e.target.value)
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            ) : (
              <p className="text-gray-800">{user.email}</p>
            )}
          </div>
          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone</label>
            {isEditing ? (
              <input
                type="tel"
                value={tempData.phone}
                onChange={(e) =>
                  onInputChange('phone', e.target.value)
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            ) : (
              <p className="text-gray-800">{user.phone}</p>
            )}
          </div>
          {/* DOB */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Date of Birth
            </label>
            <p className="text-gray-800">{user.birthDate}</p>
          </div>
          {/* Role */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Role</label>
            <p className="text-gray-800">{user.role}</p>
          </div>
          {/* Gender */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Gender
            </label>
            <p className="text-gray-800">{user.gender}</p>
          </div>
          {/* Donor */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Donor
            </label>
            <p className="text-gray-800">
              {user.isDonor ? 'Yes' : 'No'}
            </p>
          </div>
          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">
              Address
            </label>
            <p className="text-gray-800">{user.address}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Stats & Achievements */}
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      <div className="bg-gray-50 rounded-lg p-4">
        <h5 className="text-lg font-semibold text-gray-800 mb-3">
          Donation Statistics
        </h5>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Total Donations:</span>
            <span className="font-bold text-pink-500">
              {user.donationCount}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Last Donation:</span>
            <span className="text-gray-800">
              {user.lastDonation}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <span
              className={`px-2 py-1 rounded text-sm ${
                user.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {user.status === 'active'
                ? 'Ready to Donate'
                : 'Inactive'}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h5 className="text-lg font-semibold text-gray-800 mb-3">
          Achievements
        </h5>
        <div className="space-y-4">
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
            <span className="text-gray-700">
              Saved {user.donationCount * 3} lives
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Activity className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-gray-700">Regular donor</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserManagement;
