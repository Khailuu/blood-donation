import React, { useState, useMemo } from 'react';

const DonationRequestsManager = () => {
  const [donationRequests, setDonationRequests] = useState([
    { 
      id: 1, 
      patientName: 'Nguyen Van A', 
      bloodType: 'A+', 
      hospital: 'Cho Ray Hospital', 
      urgency: 'Urgent', 
      status: 'Pending',
      requestDate: '2025-06-15',
      contactPhone: '0901234567',
      unitsNeeded: 2,
      notes: 'Patient needs immediate transfusion'
    },
    { 
      id: 2, 
      patientName: 'Tran Thi B', 
      bloodType: 'O-', 
      hospital: '115 Hospital', 
      urgency: 'Normal', 
      status: 'Processed',
      requestDate: '2025-06-14',
      contactPhone: '0909876543',
      unitsNeeded: 1,
      notes: 'Scheduled surgery next week'
    },
    { 
      id: 3, 
      patientName: 'Le Van C', 
      bloodType: 'B+', 
      hospital: 'FV Hospital', 
      urgency: 'Critical', 
      status: 'Pending',
      requestDate: '2025-06-16',
      contactPhone: '0912345678',
      unitsNeeded: 3,
      notes: 'Emergency case - accident victim'
    },
    { 
      id: 4, 
      patientName: 'Pham Thi D', 
      bloodType: 'AB-', 
      hospital: 'Vinmec Hospital', 
      urgency: 'Normal', 
      status: 'Rejected',
      requestDate: '2025-06-13',
      contactPhone: '0987654321',
      unitsNeeded: 1,
      notes: 'Patient condition improved'
    }
  ]);

  const [filters, setFilters] = useState({
    status: '',
    bloodType: '',
    urgency: '',
    hospital: ''
  });

  const [showFilters, setShowFilters] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [newRequest, setNewRequest] = useState({
    patientName: '',
    bloodType: '',
    hospital: '',
    urgency: 'Normal',
    contactPhone: '',
    unitsNeeded: 1,
    notes: ''
  });

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const urgencyLevels = ['Normal', 'Urgent', 'Critical'];
  const hospitals = ['Cho Ray Hospital', '115 Hospital', 'FV Hospital', 'Vinmec Hospital', 'Binh Dan Hospital'];

  const filteredRequests = useMemo(() => {
    return donationRequests.filter(request => {
      return (
        (filters.status === '' || request.status === filters.status) &&
        (filters.bloodType === '' || request.bloodType === filters.bloodType) &&
        (filters.urgency === '' || request.urgency === filters.urgency) &&
        (filters.hospital === '' || request.hospital.toLowerCase().includes(filters.hospital.toLowerCase()))
      );
    });
  }, [donationRequests, filters]);

  const handleApprove = (id) => {
    setDonationRequests(donationRequests.map(request => 
      request.id === id ? { ...request, status: 'Processed' } : request
    ));
  };

  const handleReject = (id) => {
    setDonationRequests(donationRequests.map(request => 
      request.id === id ? { ...request, status: 'Rejected' } : request
    ));
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      status: '',
      bloodType: '',
      urgency: '',
      hospital: ''
    });
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Export report functionality
  const handleExportReport = () => {
    const csvContent = [
      'ID,Patient Name,Blood Type,Hospital,Urgency,Status,Request Date,Contact Phone,Units Needed,Notes',
      ...filteredRequests.map(request => 
        `${request.id},"${request.patientName}",${request.bloodType},"${request.hospital}",${request.urgency},${request.status},${request.requestDate},${request.contactPhone},${request.unitsNeeded},"${request.notes}"`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `blood_donation_requests_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Add new request functionality
  const handleAddRequest = () => {
    if (newRequest.patientName && newRequest.bloodType && newRequest.hospital) {
      const request = {
        ...newRequest,
        id: Math.max(...donationRequests.map(r => r.id)) + 1,
        status: 'Pending',
        requestDate: new Date().toISOString().split('T')[0]
      };
      setDonationRequests([...donationRequests, request]);
      setNewRequest({
        patientName: '',
        bloodType: '',
        hospital: '',
        urgency: 'Normal',
        contactPhone: '',
        unitsNeeded: 1,
        notes: ''
      });
      setShowAddForm(false);
    }
  };

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Processed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Urgent':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const stats = useMemo(() => {
    const total = donationRequests.length;
    const pending = donationRequests.filter(r => r.status === 'Pending').length;
    const processed = donationRequests.filter(r => r.status === 'Processed').length;
    const rejected = donationRequests.filter(r => r.status === 'Rejected').length;
    const critical = donationRequests.filter(r => r.urgency === 'Critical' && r.status === 'Pending').length;
    
    return { total, pending, processed, rejected, critical };
  }, [donationRequests]);

  return (
    <div className="space-y-6 ml-72 p-20">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Blood Donation Requests Management</h2>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Filters
          </button>
          <button 
            onClick={handleExportReport}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Export Report
          </button>
          <button 
            onClick={() => setShowAddForm(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Add Request
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
          <div className="text-sm text-gray-600">Total Requests</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-green-600">{stats.processed}</div>
          <div className="text-sm text-gray-600">Processed</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
          <div className="text-sm text-gray-600">Rejected</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-red-200 p-4">
          <div className="text-2xl font-bold text-red-700">{stats.critical}</div>
          <div className="text-sm text-red-600">Critical Pending</div>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white rounded-lg shadow-sm border border-pink-100 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select 
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Processed">Processed</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
              <select 
                value={filters.bloodType}
                onChange={(e) => handleFilterChange('bloodType', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">All Blood Types</option>
                {bloodTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
              <select 
                value={filters.urgency}
                onChange={(e) => handleFilterChange('urgency', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">All Urgency</option>
                {urgencyLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hospital</label>
              <input 
                type="text"
                value={filters.hospital}
                onChange={(e) => handleFilterChange('hospital', e.target.value)}
                placeholder="Search hospital..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div> */}
          </div>
          <div className="mt-4 flex gap-2 items-center">
            <button 
              onClick={clearFilters}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Clear Filters
            </button>
            <span className="text-sm text-gray-600">
              Showing {filteredRequests.length} of {donationRequests.length} requests
            </span>
          </div>
        </div>
      )}
      
      {/* Main Table */}
      <div className="bg-white rounded-lg shadow-sm border border-pink-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-pink-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Type</th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital</th> */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Urgency</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Units</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{request.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.patientName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-medium border border-pink-200">
                      {request.bloodType}
                    </span>
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.hospital}</td> */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(request.urgency)}`}>
                      {request.urgency}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{request.unitsNeeded}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                    <div className="text-center">
                      {formatDate(request.requestDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex gap-2 justify-center">
                      <button 
                        onClick={() => handleViewDetails(request)}
                        className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors border border-blue-200"
                      >
                        View
                      </button>
                      <button 
                        onClick={() => handleApprove(request.id)}
                        disabled={request.status === 'Processed'}
                        className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors border border-green-200 disabled:border-gray-200"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleReject(request.id)}
                        disabled={request.status === 'Rejected'}
                        className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors border border-red-200 disabled:border-gray-200"
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Request Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Add New Request</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                <input 
                  type="text"
                  value={newRequest.patientName}
                  onChange={(e) => setNewRequest({...newRequest, patientName: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                <select 
                  value={newRequest.bloodType}
                  onChange={(e) => setNewRequest({...newRequest, bloodType: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">Select Blood Type</option>
                  {bloodTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hospital</label>
                <select 
                  value={newRequest.hospital}
                  onChange={(e) => setNewRequest({...newRequest, hospital: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">Select Hospital</option>
                  {hospitals.map(hospital => (
                    <option key={hospital} value={hospital}>{hospital}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
                <select 
                  value={newRequest.urgency}
                  onChange={(e) => setNewRequest({...newRequest, urgency: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  {urgencyLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Units Needed</label>
                <input 
                  type="number"
                  min="1"
                  value={newRequest.unitsNeeded}
                  onChange={(e) => setNewRequest({...newRequest, unitsNeeded: parseInt(e.target.value)})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                <input 
                  type="tel"
                  value={newRequest.contactPhone}
                  onChange={(e) => setNewRequest({...newRequest, contactPhone: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea 
                  value={newRequest.notes}
                  onChange={(e) => setNewRequest({...newRequest, notes: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md h-20 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button 
                onClick={handleAddRequest}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Add Request
              </button>
              <button 
                onClick={() => setShowAddForm(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h3 className="text-lg font-bold mb-4">Request Details</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-medium text-gray-700">Patient:</span>
                  <div className="text-gray-900">{selectedRequest.patientName}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Blood Type:</span>
                  <div>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-medium border border-pink-200">
                      {selectedRequest.bloodType}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Hospital:</span>
                  <div className="text-gray-900">{selectedRequest.hospital}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Urgency:</span>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(selectedRequest.urgency)}`}>
                      {selectedRequest.urgency}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Units Needed:</span>
                  <div className="text-gray-900 font-medium">{selectedRequest.unitsNeeded}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Status:</span>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedRequest.status)}`}>
                      {selectedRequest.status}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Request Date:</span>
                  <div className="text-gray-900">{formatDate(selectedRequest.requestDate)}</div>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Contact:</span>
                  <div className="text-gray-900">{selectedRequest.contactPhone}</div>
                </div>
              </div>
              <div>
                <span className="font-medium text-gray-700">Notes:</span>
                <div className="mt-1 p-3 bg-gray-50 rounded-md text-sm text-gray-900 border">{selectedRequest.notes}</div>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              {selectedRequest.status === 'Pending' && (
                <>
                  <button 
                    onClick={() => {
                      handleApprove(selectedRequest.id);
                      setSelectedRequest(null);
                    }}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => {
                      handleReject(selectedRequest.id);
                      setSelectedRequest(null);
                    }}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Reject
                  </button>
                </>
              )}
              <button 
                onClick={() => setSelectedRequest(null)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationRequestsManager;