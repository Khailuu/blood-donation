import React, { useState, useEffect } from "react";
import {
  Package,
  Search,
  Plus,
  Edit3,
  Trash2,
  AlertTriangle,
  TrendingDown,
  Download,
  Eye,
  BarChart3,
} from "lucide-react";
import { message, Modal, Table, Pagination, Typography } from "antd";
import { userService } from "../../../services/manageUserService";
const { Title } = Typography;

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 8,
    total: 0,
  });
  const [bloodTypes, setBloodTypes] = useState([]);

  const fetchInventory = async () => {
    try {
      setLoading(true);
      const response = await userService.getBloodStored();
      console.log("Inventory data:", response);

      setInventory(response);
      setPagination({
        ...pagination,
        total: response.length,
      });
    } catch (error) {
      console.error("Failed to fetch inventory:", error);
      message.error("Failed to load inventory data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchBloodTypes = async () => {
      try {
        const types = await userService.getBloodTypes();
        console.log("Blood types data:", types);
        setBloodTypes(types);
      } catch (error) {
        console.error("Failed to fetch blood types:", error);
      }
    };

    fetchBloodTypes();
    fetchInventory();
  }, []);

  const getBloodTypeName = (bloodTypeId) => {
    const type = bloodTypes.find((t) => t.bloodTypeId === bloodTypeId);
    return type ? type.name : `Unknown (ID: ${bloodTypeId})`;
  };

  const getStatus = (quantity) => {
    if (quantity >= 30) return "Sufficient";
    if (quantity >= 15) return "Low";
    return "Very Low";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Sufficient":
        return "bg-green-100 text-green-800";
      case "Low":
        return "bg-yellow-100 text-yellow-800";
      case "Very Low":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (status) => {
    switch (status) {
      case "Sufficient":
        return "bg-green-500";
      case "Low":
        return "bg-yellow-500";
      case "Very Low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTotalQuantity = () => {
    return inventory.reduce((total, item) => total + item.quantity, 0);
  };

  const getLowStockCount = () => {
    return inventory.filter((item) => getStatus(item.quantity) !== "Sufficient")
      .length;
  };

  const getUniqueBloodTypesCount = () => {
    const uniqueTypes = new Set(inventory.map((item) => item.bloodTypeId));
    return uniqueTypes.size;
  };

  const columns = [
    {
      title: "Blood Type",
      dataIndex: "bloodTypeId",
      key: "bloodTypeId",
      render: (bloodTypeId) => (
        <span className="font-semibold text-blue-600">
          {getBloodTypeName(bloodTypeId)}
        </span>
      ),
    },
    {
      title: "Description",
      key: "description",
      render: (_, record) => {
        const type = bloodTypes.find(
          (t) => t.bloodTypeId === record.bloodTypeId
        );
        return type?.description || "N/A";
      },
    },
    {
      title: "Quantity (units)",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity) => (
        <div className="flex items-center">
          <span className="font-medium mr-2">{quantity}</span>
          <div className="w-20 bg-gray-200 rounded-full h-1.5">
            <div
              className={`h-1.5 rounded-full ${getProgressColor(
                getStatus(quantity)
              )}`}
              style={{ width: `${Math.min((quantity / 50) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
            getStatus(record.quantity)
          )}`}
        >
          {getStatus(record.quantity)}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleDelete(record.id)}
            className="text-red-600 hover:text-red-900"
            title="Delete"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  const handleDelete = async (id) => {
    Modal.confirm({
      title: "Confirm Deletion",
      content: "Are you sure you want to delete this inventory item?",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      async onOk() {
        try {
          await userService.deleteBloodStored(id);
          message.success("Inventory item deleted successfully");
          fetchInventory();
        } catch (error) {
          console.error("Failed to delete inventory item:", error);
          message.error("Failed to delete inventory item");
        }
      },
    });
  };

  const handleExport = () => {
    const headers = ["Blood Type", "Description", "Quantity", "Status"];
    const csvContent = [
      headers,
      ...inventory.map((item) => {
        const type = bloodTypes.find((t) => t.bloodTypeId === item.bloodTypeId);
        return [
          type?.name || `Unknown (${item.bloodTypeId})`,
          type?.description || "N/A",
          item.quantity,
          getStatus(item.quantity),
        ];
      }),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `blood_inventory_${
      new Date().toISOString().split("T")[0]
    }.csv`;
    link.click();
  };

  const renderStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-lg p-4 shadow border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total Blood Units</p>
            <p className="text-2xl font-bold text-blue-600">
              {getTotalQuantity()}
            </p>
          </div>
          <Package className="h-8 w-8 text-blue-400" />
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Low Stock</p>
            <p className="text-2xl font-bold text-yellow-600">
              {getLowStockCount()}
            </p>
          </div>
          <TrendingDown className="h-8 w-8 text-yellow-400" />
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Blood Types</p>
            <p className="text-2xl font-bold text-purple-600">
              {getUniqueBloodTypesCount()}
            </p>
          </div>
          <BarChart3 className="h-8 w-8 text-purple-400" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <Title
            className="text-2xl font-bold"
            style={{ fontFamily: "Raleway" }}
          >
            Blood Inventory Management
          </Title>
          <p className="text-gray-600">Track and manage blood stock levels</p>
        </div>
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      {renderStats()}

      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <Table
          columns={columns}
          dataSource={inventory}
          rowKey="id"
          loading={loading}
          pagination={{
            pageSize: pagination.pageSize,
            showSizeChanger: true,
            pageSizeOptions: ["8", "16", "24", "32"],
          }}
        />
      </div>
    </div>
  );
};

export default InventoryManagement;
