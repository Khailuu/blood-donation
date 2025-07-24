import React, { useState, useEffect } from 'react';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title 
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { 
  FaUsers, 
  FaUserCheck, 
  FaUserPlus, 
  FaUserShield,
  FaMoon,
  FaSun
} from 'react-icons/fa';
import { 
  Spin, 
  message, 
  Card, 
  Typography, 
  Tag,
  Avatar,
  Space
} from 'antd';
import { 
  MailOutlined, 
  CalendarOutlined, 
  UserOutlined,
  LoadingOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { userService } from '../../../services/manageUserService';
import dayjs from 'dayjs';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const { Title: AntTitle, Text } = Typography;

export const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    newUsersToday: 0,
    admins: 0,
  });


  // Fetch user data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const usersData = await userService.getAllUser();
        console.log(usersData);
        
        
        const processedUsers = usersData.map(user => ({
          userId: user.id,
          username: user.name || 'Unknown',
          email: user.email || 'N/A',
          role: user.role || 'User',
          registrationDate: user.createdDate || new Date().toISOString(),
          status: user.status || 'Active',
          avatar: user.avatar || `https://ui-avatars.com/api/?name=${user.fullName || 'U'}&background=random`
        }));

        const today = dayjs().format('YYYY-MM-DD');
        const activeUsers = processedUsers.filter(user => user.status === 'Active').length;
        const newUsersToday = processedUsers.filter(user => 
          dayjs(user.registrationDate).format('YYYY-MM-DD') === today
        ).length;
        const admins = processedUsers.filter(user => user.role === 'Admin').length;
        console.log({processedUsers});
        

        setUsers(processedUsers);
        setStats({
          totalUsers: processedUsers.length,
          activeUsers,
          newUsersToday,
          admins
        });
      } catch (error) {
        console.error('API Error:', error);
        message.error('Failed to load data: ' + (error.message || 'Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  // Chart data for user roles
  const roleChartData = {
    labels: ['Users', 'Admins', 'Others'],
    datasets: [
      {
        data: [
          users.filter((user) => user.role === 'User').length,
          users.filter((user) => user.role === 'Admin').length,
          users.filter((user) => !['User', 'Admin'].includes(user.role)).length,
        ],
        backgroundColor: ['#4F46E5', '#10B981', '#F59E0B'],
        hoverBackgroundColor: ['#6366F1', '#34D399', '#FBBF24'],
        borderWidth: 0,
      },
    ],
  };

  // Generate registration data for last 7 days
  const generateRegistrationData = () => {
    const days = 7;
    const labels = [];
    const data = [];
    
    for (let i = days - 1; i >= 0; i--) {
      const date = dayjs().subtract(i, 'day').format('MMM DD');
      labels.push(date);
      
      const count = users.filter(user => 
        dayjs(user.registrationDate).format('MMM DD') === date
      ).length;
      
      data.push(count);
    }
    
    return { labels, data };
  };

  const registrationData = generateRegistrationData();

  const registrationChartData = {
    labels: registrationData.labels,
    datasets: [
      {
        label: 'New Users',
        data: registrationData.data,
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        borderColor: '#4F46E5',
        borderWidth: 2,
        borderRadius: 6,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#374151',
          font: {
            family: 'Inter, sans-serif',
            weight: 500,
          },
        },
      },
      tooltip: {
        backgroundColor: '#FFFFFF',
        titleColor: '#111827',
        bodyColor: '#4B5563',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        padding: 12,
        boxPadding: 4,
        usePointStyle: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#F3F4F6',
          drawBorder: false,
        },
        ticks: {
          color: '#6B7280',
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#6B7280',
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 8,
      },
    },
  };

  return (
    <div className="min-h-screen p-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <AntTitle level={2} className="!mb-1 !text-3xl font-bold text-gray-800">
              Admin Dashboard
            </AntTitle>
            <Text className="text-gray-600">
              System overview and user statistics
            </Text>
          </div>
          
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            icon={<FaUsers className="text-2xl" />}
            title="Total Users"
            value={stats.totalUsers}
            trend={stats.totalUsers > 0 ? 'up' : 'none'}
            color="indigo"
          />
          
          <StatCard 
            icon={<FaUserCheck className="text-2xl" />}
            title="Active Users"
            value={stats.activeUsers}
            percentage={stats.totalUsers > 0 ? Math.round((stats.activeUsers / stats.totalUsers) * 100) : 0}
            color="green"
          />
          
          <StatCard 
            icon={<FaUserPlus className="text-2xl" />}
            title="New Today"
            value={stats.newUsersToday}
            trend={stats.newUsersToday > 0 ? 'up' : 'none'}
            color="blue"
          />
          
          <StatCard 
            icon={<FaUserShield className="text-2xl" />}
            title="Administrators"
            value={stats.admins}
            percentage={stats.totalUsers > 0 ? Math.round((stats.admins / stats.totalUsers) * 100) : 0}
            color="purple"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-sm border-0 rounded-xl overflow-hidden bg-white">
            <div className="p-6">
              <AntTitle level={4} className="!mb-6 !text-lg font-semibold text-gray-800">
                User Roles Distribution
              </AntTitle>
              <div className="h-64">
                <Pie
                  data={roleChartData}
                  options={chartOptions}
                />
              </div>
            </div>
          </Card>

          <Card className="shadow-sm border-0 rounded-xl overflow-hidden bg-white">
            <div className="p-6">
              <AntTitle level={4} className="!mb-6 !text-lg font-semibold text-gray-800">
                New Registrations (7 Days)
              </AntTitle>
              <div className="h-64">
                <Bar
                  data={registrationChartData}
                  options={chartOptions}
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Users */}
        <Card
          className="shadow-sm border-0 rounded-2xl overflow-hidden bg-white"
          title={
            <div className="flex items-center justify-between">
              <AntTitle level={4} className="!mb-0 !text-xl font-semibold text-gray-800">
                Recent Users
              </AntTitle>
              <Text className="text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer transition-colors">
                View All
              </Text>
            </div>
          }
        >
          {loading ? (
            <div className="text-center py-12">
              <Spin size="large" indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} />
              <Text className="mt-4 block text-gray-600">Loading user data...</Text>
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-12">
              <UserOutlined className="text-4xl text-gray-400 mb-3" />
              <Text className="text-gray-500 text-lg">No users found</Text>
            </div>
          ) : (
            <div className="space-y-3">
              {users.slice(0, 5).map((user) => (
                <div 
                  key={user.userId}
                  className="flex items-center p-4 hover:bg-indigo-50 rounded-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-indigo-100"
                >
                  <Avatar 
                    src={user.avatar} 
                    size={48}
                    className="shadow-md border-2 border-white"
                  />
                  
                  <div className="ml-4 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <Text strong className="text-gray-800 text-lg truncate">
                        {user.username}
                      </Text>
                      <div className="flex space-x-2">
                        {user.role === 'Admin' && (
                          <Tag 
                            color="purple" 
                            className="rounded-full px-3 py-0.5 text-xs font-medium"
                          >
                            ADMIN
                          </Tag>
                        )}
                        <Tag 
                          color={user.status === 'Active' ? 'green' : 'orange'}
                          className="rounded-full px-3 py-0.5 text-xs font-medium"
                        >
                          {user.status === 'Active' ? 'ACTIVE' : 'PENDING'}
                        </Tag>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center mt-1 text-sm text-gray-600">
                      <div className="flex items-center mr-4">
                        <MailOutlined className="mr-1" />
                        <span className="truncate">{user.email}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarOutlined className="mr-1" />
                        <span>{dayjs(user.registrationDate).format('MMM D, YYYY')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <RightOutlined className="text-gray-400 ml-2" />
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

// Reusable StatCard component
const StatCard = ({ icon, title, value, percentage, trend, color }) => {
  const colorMap = {
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', accent: 'bg-indigo-500' },
    green: { bg: 'bg-green-100', text: 'text-green-600', accent: 'bg-green-500' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', accent: 'bg-blue-500' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', accent: 'bg-purple-500' },
  };

  return (
    <Card className="shadow-sm border-0 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-lg ${colorMap[color].bg}`}>
          <div className={colorMap[color].text}>
            {icon}
          </div>
        </div>
        
        {trend === 'up' && (
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colorMap[color].bg} ${colorMap[color].text}`}>
            +{percentage || 'N/A'}%
          </span>
        )}
      </div>
      
      <div className="mt-4">
        <Text className="text-gray-600">{title}</Text>
        <AntTitle level={3} className="!mt-1 !mb-0 !text-2xl font-bold text-gray-800">
          {value}
        </AntTitle>
        
        {percentage && (
          <div className="mt-2 flex items-center">
            <div className={`w-full h-1.5 rounded-full ${colorMap[color].bg}`}>
              <div 
                className={`h-full rounded-full ${colorMap[color].accent}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className={`ml-2 text-sm ${colorMap[color].text}`}>
              {percentage}%
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default AdminDashboard;