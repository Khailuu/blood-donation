import React, { useState } from 'react';

const Plus = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const Save = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const BloodRequests = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    bloodType: 'A+',
    hospital: '',
    urgency: 'Urgent',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 p-20 min-h-screen ml-64">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Create Emergency Blood Request</h2>
        {/* <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 flex items-center gap-2 transition-colors">
          <Plus className="h-4 w-4" />
          New Request
        </button> */}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-pink-100">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Patient Name</label>
              <input 
                type="text" 
                value={formData.patientName}
                onChange={(e) => handleInputChange('patientName', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors" 
                placeholder="Enter patient's full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
              <select 
                value={formData.bloodType}
                onChange={(e) => handleInputChange('bloodType', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              >
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hospital</label>
              <input 
                type="text" 
                value={formData.hospital}
                onChange={(e) => handleInputChange('hospital', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors" 
                placeholder="Enter hospital name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
              <select 
                value={formData.urgency}
                onChange={(e) => handleInputChange('urgency', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              >
                <option>Urgent</option>
                <option>Normal</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
            <textarea 
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 h-24 transition-colors" 
              placeholder="Patient details, required blood amount, time needed..."
            ></textarea>
          </div>
          <div className="flex justify-end gap-4">
            <button 
              type="button" 
              onClick={() => setFormData({
                patientName: '',
                bloodType: 'A+',
                hospital: '',
                urgency: 'Urgent',
                notes: ''
              })}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSubmit}
              className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 flex items-center gap-2 transition-colors"
            >
              <Save className="h-4 w-4" />
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodRequests;
