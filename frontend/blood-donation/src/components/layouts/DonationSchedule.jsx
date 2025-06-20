import React, { useState, useMemo } from 'react';

const DonationSchedule = () => {
  const [donationSchedule, setDonationSchedule] = useState([
    { id: 1, date: '2024-06-10', time: '09:00', location: 'Blood Donation Center', donor: 'Le Van C', bloodType: 'B+', status: 'Scheduled' },
    { id: 2, date: '2024-06-12', time: '14:00', location: 'University Medical Center Hospital', donor: 'Pham Thi D', bloodType: 'AB-', status: 'Completed' },
    { id: 3, date: '2024-06-15', time: '10:30', location: 'Community Health Center', donor: 'Nguyen Van A', bloodType: 'O+', status: 'Scheduled' },
    { id: 4, date: '2024-06-18', time: '16:00', location: 'Blood Donation Center', donor: 'Tran Thi B', bloodType: 'A-', status: 'Cancelled' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterBloodType, setFilterBloodType] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    donor: '',
    bloodType: 'A+',
    status: 'Scheduled'
  });

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const statuses = ['Scheduled', 'Completed', 'Cancelled'];

  const filteredSchedules = useMemo(() => {
    return donationSchedule.filter(schedule => {
      const matchesSearch = 
        schedule.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.bloodType.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = filterStatus === 'All' || schedule.status === filterStatus;
      const matchesBloodType = filterBloodType === 'All' || schedule.bloodType === filterBloodType;

      return matchesSearch && matchesStatus && matchesBloodType;
    });
  }, [donationSchedule, searchTerm, filterStatus, filterBloodType]);

  const handleAdd = () => {
    setEditingSchedule(null);
    setFormData({
      date: '',
      time: '',
      location: '',
      donor: '',
      bloodType: 'A+',
      status: 'Scheduled'
    });
    setShowModal(true);
  };

  const handleEdit = (schedule) => {
    setEditingSchedule(schedule);
    setFormData({
      date: schedule.date,
      time: schedule.time,
      location: schedule.location,
      donor: schedule.donor,
      bloodType: schedule.bloodType,
      status: schedule.status
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this schedule?')) {
      setDonationSchedule(donationSchedule.filter(schedule => schedule.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingSchedule) {
      setDonationSchedule(donationSchedule.map(schedule => 
        schedule.id === editingSchedule.id 
          ? { ...schedule, ...formData }
          : schedule
      ));
    } else {
      const newSchedule = {
        id: Math.max(...donationSchedule.map(s => s.id)) + 1,
        ...formData
      };
      setDonationSchedule([...donationSchedule, newSchedule]);
    }
    setShowModal(false);
    setEditingSchedule(null);
  };

  const handleExport = () => {
    const csvContent = [
      ['ID', 'Date', 'Time', 'Location', 'Donor', 'Blood Type', 'Status'],
      ...filteredSchedules.map(schedule => [
        schedule.id,
        schedule.date,
        schedule.time,
        schedule.location,
        schedule.donor,
        schedule.bloodType,
        schedule.status
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'donation_schedule.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 ml-72 p-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Donation Schedule Management</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Filter
          </button>
          <button 
            onClick={handleExport}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Export Report
          </button>
          <button 
            onClick={handleAdd}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700"
          >
            Add Schedule
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-pink-100 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search by donor name, location, or blood type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <div className="text-sm text-gray-600">
              {filteredSchedules.length} of {donationSchedule.length} schedules
            </div>
          </div>

          {showFilters && (
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                >
                  <option value="All">All Status</option>
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                <select
                  value={filterBloodType}
                  onChange={(e) => setFilterBloodType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                >
                  <option value="All">All Blood Types</option>
                  {bloodTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-pink-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-pink-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSchedules.map((schedule) => (
                <tr key={schedule.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{schedule.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex flex-col">
                      <span>{schedule.date}</span>
                      <span className="text-xs text-gray-500">{schedule.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{schedule.donor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">{schedule.bloodType}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(schedule.status)}`}>
                      {schedule.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEdit(schedule)}
                        className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-300"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(schedule.id)}
                        className="bg-red-200 text-red-800 px-3 py-1 rounded hover:bg-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredSchedules.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No schedules found matching your criteria.
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">
              {editingSchedule ? 'Edit Schedule' : 'Add New Schedule'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Donor Name</label>
                <input
                  type="text"
                  value={formData.donor}
                  onChange={(e) => setFormData({...formData, donor: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                <select
                  value={formData.bloodType}
                  onChange={(e) => setFormData({...formData, bloodType: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                >
                  {bloodTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
                >
                  {editingSchedule ? 'Update' : 'Add'} Schedule
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationSchedule;
