import React, { useState, useEffect, useMemo } from 'react';
import { message } from 'antd';
import { donationRequestService } from '../../../services/donationRequestService ';
import { userService } from '../../../services/manageUserService';

const DonationSchedule = () => {
  const [donationSchedules, setDonationSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterBloodType, setFilterBloodType] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const statuses = ['Scheduled', 'Completed'];

  useEffect(() => {
    const fetchApprovedRequests = async () => {
      try {
        setLoading(true);
        const requests = await donationRequestService.getApprovedDonationRequests();
        setDonationSchedules(requests);
      } catch (error) {
        console.error("Failed to load approved requests:", error);
        message.error("Failed to load donation schedules");
      } finally {
        setLoading(false);
      }
    };
    
    fetchApprovedRequests();
  }, []);

  const filteredSchedules = useMemo(() => {
    return donationSchedules.filter(schedule => {
      const matchesSearch = 
        schedule.requesterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        schedule.bloodType.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = filterStatus === 'All' || schedule.status === filterStatus;
      const matchesBloodType = filterBloodType === 'All' || schedule.bloodType === filterBloodType;

      return matchesSearch && matchesStatus && matchesBloodType;
    });
  }, [donationSchedules, searchTerm, filterStatus, filterBloodType]);

  console.log({filteredSchedules});
  

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN');
  };

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getComponentText = (type) => {
    const componentMap = {
      Whole: "Whole Blood",
      Plasma: "Plasma",
      Platelets: "Platelets"
    };
    return componentMap[type] || type;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleComplete = async (requestId) => {
  try {
    const confirmed = window.confirm("Are you sure you want to mark this donation as completed?");
    if (!confirmed) return;

    // 1. Mark the donation as completed
    const donationResponse = await donationRequestService.completeDonationRequest(requestId);
    
    // 2. Update inventory if needed
    if (donationResponse && donationResponse.data) {
      const { bloodType, amountBlood } = donationResponse.data;
      
      const bloodTypes = await userService.getBloodTypes();
      const bloodTypeInfo = bloodTypes.find(type => type.bloodType === bloodType);
      
      if (bloodTypeInfo) {
        await userService.addBloodStored({
          bloodTypeId: bloodTypeInfo.id,
          quantity: amountBlood
        });
      }
    }

    setDonationSchedules(prev => 
      prev.map(req => 
        req.requestId === requestId 
          ? { 
              ...req, 
              status: 'Completed',
              ...(donationResponse.data ? {
                bloodType: donationResponse.data.bloodType,
                amountBlood: donationResponse.data.amountBlood
              } : {})
            } 
          : req
      )
    );
    
    message.success("Donation completed successfully");
  } catch (error) {
    console.error("Failed to complete donation:", error);
    message.error(error.response?.data?.message || "Failed to complete donation");
  }
};


  const handleExport = () => {
    const csvContent = [
      ['ID', 'Donor', 'Date', 'Time', 'Blood Type', 'Component', 'Amount', 'Status'],
      ...filteredSchedules.map(schedule => [
        schedule.requestId,
        schedule.requesterName,
        formatDate(schedule.requestTime),
        formatTime(schedule.requestTime),
        schedule.bloodType,
        getComponentText(schedule.componentType),
        `${schedule.amountBlood} unit(s)`,
        schedule.status
      ])
    ].map(row => row.join(',')).join('\n');
    console.log({ csvContent });
    

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'donation_schedule.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return <div className="p-20 text-center">Loading donation schedules...</div>;
  }

  return (
    <div className="space-y-6 p-6 md:p-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Donation Schedule</h2>
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
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search by donor name or blood type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="text-sm text-gray-600">
              {filteredSchedules.length} of {donationSchedules.length} schedules
            </div>
          </div>

          {showFilters && (
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">ID</th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">Donor</th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">Date</th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">Time</th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">Blood Type</th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">Component</th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">Amount</th>
                <th className="px-4 py-3 text-left font-bold text-gray-600 uppercase">Status</th>
                <th className="px-4 py-3 text-center font-bold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSchedules.map((schedule) => (
                <tr key={schedule.requestId} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700">#{schedule.requestId.substring(0, 6)}</td>
                  <td className="px-4 py-3">{schedule.requesterName}</td>
                  <td className="px-4 py-3">{formatDate(schedule.requestTime)}</td>
                  <td className="px-4 py-3">{formatTime(schedule.requestTime)}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                      {schedule.bloodType}
                    </span>
                  </td>
                  <td className="px-4 py-3">{getComponentText(schedule.componentType)}</td>
                  <td className="px-4 py-3">{schedule.amountBlood} unit(s)</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(schedule.status)}`}>
                      {schedule.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {schedule.status === 'Scheduled' && (
                      <button
                        onClick={() => handleComplete(schedule.requestId)}
                        className="text-xs bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
                      >
                        Complete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {filteredSchedules.length === 0 && (
                <tr>
                  <td colSpan="9" className="px-6 py-4 text-center text-gray-500">
                    No schedules found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonationSchedule;