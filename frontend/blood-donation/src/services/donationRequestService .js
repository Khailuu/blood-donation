import { USER_API } from "../constants/api";
import { apiInstance } from "../constants/apiInstance";

const api = apiInstance.create({ baseURL: USER_API });

export const donationRequestService = {
  async createDonationRequest(requestData) {
    try {
      const response = await api.post(
        "/api/blood-donation/create-request-for-donor",
        requestData
      );
      console.log({response});
      
      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to create donation request");
      throw error;
    }
  },

  async getAllDonationRequests(params = {}) {
    try {
      const response = await api.get(
        "/api/blood-donation/get-requests-to-approve",
        { params }
      );
      console.log({ response });

      return {
        data: response.data.data,
        total: response.data.total,
        page: response.data.page,
        limit: response.data.limit,
      };
    } catch (error) {
      this._handleRequestError(error, "Failed to fetch donation requests");
      throw error;
    }
  },

  async getMyDonationRequests(userId) {
    try {
      const response = await api.get(
        "/api/blood-donation/get-requests-to-approve",
        {
          params: { userId },
        }
      );
      console.log(response);

      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to fetch your donation requests");
      throw error;
    }
  },

  async getDonationRequestById(id) {
    try {
      const response = await api.get(
        `/api/blood-donation/get-requests-to-approve/${id}`
      );
      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to fetch donation request");
      throw error;
    }
  },

  // Update donation request
  async updateDonationRequest(id, updateData) {
    try {
      const response = await api.patch(
        `/api/blood-donation/requests/${id}`,
        updateData
      );
      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to update donation request");
      throw error;
    }
  },

  // Approve donation request
  async approveDonationRequest(id) {
    try {
      const response = await api.patch(
        `/api/blood-donation/requests/${id}/approve`
      );
      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to approve donation request");
      throw error;
    }
  },

  // Reject donation request
  async rejectDonationRequest(id, reason) {
    try {
      const response = await api.patch(
        `/api/blood-donation/requests/${id}/reject`,
        { reason }
      );
      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to reject donation request");
      throw error;
    }
  },

  // Complete donation request
  async completeDonationRequest(id) {
    try {
      const response = await api.patch(
        `/api/blood-donation/requests/${id}/complete`
      );
      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to mark donation as completed");
      throw error;
    }
  },

  // Get donation requests by user
  async getDonationRequestsByUser(userId, params = {}) {
    try {
      const response = await api.get(`/api/users/${userId}/donation-requests`, {
        params,
      });
      return response.data;
    } catch (error) {
      this._handleRequestError(
        error,
        "Failed to fetch user's donation requests"
      );
      throw error;
    }
  },

  // Get upcoming appointments
  async getUpcomingAppointments() {
    try {
      const response = await api.get(
        "/api/blood-donation/upcoming-appointments"
      );
      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to fetch upcoming appointments");
      throw error;
    }
  },

  // Get donation statistics
  async getDonationStatistics() {
    try {
      const response = await api.get("/api/blood-donation/statistics");
      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to fetch donation statistics");
      throw error;
    }
  },

  // Handle request errors
  _handleRequestError(error, defaultMessage = "Request donation error") {
    const errorMessage = error.response?.data?.message || defaultMessage;
    console.error(errorMessage, error);
    throw new Error(errorMessage);
  },

  // Setup interceptors
  _setupInterceptors() {
    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          console.error("Unauthorized access - please login again");
        } else if (error.response?.status === 403) {
          // Handle forbidden access
          console.error(
            "Forbidden - you don't have permission for this action"
          );
        } else if (error.response?.status === 404) {
          // Handle not found
          console.error("Resource not found");
        } else if (error.response?.status >= 500) {
          // Handle server errors
          console.error("Server error - please try again later");
        }
        return Promise.reject(error);
      }
    );
  },
};

// Initialize interceptors
donationRequestService._setupInterceptors();
