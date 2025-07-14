import React, { useState, useEffect } from 'react';
import {
  User,
  Edit,
  Save,
  X,
  Heart,
  Users,
  Activity,
  Loader,
  ArrowLeft
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
            id: 5,
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

        setUsers([mappedUser, ...fakeUsers]);
      } catch (err) {
        setError(err.message);
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
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>

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

        {!showProfile ? (
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white border border-pink-200">
              <thead className="bg-pink-100 text-pink-800">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Phone</th>
                  <th className="py-3 px-4 text-left">Blood Type</th>
                  <th className="py-3 px-4 text-left">Role</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="border-t hover:bg-pink-50">
                      <td className="py-2 px-4">{user.name}</td>
                      <td className="py-2 px-4">{user.email}</td>
                      <td className="py-2 px-4">{user.phone}</td>
                      <td className="py-2 px-4">{user.bloodType}</td>
                      <td className="py-2 px-4">{user.role}</td>
                      <td className="py-2 px-4">
                        <span className={`px-2 py-1 rounded text-sm ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-2 px-4">
                        <button
                          onClick={() => handleViewDetails(user)}
                          className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded text-sm"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-4 px-4 text-gray-600 text-center">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
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
                  throw new Error(`Failed to update user: ${res.status} ${res.statusText}`);
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
            onClose={handleCloseProfile}
          />
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
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex justify-between items-center mb-4">
      <button
        onClick={onClose}
        className="text-pink-500 hover:underline flex items-center gap-1"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>
      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button onClick={onSave} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
              <Save className="w-4 h-4" /> Save
            </button>
            <button onClick={onEditToggle} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center gap-2">
              <X className="w-4 h-4" /> Cancel
            </button>
          </>
        ) : (
          <button onClick={onEditToggle} className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <Edit className="w-4 h-4" /> Edit
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
            className="text-center border border-gray-300 rounded px-2 py-1 w-full"
          />
        ) : (
          <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
        )}
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getBloodTypeColor(user.bloodType)}`}>
          Blood Type: {user.bloodType}
        </div>
      </div>
      <div className="rounded-lg p-5">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">👤 Personal Information</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="break-words">
            <strong>📧 Email:</strong>
            <p className="mt-1 text-sm">{user.email}</p>
          </div>
          <div className="break-words">
            <strong>📱 Phone:</strong>
            <p className="mt-1 text-sm">{user.phone}</p>
          </div>
          <div>
            <strong>🎂 Birthdate:</strong>
            <p className="mt-1 text-sm">{user.birthDate}</p>
          </div>
          <div>
            <strong>👤 Role:</strong>
            <p className="mt-1 text-sm">{user.role}</p>
          </div>
          <div>
            <strong>⚧️ Gender:</strong>
            <p className="mt-1 text-sm">{user.gender}</p>
          </div>
          <div className="break-words">
            <strong>🏠 Address:</strong>
            <p className="mt-1 text-sm">{user.address}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserManagement;
