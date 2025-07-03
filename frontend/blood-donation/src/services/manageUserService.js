import { USER_API } from "../constants/api";
import { apiInstance } from "../constants/apiInstance";

const api = apiInstance.create({
  baseURL: USER_API,
});

export const userService = {
  async getCurrentUser() {
    const response = await api.get("/api/user/get-current-users");
    return response.data.data;
  },

  async updateProfile(data) {
    const response = await api.put("/api/user/update-current-user", data);
    return response.data;
  },

  async getBloodTypes() {
    try {
      const response = await api.get("/api/blood/get-blood-Type", {
      params: {
        pageNumber: 1,
        pageSize: 100, 
      },
    });
    console.log({response});
    
      return response.data.data.items; 
    } catch (error) {
      console.error("Error fetching blood types:", error);
      return [];
    }
  }
};
