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
      console.log({ response });

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

  //approve
  async approveDonationRequest(requestId) {
    try {
      const response = await api.put(
        "/api/blood-donation/confirm-request-for-staff",
        { requestId }
      );

      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to confirm donation request");
      throw error;
    }
  },

  //reject
  async rejectDonationRequest(requestId) {
    try {
      const response = await api.patch(
        "/api/blood-donation/cancel-request",
        { requestId }
      );
      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to reject donation request");
      throw error;
    }
  },

  async getApprovedDonationRequests() {
    try {
      const response = await api.get(
        "/api/blood-donation/get-requests-to-complete"
      );
      return response.data.data.items || [];
    } catch (error) {
      this._handleRequestError(
        error,
        "Failed to fetch approved donation requests"
      );
      throw error;
    }
  },

  async completeDonationRequest(requestId) {
    try {
      const response = await api.put(`/api/blood-donation/conplete-request-for-staff`,{requestId});
      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to complete donation request");
      throw error;
    }
  },

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
