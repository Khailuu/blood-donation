import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { FaUsers, FaUserCheck, FaUserPlus, FaMoon, FaSun } from 'react-icons/fa';
import { Spin, message, Card, Space, Typography } from 'antd';


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const { Title: AntTitle, Text } = Typography;

export const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    newUsersToday: 0,
  });
  const [darkMode, setDarkMode] = useState(false);

  // Fetch user data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Mock data for demonstration
        const mockUsers = [
          {
            requestId: '1',
            requesterName: 'Nguyễn Văn A',
            email: 'nguyenvana@example.com',
            role: 'User',
            requestDate: '2025-07-20T10:00:00Z',
            status: 'Active'
          },
          {
            requestId: '2',
            requesterName: 'Trần Thị B',
            email: 'tranthib@example.com',
            role: 'Admin',
            requestDate: '2025-07-21T11:30:00Z',
            status: 'Active'
          },
          {
            requestId: '3',
            requesterName: 'Lê Văn C',
            email: 'levanc@example.com',
            role: 'User',
            requestDate: '2025-07-22T09:15:00Z',
            status: 'Pending'
          },
          {
            requestId: '4',
            requesterName: 'Phạm Thị D',
            email: 'phamthid@example.com',
            role: 'User',
            requestDate: '2025-07-23T14:45:00Z',
            status: 'Active'
          },
          {
            requestId: '5',
            requesterName: 'Hoàng Văn E',
            email: 'hoangvane@example.com',
            role: 'User',
            requestDate: '2025-07-23T16:20:00Z',
            status: 'Active'
          }
        ];

        const today = new Date().toISOString().split('T')[0];
        const usersData = mockUsers.map((user) => ({
          userId: user.requestId,
          username: user.requesterName,
          email: user.email,
          role: user.role,
          registrationDate: user.requestDate,
          status: user.status,
        }));

        setUsers(usersData);
        setStats({
          totalUsers: usersData.length,
          activeUsers: usersData.filter((user) => user.status === 'Active').length,
          newUsersToday: usersData.filter((user) => user.registrationDate.split('T')[0] === today).length,
        });
      } catch (error) {
        console.error('Error:', error);
        message.error('Không thể tải dữ liệu: ' + (error.message || 'Lỗi không xác định'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Không xác định';
    const date = new Date(dateString);
    return isNaN(date.getTime())
      ? 'Ngày không hợp lệ'
      : date.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Chart data for user roles
  const roleChartData = {
    labels: ['Người dùng', 'Quản trị viên'],
    datasets: [
      {
        data: [
          users.filter((user) => user.role === 'User').length,
          users.filter((user) => user.role === 'Admin').length,
        ],
        backgroundColor: ['#6366F1', '#10B981'],
        hoverBackgroundColor: ['#8183F2', '#34D399'],
        borderWidth: 1,
      },
    ],
  };

  // Chart data for user registrations over time
  const registrationChartData = {
    labels: ['20/07/2025', '21/07/2025', '22/07/2025', '23/07/2025'],
    datasets: [
      {
        label: 'Người dùng mới',
        data: [
          users.filter(user => new Date(user.registrationDate).toLocaleDateString('vi-VN') === '20/07/2025').length,
          users.filter(user => new Date(user.registrationDate).toLocaleDateString('vi-VN') === '21/07/2025').length,
          users.filter(user => new Date(user.registrationDate).toLocaleDateString('vi-VN') === '22/07/2025').length,
          users.filter(user => new Date(user.registrationDate).toLocaleDateString('vi-VN') === '23/07/2025').length,
        ],
        backgroundColor: '#3B82F6',
        borderColor: '#3B82F6',
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  // Chart options with dark mode support
  const chartOptions = (darkMode) => ({
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: darkMode ? '#E5E7EB' : '#374151',
          font: {
            family: 'Inter, sans-serif',
          },
        },
      },
      tooltip: {
        backgroundColor: darkMode ? '#1F2937' : '#FFFFFF',
        titleColor: darkMode ? '#E5E7EB' : '#111827',
        bodyColor: darkMode ? '#D1D5DB' : '#4B5563',
        borderColor: darkMode ? '#4B5563' : '#E5E7EB',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: darkMode ? '#9CA3AF' : '#6B7280',
        },
        grid: {
          color: darkMode ? '#374151' : '#E5E7EB',
        },
      },
      x: {
        ticks: {
          color: darkMode ? '#9CA3AF' : '#6B7280',
        },
        grid: {
          color: darkMode ? '#374151' : '#E5E7EB',
        },
      },
    },
  });

  return (
    <div className={`${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} min-h-screen p-6 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <AntTitle level={2} className="!mb-0 !text-3xl font-bold text-gray-800 dark:text-white">
            Thống kê người dùng
          </AntTitle>
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            {darkMode ? (
              <>
                <FaSun className="text-lg" /> Chế độ sáng
              </>
            ) : (
              <>
                <FaMoon className="text-lg" /> Chế độ tối
              </>
            )}
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-md border-0 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800">
            <Space size="middle" className="w-full">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-gray-700">
                <FaUsers className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <Text className="block text-gray-600 dark:text-gray-300">Tổng số người dùng</Text>
                <AntTitle level={3} className="!mt-1 !mb-0 !text-2xl font-bold text-gray-800 dark:text-white">
                  {stats.totalUsers}
                </AntTitle>
              </div>
            </Space>
          </Card>

          <Card className="shadow-md border-0 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800">
            <Space size="middle" className="w-full">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-gray-700">
                <FaUserCheck className="text-2xl text-green-600 dark:text-green-400" />
              </div>
              <div>
                <Text className="block text-gray-600 dark:text-gray-300">Người dùng hoạt động</Text>
                <AntTitle level={3} className="!mt-1 !mb-0 !text-2xl font-bold text-gray-800 dark:text-white">
                  {stats.activeUsers}
                </AntTitle>
              </div>
            </Space>
          </Card>

          <Card className="shadow-md border-0 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-800">
            <Space size="middle" className="w-full">
              <div className="p-3 rounded-lg bg-amber-100 dark:bg-gray-700">
                <FaUserPlus className="text-2xl text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <Text className="block text-gray-600 dark:text-gray-300">Người dùng mới hôm nay</Text>
                <AntTitle level={3} className="!mt-1 !mb-0 !text-2xl font-bold text-gray-800 dark:text-white">
                  {stats.newUsersToday}
                </AntTitle>
              </div>
            </Space>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-md border-0 rounded-xl p-6 dark:bg-gray-800">
            <AntTitle level={4} className="!mb-6 !text-lg font-semibold text-gray-800 dark:text-white">
              Phân bổ vai trò người dùng
            </AntTitle>
            <div className="h-64">
              <Pie
                data={roleChartData}
                options={{
                  ...chartOptions(darkMode),
                  plugins: {
                    ...chartOptions(darkMode).plugins,
                    title: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </Card>

          <Card className="shadow-md border-0 rounded-xl p-6 dark:bg-gray-800">
            <AntTitle level={4} className="!mb-6 !text-lg font-semibold text-gray-800 dark:text-white">
              Người dùng mới theo thời gian
            </AntTitle>
            <div className="h-64">
              <Bar
                data={registrationChartData}
                options={{
                  ...chartOptions(darkMode),
                  plugins: {
                    ...chartOptions(darkMode).plugins,
                    title: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </Card>
        </div>

        {/* Recent Users */}
        <Card
          className="shadow-md border-0 rounded-xl p-6 dark:bg-gray-800"
          title={
            <AntTitle level={4} className="!mb-0 !text-lg font-semibold text-gray-800 dark:text-white">
              Người dùng gần đây
            </AntTitle>
          }
        >
          {loading ? (
            <div className="text-center py-8">
              <Spin size="large" />
              <Text className="mt-4 block text-gray-600 dark:text-gray-300">Đang tải dữ liệu...</Text>
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-8">
              <Text className="text-gray-500 dark:text-gray-400">Không tìm thấy người dùng.</Text>
            </div>
          ) : (
            <div className="space-y-3">
              {users.slice(0, 5).map((user) => (
                <div
                  key={user.userId}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 border-l-4 border-indigo-400"
                >
                  <div className="mb-2 sm:mb-0">
                    <Text className="block font-medium text-gray-800 dark:text-white">{user.username}</Text>
                    <Text className="block text-sm text-gray-600 dark:text-gray-300">{user.email}</Text>
                    <Space size="small" className="mt-1">
                      <Text className="text-xs text-gray-500 dark:text-gray-400">
                        Đăng ký: {formatDate(user.registrationDate)}
                      </Text>
                      <Text className="text-xs px-2 py-1 bg-indigo-100 dark:bg-gray-600 text-indigo-800 dark:text-indigo-200 rounded-full">
                        {user.role}
                      </Text>
                      <Text
                        className={`text-xs px-2 py-1 rounded-full ${
                          user.status === 'Active'
                            ? 'bg-green-100 dark:bg-gray-600 text-green-800 dark:text-green-200'
                            : 'bg-yellow-100 dark:bg-gray-600 text-yellow-800 dark:text-yellow-200'
                        }`}
                      >
                        {user.status}
                      </Text>
                    </Space>
                  </div>
                  <button
                    onClick={() => console.log('Xem chi tiết người dùng:', user)}
                    className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 hover:underline transition-colors duration-200"
                  >
                    Xem chi tiết
                  </button>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};