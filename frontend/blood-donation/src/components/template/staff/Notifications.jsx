import React, { useState } from 'react';
import { Check, Clock, AlertCircle, Users, Heart, Bell, X, MapPin, Phone, Calendar, User } from 'lucide-react';

const Notifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'urgent',
      title: 'Urgent blood donation request',
      message: 'Cho Ray Hospital urgently needs O+ blood type for surgery.',
      time: '5 minutes ago',
      isRead: false,
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      details: {
        hospital: 'Cho Ray Hospital',
        bloodType: 'O+',
        quantity: '3 units',
        urgency: 'Urgent',
        purpose: 'Cardiovascular surgery',
        contactPerson: 'Dr. Nguyen Van A',
        phone: '028-3855-4269',
        address: '201B Nguyen Chi Thanh, District 5, HCMC',
        deadline: '18:00 today',
        patientInfo: 'Male, 45 years old, traffic accident'
      }
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Blood donation reminder',
      message: 'You are eligible to donate blood again. Last donation: 15/03/2024',
      time: '2 hours ago',
      isRead: false,
      icon: <Clock className="w-5 h-5 text-orange-500" />,
      details: {
        lastDonation: '15/03/2024',
        nextEligible: '15/06/2024',
        donationCount: 9,
        bloodType: 'A+',
        eligibilityStatus: 'Eligible',
        recommendedLocation: 'HCMC Hematology Center',
        note: 'You are almost at 10 blood donations!'
      }
    },
    {
      id: 3,
      type: 'success',
      title: 'Test results complete',
      message: 'Your blood test results are ready. All indicators are normal.',
      time: '1 day ago',
      isRead: true,
      icon: <Check className="w-5 h-5 text-green-500" />,
      details: {
        testDate: '05/06/2024',
        testType: 'Comprehensive Blood Test',
        results: {
          'Red Blood Cells': '4.5 million/μL (Normal)',
          'White Blood Cells': '7,200/μL (Normal)',
          'Platelets': '280,000/μL (Normal)',
          'Hemoglobin': '14.2 g/dL (Normal)',
          'HIV': 'Negative',
          'HBV': 'Negative',
          'HCV': 'Negative'
        },
        doctor: 'Dr. Tran Thi B',
        conclusion: 'Good results, eligible for blood donation'
      }
    },
    {
      id: 4,
      type: 'info',
      title: 'Blood donation event',
      message: 'Blood donation festival at Bach Khoa University - 20/07/2024',
      time: '2 days ago',
      isRead: true,
      icon: <Users className="w-5 h-5 text-blue-500" />,
      details: {
        eventName: 'Volunteer Blood Donation Festival 2024',
        date: '20/07/2024',
        time: '8:00 AM - 4:00 PM',
        location: 'Ho Chi Minh City University of Technology (HCMUT)',
        address: '268 Ly Thuong Kiet, District 10, HCMC',
        organizer: 'HCMUT Youth Union',
        expectedDonors: '500 people',
        benefits: ['Free health check-up', 'Free blood test', 'Commemorative gifts'],
        registration: 'On-site or online registration'
      }
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Congratulations!',
      message: 'You have reached 10 blood donations. Thank you for your contribution!',
      time: '1 week ago',
      isRead: true,
      icon: <Heart className="w-5 h-5 text-pink-500" />
    },
    {
      id: 6,
      type: 'urgent',
      title: 'Urgent blood needed - AB-',
      message: 'Nguyen Tri Phuong Hospital needs AB- blood type for accident patient',
      time: '3 hours ago',
      isRead: false,
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      details: {
        hospital: 'Nguyen Tri Phuong Hospital',
        bloodType: 'AB-',
        quantity: '2 units',
        urgency: 'Extremely urgent',
        purpose: 'Traffic accident emergency',
        contactPerson: 'Dr. Le Van C',
        phone: '028-3950-7775',
        address: '415 Nguyen Tri Phuong, District 10, HCMC',
        deadline: '20:00 today',
        patientInfo: 'Female, 28 years old, severe blood loss'
      }
    },
    {
      id: 7,
      type: 'reminder',
      title: 'Blood donation appointment',
      message: 'Reminder: You have a blood donation appointment on 25/07/2024 at the Hematology Center',
      time: '1 day ago',
      isRead: true,
      icon: <Clock className="w-5 h-5 text-orange-500" />
    },
    {
      id: 8,
      type: 'info',
      title: 'Policy update',
      message: 'New blood donation policies effective from August 2024',
      time: '3 days ago',
      isRead: true,
      icon: <Users className="w-5 h-5 text-blue-500" />
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({
        ...notification,
        isRead: true
      }))
    );
  };

  const markAsRead = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === 'all') return true;
    return notification.type === activeFilter;
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const filterButtons = [
    { key: 'all', label: 'All', style: 'bg-white hover:bg-gray-50 text-gray-700 border' },
    { key: 'urgent', label: 'Urgent', style: 'bg-red-50 hover:bg-red-100 text-red-700 border-red-200' },
    { key: 'reminder', label: 'Reminders', style: 'bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200' },
    { key: 'success', label: 'Success', style: 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200' },
    { key: 'info', label: 'Information', style: 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200' }
  ];

  return (
    <div className="min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-pink-500" />
            <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-pink-500 hover:text-pink-600 text-sm font-medium transition-colors"
            >
              Mark all as read
            </button>
          )}
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {filterButtons.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`${filter.style} px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                activeFilter === filter.key
                  ? 'ring-2 ring-pink-200 shadow-md'
                  : ''
              }`}
            >
              {filter.label}
              {filter.key !== 'all' && (
                <span className="ml-2 text-xs bg-gray-200 px-1.5 py-0.5 rounded-full">
                  {notifications.filter(n => n.type === filter.key).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Display information about the current filter */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Displaying {filteredNotifications.length} notifications
            {activeFilter !== 'all' && (
              <span className="ml-1">
                - {filterButtons.find(f => f.key === activeFilter)?.label.toLowerCase()}
              </span>
            )}
          </p>
        </div>

        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => !notification.isRead && markAsRead(notification.id)}
              className={`bg-white rounded-lg shadow-md p-4 border-l-4 cursor-pointer transition-all hover:shadow-lg ${
                notification.type === 'urgent' ? 'border-red-500' :
                notification.type === 'reminder' ? 'border-orange-500' :
                notification.type === 'success' ? 'border-green-500' :
                notification.type === 'info' ? 'border-blue-500' :
                'border-pink-500'
              } ${!notification.isRead ? 'bg-blue-50 ring-2 ring-blue-100' : ''}`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {notification.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-sm font-semibold ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.title}
                      {!notification.isRead && (
                        <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </h3>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      {notification.time}
                    </span>
                  </div>
                  <p className={`text-sm mb-3 ${!notification.isRead ? 'text-gray-800' : 'text-gray-600'}`}>
                    {notification.message}
                  </p>
                  {notification.type === 'urgent' && (
                    <div className="flex gap-2">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                        Register now
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNotification(notification);
                        }}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium transition-colors"
                      >
                        View details
                      </button>
                    </div>
                  )}
                  {notification.type === 'reminder' && (
                    <div className="flex gap-2">
                      <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
                        Schedule
                      </button>
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium transition-colors">
                        Remind me later
                      </button>
                    </div>
                  )}
                  {notification.type === 'info' && (
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNotification(notification);
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                      >
                        View details
                      </button>
                    </div>
                  )}
                  {notification.type === 'success' && (
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNotification(notification);
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
                      >
                        View details
                      </button>
                    </div>
                  )}
                </div>
                {!notification.isRead && (
                  <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0 mt-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Display when no notifications match the filter */}
        {filteredNotifications.length === 0 && (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              No {activeFilter !== 'all' && filterButtons.find(f => f.key === activeFilter)?.label.toLowerCase()} notifications
            </h3>
            <p className="text-gray-400">
              {activeFilter === 'all'
                ? 'You will receive notifications about blood donation requests and updates here.'
                : 'Try selecting a different notification type or go back to view all.'
              }
            </p>
          </div>
        )}

        {/* Load More Button - only displayed when there are notifications */}
        {filteredNotifications.length > 0 && (
          <div className="mt-8 text-center">
            <button className="bg-white hover:bg-gray-50 text-pink-500 border border-pink-500 hover:border-pink-600 px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              Load more notifications
            </button>
          </div>
        )}

        {/* Notification details popup */}
        {selectedNotification && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-xl">
                <h2 className="text-xl font-bold text-gray-800">Notification Details</h2>
                <button
                  onClick={() => setSelectedNotification(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 mt-1">
                    {selectedNotification.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {selectedNotification.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{selectedNotification.message}</p>
                    <p className="text-sm text-gray-500">{selectedNotification.time}</p>
                  </div>
                </div>

                {/* Detailed information by notification type */}
                {selectedNotification.type === 'urgent' && selectedNotification.details && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 border-b pb-2">Request Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Hospital</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.hospital}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Blood Type</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.bloodType}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-orange-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Quantity</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.quantity}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-red-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Deadline</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.deadline}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">Purpose of Use</p>
                      <p className="text-sm text-gray-600">{selectedNotification.details.purpose}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">Patient Information</p>
                      <p className="text-sm text-gray-600">{selectedNotification.details.patientInfo}</p>
                    </div>
                    <div className="border-t pt-4">
                      <h5 className="font-medium text-gray-700 mb-2">Contact Information</h5>
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{selectedNotification.details.contactPerson}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{selectedNotification.details.phone}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                        <span className="text-sm text-gray-600">{selectedNotification.details.address}</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedNotification.type === 'success' && selectedNotification.details && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 border-b pb-2">Test Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Test Date</p>
                        <p className="text-sm text-gray-600">{selectedNotification.details.testDate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Test Type</p>
                        <p className="text-sm text-gray-600">{selectedNotification.details.testType}</p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-3">Detailed Results</p>
                      <div className="space-y-2">
                        {Object.entries(selectedNotification.details.results).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-gray-600">{key}:</span>
                            <span className="text-gray-800 font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Attending Doctor: {selectedNotification.details.doctor}</span>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800">Conclusion</p>
                        <p className="text-sm text-blue-700">{selectedNotification.details.conclusion}</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedNotification.type === 'info' && selectedNotification.details && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 border-b pb-2">Event Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Date</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Time</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Location</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">Expected Attendees</p>
                          <p className="text-sm text-gray-600">{selectedNotification.details.expectedDonors}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-2">Participation Benefits</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {selectedNotification.details.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="w-3 h-3 text-green-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t pt-4">
                      <div className="text-sm text-gray-600">
                        <p><strong>Organizer:</strong> {selectedNotification.details.organizer}</p>
                        <p><strong>Registration:</strong> {selectedNotification.details.registration}</p>
                        <p><strong>Address:</strong> {selectedNotification.details.address}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex gap-3 pt-4 border-t">
                  <button
                    onClick={() => setSelectedNotification(null)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    Close
                  </button>
                  {selectedNotification.type === 'urgent' && (
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Register to donate blood
                    </button>
                  )}
                  {selectedNotification.type === 'info' && (
                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Register to participate
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
