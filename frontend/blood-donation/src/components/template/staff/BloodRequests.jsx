import {
  Button,
  Typography,
  message,
  Steps,
  Card,
  Tag,
  Divider,
  Alert,
  Select,
  Input,
  Progress,
} from "antd";
import React, { useState, useEffect } from "react";
import { userService } from "../../../services/manageUserService";
const { Title, Text } = Typography;
const { Step } = Steps;
const { TextArea } = Input;

const BloodRequests = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    patientName: "",
    bloodType: "A+",
    urgency: "Urgent",
    notes: "",
    contact: "",
  });
  const [inventory, setInventory] = useState([]);
  const [bloodTypes, setBloodTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [inventoryData, bloodTypesData] = await Promise.all([
          userService.getBloodStored(),
          userService.getBloodTypes(),
        ]);
        setInventory(inventoryData);
        setBloodTypes(bloodTypesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        message.error("Failed to load required data");
      }
    };

    fetchData();
  }, []);

  const bloodCompatibility = {
    "A+": ["A+", "A-", "O+", "O-"],
    "A-": ["A-", "O-"],
    "B+": ["B+", "B-", "O+", "O-"],
    "B-": ["B-", "O-"],
    "AB+": ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    "AB-": ["A-", "B-", "AB-", "O-"],
    "O+": ["O+", "O-"],
    "O-": ["O-"],
  };

  const getBloodTypeId = (bloodTypeName) => {
    const type = bloodTypes.find((t) => t.name === bloodTypeName);
    return type ? type.bloodTypeId : null;
  };

  const getInventoryForType = (bloodTypeName) => {
    const typeId = getBloodTypeId(bloodTypeName);

    if (!typeId) return { units: 0 };

    const item = inventory.find((i) => i.bloodTypeId === typeId);
    return item ? { units: item.quantity } : { units: 0 };
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\+?[\d\s-]{10,}$/;
    return re.test(phone);
  };

  const validateContact = (contact) => {
    return validateEmail(contact) || validatePhone(contact);
  };

  const validateName = (name) => {
    return name.length >= 3 && /^[a-zA-Z\s]*$/.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.patientName.trim()) {
      message.error("Vui lòng nhập tên bệnh nhân");
      return;
    }

    if (!validateName(formData.patientName)) {
      message.error(
        "Tên bệnh nhân phải có ít nhất 3 ký tự và không chứa ký tự đặc biệt"
      );
      return;
    }

    if (!formData.contact.trim()) {
      message.error("Vui lòng nhập thông tin liên hệ");
      return;
    }

    if (!validateContact(formData.contact)) {
      message.error("Vui lòng nhập số điện thoại hoặc email hợp lệ");
      return;
    }

    setCurrentStep(1);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      patientName: "",
      bloodType: "A+",
      urgency: "Urgent",
      notes: "",
      contact: "",
    });
    setCurrentStep(0);
  };

  const handleScheduleTransfusion = async (bloodType) => {
    try {
      setLoading(true);

      const type = bloodTypes.find((t) => t.name === bloodType);
      console.log({ type });

      if (!type) {
        throw new Error("Blood type not found");
      }

      const currentItem = inventory.find(
        (item) => item.bloodTypeId === type.bloodTypeId
      );
      console.log({ currentItem });

      if (!currentItem || currentItem.quantity <= 0) {
        throw new Error("No inventory available for this blood type");
      }

      await userService.updateBloodStored({
        bloodTypeName: type.name,
        quantity: -1,
      });

      setInventory((prevInventory) =>
        prevInventory.map((item) =>
          item.bloodTypeId === type.bloodTypeId
            ? { ...item, quantity: currentItem.quantity - 1 }
            : item
        )
      );

      message.success(`Blood transfusion scheduled for ${bloodType}`);
      setCurrentStep(2);
    } catch (error) {
      console.error("Failed to schedule transfusion:", error);
      message.error(error.message || "Failed to schedule transfusion");
    } finally {
      setLoading(false);
    }
  };

  const compatibleBloodTypes = bloodCompatibility[formData.bloodType] || [];
  const availableBloodTypes = compatibleBloodTypes.filter(
    (type) => getInventoryForType(type).units > 0
  );
  const isBloodAvailable = availableBloodTypes.length > 0;

  return (
    <div className="min-h-screen w-full p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div
          className="bg-white rounded-xl shadow-sm p-6 mb-8"
          style={{ backgroundColor: "#ffd8df" }}
        >
          <Steps
            current={currentStep}
            responsive={false}
            className="custom-steps"
          >
            <Step title="Patient Info" />
            <Step title="Inventory Check" />
            <Step title="Completion" />
          </Steps>
        </div>

        {/* STEP 1: PATIENT INFORMATION FORM */}
        {currentStep === 0 && (
          <div
            className="rounded-xl p-6 shadow-sm border border-gray-100 bg-white transition-all hover:shadow-md"
            style={{ backgroundColor: "#ffd8df" }}
          >
            <div className="text-center mb-8">
              <Title
                level={3}
                className="text-2xl font-semibold text-gray-800 mb-2"
                style={{ fontFamily: "Raleway", fontWeight: 700 }}
              >
                Blood Request Form
              </Title>
              <Text
                type="secondary"
                className="text-gray-500"
                style={{ fontFamily: "Raleway" }}
              >
                Fill in patient details to check blood availability
              </Text>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="block text-sm font-medium text-gray-600 mb-1"
                    style={{ fontFamily: "Raleway", fontWeight: 600 }}
                  >
                    Patient Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    size="large"
                    value={formData.patientName}
                    onChange={(e) =>
                      handleInputChange("patientName", e.target.value)
                    }
                    placeholder="Enter patient name"
                    required
                    style={{ fontFamily: "Raleway" }}
                    status={formData.patientName && !validateName(formData.patientName) ? "error" : ""}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-sm font-medium text-gray-600 mb-1"
                    style={{ fontFamily: "Raleway", fontWeight: 600 }}
                  >
                    Blood Type <span className="text-red-500">*</span>
                  </label>
                  <Select
                    size="large"
                    value={formData.bloodType}
                    onChange={(value) => handleInputChange("bloodType", value)}
                    className="w-full"
                    style={{ fontFamily: "Raleway" }}
                    options={[
                      { value: "A+", label: "A+" },
                      { value: "A-", label: "A-" },
                      { value: "B+", label: "B+" },
                      { value: "B-", label: "B-" },
                      { value: "AB+", label: "AB+" },
                      { value: "AB-", label: "AB-" },
                      { value: "O+", label: "O+" },
                      { value: "O-", label: "O-" },
                    ]}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label
                    className="block text-sm font-medium text-gray-600"
                    style={{ fontFamily: "Raleway", fontWeight: 600 }}
                  >
                    Urgency Level*
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleInputChange("urgency", "Urgent")}
                      className={`p-4 border rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 ${
                        formData.urgency === "Urgent"
                          ? "border-red-500 bg-red-50 text-red-600 shadow-md"
                          : "border-gray-200 bg-white hover:border-red-300 hover:bg-red-50"
                      }`}
                      style={{
                        fontFamily: "Raleway",
                        fontWeight: 500,
                        transform: "scale(1)",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(0.98)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(239, 68, 68, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow =
                          formData.urgency === "Urgent"
                            ? "0 4px 8px rgba(0,0,0,0.1)"
                            : "none";
                      }}
                    >
                      {formData.urgency === "Urgent" && (
                        <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                      )}
                      <span>Urgent (Within 2 hours)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange("urgency", "Normal")}
                      className={`p-4 border rounded-xl transition-all duration-200 flex items-center justify-center ${
                        formData.urgency === "Normal"
                          ? "border-blue-500 bg-blue-50 text-blue-600 shadow-md"
                          : "border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50"
                      }`}
                      style={{
                        fontFamily: "Raleway",
                        fontWeight: 500,
                        transform: "scale(1)",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(0.98)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(59, 130, 246, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow =
                          formData.urgency === "Normal"
                            ? "0 4px 8px rgba(0,0,0,0.1)"
                            : "none";
                      }}
                    >
                      <span>Normal (Within 24 hours)</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-sm font-medium text-gray-600 mb-1"
                    style={{ fontFamily: "Raleway", fontWeight: 600 }}
                  >
                    Contact Information <span className="text-red-500">*</span>
                  </label>
                  <Input
                    size="large"
                    value={formData.contact}
                    onChange={(e) =>
                      handleInputChange("contact", e.target.value)
                    }
                    placeholder="Phone number or email"
                    required
                    style={{ fontFamily: "Raleway" }}
                     status={formData.contact && !validateContact(formData.contact) ? "error" : ""}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-600 mb-1"
                  style={{ fontFamily: "Raleway", fontWeight: 600 }}
                >
                  Additional Notes
                </label>
                <TextArea
                  rows={4}
                  size="large"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="Any special requirements or information about the patient"
                  className="w-full"
                  style={{ fontFamily: "Raleway" }}
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button
                  onClick={resetForm}
                  size="large"
                  className="px-6 border-red-600 text-red-600 hover:bg-red-50 flex items-center"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 600,
                    backgroundColor: "#fff",
                    color: "#bd0026",
                    border: "1px solid #bd0026",
                    borderRadius: 50,
                    height: 40,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(0.95)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Clear Form
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="px-6 flex items-center"
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 600,
                    backgroundColor: "#bd0026",
                    color: "#fff",
                    borderRadius: 50,
                    height: 40,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(0.95)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Check Blood Inventory
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: INVENTORY CHECK */}
        {currentStep === 1 && (
          <div
            className="rounded-xl p-6 shadow-sm border border-gray-100 bg-white transition-all hover:shadow-md"
            style={{ backgroundColor: "#ffd8df" }}
          >
            <div className="text-center mb-6">
              <Title
                level={3}
                className="text-2xl font-semibold text-gray-800 mb-2"
                style={{ fontFamily: "Raleway", fontWeight: 700 }}
              >
                Blood Availability Status
              </Title>
              <div className="flex justify-center items-center">
                <Text
                  type="secondary"
                  className="text-gray-500 mr-2"
                  style={{ fontFamily: "Raleway" }}
                >
                  Requested Type:
                </Text>
                <Tag
                  color="#bd0026"
                  className="text-base font-medium px-3 py-1"
                  style={{ fontFamily: "Raleway", color: "white" }}
                >
                  {formData.bloodType}
                </Tag>
              </div>
            </div>

            {isBloodAvailable ? (
              <>
                <Alert
                  message="Compatible Blood Available!"
                  description={`We found ${availableBloodTypes.length} compatible blood type(s) in stock.`}
                  type="success"
                  showIcon
                  className="mb-6 rounded-lg"
                  style={{ fontFamily: "Raleway" }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableBloodTypes.map((bloodType) => {
                    const inventoryData = getInventoryForType(bloodType);
                    const units = inventoryData.units;
                    const status =
                      units > 10 ? "High" : units > 5 ? "Moderate" : "Low";

                    return (
                      <Card
                        key={bloodType}
                        hoverable
                        className="rounded-lg overflow-hidden border border-gray-100 transition-all hover:border-red-100"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <Title
                              level={4}
                              style={{ fontFamily: "Raleway", marginBottom: 4 }}
                            >
                              {bloodType}
                            </Title>
                            <Text
                              type="secondary"
                              style={{ fontFamily: "Raleway" }}
                            >
                              Compatible with {formData.bloodType}
                            </Text>
                          </div>
                          <Tag
                            color={
                              status === "High"
                                ? "green"
                                : status === "Moderate"
                                ? "orange"
                                : "red"
                            }
                          >
                            {status} Stock
                          </Tag>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between mb-1">
                            <Text strong style={{ fontFamily: "Raleway" }}>
                              Available Units
                            </Text>
                            <Text strong style={{ fontFamily: "Raleway" }}>
                              {units} units
                            </Text>
                          </div>
                          <Progress
                            percent={(units / 20) * 100}
                            strokeColor={
                              status === "High"
                                ? "#52c41a"
                                : status === "Moderate"
                                ? "#faad14"
                                : "#f5222d"
                            }
                            showInfo={false}
                          />
                        </div>

                        <Divider className="my-4" />

                        <Button
                          type="primary"
                          block
                          size="large"
                          onClick={() => handleScheduleTransfusion(bloodType)}
                          loading={loading}
                          style={{
                            fontFamily: "Raleway",
                            fontWeight: 600,
                            backgroundColor: "#bd0026",
                            color: "#fff",
                            borderRadius: 50,
                            height: 40,
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            transition: "all 0.3s",
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(0.95)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          Schedule Transfusion
                        </Button>
                      </Card>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <Alert
                  message="No Compatible Blood in Stock"
                  description={`We currently don't have ${formData.bloodType} blood available.`}
                  type="warning"
                  showIcon
                  className="mb-6 rounded-lg"
                  style={{ fontFamily: "Raleway" }}
                />

                <Card className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Title
                        level={4}
                        style={{ fontFamily: "Raleway", marginBottom: 0 }}
                      >
                        Donor Request Needed
                      </Title>
                      <Text type="secondary" style={{ fontFamily: "Raleway" }}>
                        We'll help you find compatible donors
                      </Text>
                    </div>
                    <Tag color="orange">Urgency: {formData.urgency}</Tag>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Text strong style={{ fontFamily: "Raleway" }}>
                        Patient Details
                      </Text>
                      <div className="mt-2">
                        <Text style={{ fontFamily: "Raleway" }}>
                          {formData.patientName}
                        </Text>
                        <Text
                          style={{ fontFamily: "Raleway" }}
                          type="secondary"
                        >
                          {formData.contact}
                        </Text>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <Text strong style={{ fontFamily: "Raleway" }}>
                        Blood Needed
                      </Text>
                      <div className="mt-2">
                        <Tag color="red" style={{ fontFamily: "Raleway" }}>
                          {formData.bloodType}
                        </Tag>
                        <Text
                          style={{ fontFamily: "Raleway" }}
                          type="secondary"
                        >
                          {formData.urgency === "Urgent"
                            ? "Urgent (Within 2 hours)"
                            : "Normal (Within 24 hours)"}
                        </Text>
                      </div>
                    </div>
                  </div>

                  {formData.notes && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <Text strong style={{ fontFamily: "Raleway" }}>
                        Additional Notes
                      </Text>
                      <Text style={{ fontFamily: "Raleway" }}>
                        {formData.notes}
                      </Text>
                    </div>
                  )}

                  <Button
                    type="primary"
                    block
                    size="large"
                    onClick={() => {
                      message.success(
                        `Donor request sent for ${formData.bloodType} blood`
                      );
                      setCurrentStep(2);
                    }}
                    style={{
                      backgroundColor: "#bd0026",
                      fontFamily: "Raleway",
                      fontWeight: 600,
                      borderColor: "#bd0026",
                    }}
                  >
                    Find Compatible Donors
                  </Button>
                </Card>
              </>
            )}

            <div className="mt-4 flex justify-center">
              <Button
                onClick={() => setCurrentStep(0)}
                size="large"
                className="flex items-center"
                style={{
                  fontFamily: "Raleway",
                  fontWeight: 600,
                  backgroundColor: "#fff",
                  border: "1px solid #bd0026",
                  color: "#bd0026",
                  borderRadius: 50,
                  height: 40,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(0.95)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Form
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: COMPLETION */}
        {currentStep === 2 && (
          <div
            className="rounded-xl p-8 shadow-sm border border-gray-100 bg-white text-center transition-all hover:shadow-md"
            style={{ backgroundColor: "#ffd8df" }}
          >
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <Title
                level={3}
                className="text-2xl font-semibold text-gray-800 mb-2"
                style={{ fontFamily: "Raleway", fontWeight: 700 }}
              >
                Request Submitted Successfully!
              </Title>
              <Text
                type="secondary"
                className="block mb-6 text-gray-500"
                style={{ fontFamily: "Raleway" }}
              >
                {isBloodAvailable
                  ? "The blood bank has been notified and will contact you shortly."
                  : "Your donor request has been broadcasted to potential donors."}
              </Text>

              <div className="bg-gray-50 p-5 rounded-lg inline-block text-left max-w-md mx-auto border border-gray-200">
                <Title
                  level={4}
                  className="text-lg font-semibold text-gray-800 mb-3"
                  style={{ fontFamily: "Raleway", fontWeight: 600 }}
                >
                  Request Summary
                </Title>
                <div className="space-y-3" style={{ fontFamily: "Raleway" }}>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Patient:</span>
                    <span className="font-medium">{formData.patientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Blood Type:</span>
                    <span className="font-medium">{formData.bloodType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Urgency:</span>
                    <span className="font-medium">
                      {formData.urgency === "Urgent"
                        ? "URGENT (2 hours)"
                        : "NORMAL (24 hours)"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium text-green-600">
                      {isBloodAvailable
                        ? "Processing at blood bank"
                        : "Waiting for donor response"}
                    </span>
                  </div>
                  {formData.notes && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Notes:</span>
                      <span className="font-medium text-right max-w-xs">
                        {formData.notes}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 space-x-4">
                <Button
                  onClick={resetForm}
                  size="large"
                  className="flex items-center mx-auto"
                  style={{
                    backgroundColor: "#bd0026",
                    fontFamily: "Raleway",
                    fontWeight: 600,
                    borderColor: "#bd0026",
                    color: "white",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Create New Request
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-steps .ant-steps-item-title {
          font-family: Raleway;
          font-weight: 600;
        }
        .custom-steps
          .ant-steps-item-process
          > .ant-steps-item-container
          > .ant-steps-item-content
          > .ant-steps-item-title {
          color: #bd0026;
        }
        .custom-steps .ant-steps-item-process .ant-steps-item-icon {
          background: #bd0026;
          border-color: #bd0026;
        }
        .custom-steps .ant-steps-item-tail::after {
          height: 2px;
        }
        .ant-card-head {
          border-bottom: none !important;
        }
        .ant-card-head-title {
          padding: 16px 0 !important;
        }
        .ant-btn-primary {
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
};

export default BloodRequests;
