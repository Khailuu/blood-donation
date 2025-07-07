import { Button, Typography, message } from "antd";
import React, { useState } from "react";
const { Title } = Typography;

const Save = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

const BloodRequests = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    bloodType: "A+",
    urgency: "Urgent",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    message.success("Blood request submitted successfully!");
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen w-full p-6 md:p-10">
      <div className="max-w-4xl mx-auto ">
        <div className="mb-8 text-center">
          <Title
            className="text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Raleway" }}
          >
            Create Urgent Blood Request
          </Title>
          <p className="text-gray-600 mt-2">
            Submit a request for blood donation
          </p>
        </div>

        <div className="rounded-3xl p-8 shadow-lg border bg-[#ffd9e0]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-600" style={{ fontFamily: "Raleway" , fontWeight: 600 }}>
                  Patient Name*
                </label>
                <input
                  type="text"
                  value={formData.patientName}
                  onChange={(e) =>
                    handleInputChange("patientName", e.target.value)
                  }
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  placeholder="Patient's full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-600" style={{ fontFamily: "Raleway" , fontWeight: 600 }}>
                  Blood Type*
                </label>
                <select
                  value={formData.bloodType}
                  onChange={(e) =>
                    handleInputChange("bloodType", e.target.value)
                  }
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 appearance-none shadow-sm bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                  required
                >
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

              <div className="space-y-2 md:col-span-2" >
                <label className="block text-sm font-medium text-gray-600" style={{ fontFamily: "Raleway" , fontWeight: 600 }}>
                  Urgency Level*
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleInputChange("urgency", "Urgent")}
                    className={`p-4 border rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 ${
                      formData.urgency === "Urgent"
                        ? "border-red-500 bg-red-50 text-red-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {formData.urgency === "Urgent" && (
                      <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                    )}
                    <span style={{ fontFamily: "Raleway"  }}>Urgent (Within 2 hours)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange("urgency", "Normal")}
                    className={`p-4 border rounded-xl transition-all duration-200 ${
                      formData.urgency === "Normal"
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={{ fontFamily: "Raleway"  }}
                  >
                    Normal (Within 24 hours)
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600" style={{ fontFamily: "Raleway" , fontWeight: 600 }}>
                Additional Notes
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 shadow-sm min-h-[120px]"
                placeholder="Specify required blood amount, patient condition, contact information..."
              ></textarea>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                onClick={() =>
                  setFormData({
                    patientName: "",
                    bloodType: "A+",
                    urgency: "Urgent",
                    notes: "",
                  })
                }
                className="px-8 py-3 rounded-xl  font-medium "
                style={{
                  borderRadius: 8,
                  height: 48,
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#bd0026",
                  border: "1px solid #bd0026",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
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
                type="submit"
                className="px-8 py-3 rounded-xl shadow-md hover:shadow-lg flex items-center gap-2"
                style={{
                  borderRadius: 8,
                  height: 48,
                  fontWeight: 600,
                  fontSize: 16,
                  backgroundColor: "#bd0026",
                  color: "#fff",
                  border: "1px solid #bd0026",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(0.95)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Save className="h-5 w-5" />
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BloodRequests;
