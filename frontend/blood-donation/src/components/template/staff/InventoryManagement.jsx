import React, { useState, useEffect } from 'react';
import { 
  Package, 
  Search, 
  Filter, 
  Plus, 
  Edit3, 
  Trash2, 
  AlertTriangle, 
  Calendar, 
  TrendingDown, 
  TrendingUp,
  Download,
  Upload,
  RefreshCw,
  Bell,
  Eye,
  BarChart3
} from 'lucide-react';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([
    { 
      id: 1, 
      bloodType: 'A+', 
      quantity: 45, 
      expiry: '2024-07-15', 
      status: 'Sufficient', 
      location: 'Warehouse A1',
      batchNumber: 'BA240615001',
      donationDate: '2024-06-15',
      lastUpdated: '2024-06-08 09:30'
    },
    { 
      id: 2, 
      bloodType: 'A-', 
      quantity: 12, 
      expiry: '2024-07-20', 
      status: 'Low', 
      location: 'Warehouse A2',
      batchNumber: 'BA240618001',
      donationDate: '2024-06-18',
      lastUpdated: '2024-06-08 10:15'
    },
    { 
      id: 3, 
      bloodType: 'B+', 
      quantity: 30, 
      expiry: '2024-07-18', 
      status: 'Sufficient', 
      location: 'Warehouse B1',
      batchNumber: 'BB240616001',
      donationDate: '2024-06-16',
      lastUpdated: '2024-06-08 08:45'
    },
    { 
      id: 4, 
      bloodType: 'B-', 
      quantity: 8, 
      expiry: '2024-07-22', 
      status: 'Low', 
      location: 'Warehouse B2',
      batchNumber: 'BB240619001',
      donationDate: '2024-06-19',
      lastUpdated: '2024-06-08 11:20'
    },
    { 
      id: 5, 
      bloodType: 'AB+', 
      quantity: 15, 
      expiry: '2024-07-25', 
      status: 'Low', 
      location: 'Warehouse AB1',
      batchNumber: 'BAB240620001',
      donationDate: '2024-06-20',
      lastUpdated: '2024-06-08 07:30'
    },
    { 
      id: 6, 
      bloodType: 'AB-', 
      quantity: 5, 
      expiry: '2024-07-28', 
      status: 'Very Low', 
      location: 'Warehouse AB2',
      batchNumber: 'BAB240621001',
      donationDate: '2024-06-21',
      lastUpdated: '2024-06-08 12:00'
    },
    { 
      id: 7, 
      bloodType: 'O+', 
      quantity: 60, 
      expiry: '2024-07-12', 
      status: 'Sufficient', 
      location: 'Warehouse O1',
      batchNumber: 'BO240614001',
      donationDate: '2024-06-14',
      lastUpdated: '2024-06-08 09:00'
    },
    { 
      id: 8, 
      bloodType: 'O-', 
      quantity: 3, 
      expiry: '2024-07-30', 
      status: 'Very Low', 
      location: 'Warehouse O2',
      batchNumber: 'BO240622001',
      donationDate: '2024-06-22',
      lastUpdated: '2024-06-08 13:15'
    }
  ]);

  const [filteredInventory, setFilteredInventory] = useState(inventory);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [statusFilter, setStatusFilter] = useState('all'); 
  const [sortBy, setSortBy] = useState('bloodType'); 
  const [showAddForm, setShowAddForm] = useState(false); 
  const [showEditForm, setShowEditForm] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null); 
  const [viewMode, setViewMode] = useState('grid'); 

  // Form data for add/edit
  const [formData, setFormData] = useState({
    bloodType: '',
    quantity: '',
    expiry: '',
    location: '',
    batchNumber: '',
    donationDate: ''
  });

  useEffect(() => {
    let filtered = inventory.filter(item => {
      const matchesSearch = item.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.batchNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.location.toLowerCase().includes(searchTerm.toLowerCase());
    
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'quantity':
          return b.quantity - a.quantity; 
        case 'expiry':
          return new Date(a.expiry) - new Date(b.expiry); 
        case 'status':
          return a.status.localeCompare(b.status); 
        default:
          return a.bloodType.localeCompare(b.bloodType); 
      }
    });

    setFilteredInventory(filtered);
  }, [inventory, searchTerm, statusFilter, sortBy]);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: inventory.length + 1, 
      ...formData,
      quantity: parseInt(formData.quantity), 
      status: getStatus(parseInt(formData.quantity)), 
      lastUpdated: new Date().toLocaleString('en-US') 
    };
    
    setInventory([...inventory, newItem]);
  
    setFormData({
      bloodType: '',
      quantity: '',
      expiry: '',
      location: '',
      batchNumber: '',
      donationDate: ''
    });
    setShowAddForm(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedInventory = inventory.map(item => 
      item.id === selectedItem.id 
        ? { 
            ...item, 
            ...formData, 
            quantity: parseInt(formData.quantity),
            status: getStatus(parseInt(formData.quantity)),
            lastUpdated: new Date().toLocaleString('en-US')
          }
        : item
    );
    
    setInventory(updatedInventory); 
    setShowEditForm(false); 
    setSelectedItem(null); 
  };

  const handleEdit = (item) => {
    setSelectedItem(item); 
    setFormData({
      bloodType: item.bloodType,
      quantity: item.quantity.toString(),
      expiry: item.expiry,
      location: item.location,
      batchNumber: item.batchNumber,
      donationDate: item.donationDate
    });
    setShowEditForm(true); 
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setInventory(inventory.filter(item => item.id !== id));
    }
  };

  const getStatus = (quantity) => {
    if (quantity >= 30) return 'Sufficient';
    if (quantity >= 15) return 'Low';
    return 'Very Low';
  };
  const getStatusColor = (status) => {
    switch (status) {
      case 'Sufficient': return 'bg-green-100 text-green-800';
      case 'Low': return 'bg-yellow-100 text-yellow-800';
      case 'Very Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressWidth = (quantity) => {
    return Math.min((quantity / 50) * 100, 100); 
  };

  const getProgressColor = (status) => {
    switch (status) {
      case 'Sufficient': return 'bg-green-600';
      case 'Low': return 'bg-yellow-600';
      case 'Very Low': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getTotalQuantity = () => {
    return inventory.reduce((total, item) => total + item.quantity, 0);
  };

  const getLowStockCount = () => {
    return inventory.filter(item => item.status !== 'Sufficient').length;
  };

  const getExpiringCount = () => {
    const today = new Date();
    const threeDaysFromNow = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000);
    return inventory.filter(item => new Date(item.expiry) <= threeDaysFromNow).length;
  };

  const renderStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg p-4 shadow-sm border border-pink-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Blood Bags</p>
            <p className="text-2xl font-bold text-pink-600">{getTotalQuantity()}</p>
          </div>
          <Package className="h-8 w-8 text-pink-400" />
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm border border-pink-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Low Stock Blood Types</p>
            <p className="text-2xl font-bold text-red-600">{getLowStockCount()}</p>
          </div>
          <TrendingDown className="h-8 w-8 text-red-400" />
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm border border-pink-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Expiring Soon</p>
            <p className="text-2xl font-bold text-orange-600">{getExpiringCount()}</p>
          </div>
          <Calendar className="h-8 w-8 text-orange-400" />
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm border border-pink-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Blood Types</p>
            <p className="text-2xl font-bold text-blue-600">8</p> 
          </div>
          <BarChart3 className="h-8 w-8 text-blue-400" />
        </div>
      </div>
    </div>
  );

  const renderFilters = () => (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-pink-100 mb-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-64">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by blood type, batch, location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
        </div>
        
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
        >
          <option value="all">All Statuses</option>
          <option value="Sufficient">Sufficient</option>
          <option value="Low">Low</option>
          <option value="Very Low">Very Low</option>
        </select>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
        >
          <option value="bloodType">Sort by Blood Type</option>
          <option value="quantity">Sort by Quantity</option>
          <option value="expiry">Sort by Expiry Date</option>
          <option value="status">Sort by Status</option>
        </select>
        
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'table' : 'grid')}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 flex items-center gap-2"
          >
            {viewMode === 'grid' ? <Eye className="h-4 w-4" /> : <Package className="h-4 w-4" />}
            {viewMode === 'grid' ? 'Table View' : 'Grid View'}
          </button>
          
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export Excel
          </button>
          
          <button 
            onClick={() => setShowAddForm(true)}
            className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add New
          </button>
        </div>
      </div>
    </div>
  );

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredInventory.map((item) => (
        <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-pink-600">{item.bloodType}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
              {item.status}
            </span>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Quantity:</span>
              <span className="font-semibold">{item.quantity} bags</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Expiry Date:</span>
              <span className="font-semibold">{item.expiry}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Location:</span>
              <span className="font-semibold">{item.location}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Batch Number:</span>
              <span className="font-semibold">{item.batchNumber}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Stock Level</span>
              <span>{item.quantity}/50</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${getProgressColor(item.status)}`}
                style={{ width: `${getProgressWidth(item.quantity)}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <span className="text-xs text-gray-500">
              Updated: {item.lastUpdated}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => handleEdit(item)}
                className="p-1 text-blue-600 hover:bg-blue-50 rounded"
              >
                <Edit3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="p-1 text-red-600 hover:bg-red-50 rounded"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {new Date(item.expiry) <= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) && (
            <div className="mt-3 flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <span className="text-xs text-orange-700">Expiring Soon</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderTableView = () => (
    <div className="bg-white rounded-lg shadow-sm border border-pink-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-pink-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredInventory.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="font-semibold text-pink-600">{item.bloodType}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">{item.quantity} bags</span>
                    <div className="ml-2 w-16 bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${getProgressColor(item.status)}`}
                        style={{ width: `${getProgressWidth(item.quantity)}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center">
                    {item.expiry}
                    {new Date(item.expiry) <= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) && (
                      <AlertTriangle className="h-4 w-4 text-orange-500 ml-2" />
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.batchNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderForm = (isEdit = false) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">
          {isEdit ? 'Edit Blood Information' : 'Add New Blood to Inventory'}
        </h3>
        
        <form onSubmit={isEdit ? handleEditSubmit : handleAddSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
            <select
              value={formData.bloodType}
              onChange={(e) => setFormData({...formData, bloodType: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            >
              <option value="">Select blood type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity (bags)</label>
            <input
              type="number"
              min="1"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
            <input
              type="date"
              value={formData.expiry}
              onChange={(e) => setFormData({...formData, expiry: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Storage Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Ex: Warehouse A1"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Batch Number</label>
            <input
              type="text"
              value={formData.batchNumber}
              onChange={(e) => setFormData({...formData, batchNumber: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Ex: BA240615001"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Donation Date</label>
            <input
              type="date"
              value={formData.donationDate}
              onChange={(e) => setFormData({...formData, donationDate: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 flex items-center justify-center gap-2"
            >
              <Package className="h-4 w-4" />
              {isEdit ? 'Update' : 'Add to Inventory'}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowAddForm(false);
                setShowEditForm(false);
                setFormData({
                  bloodType: '',
                  quantity: '',
                  expiry: '',
                  location: '',
                  batchNumber: '',
                  donationDate: ''
                });
              }}
              className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 ml-72 p-20">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Blood Inventory Management</h2>
        <div className="flex gap-2">
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Send Alert ({getLowStockCount()}) 
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>
      </div>

      {renderStats()} 
      {renderFilters()}
      {viewMode === 'grid' ? renderGridView() : renderTableView()}
      {showAddForm && renderForm(false)}
      {showEditForm && renderForm(true)}
    </div>
  );
};

export default InventoryManagement;