import { USER_API } from "../constants/api";
import { apiInstance } from "../constants/apiInstance";

const api = apiInstance.create({
  baseURL: USER_API,
});

export const manageUserService = {
   login: (payload) => api.post("/example", payload),
   getUsers: (pageNumber = 1, pageSize = 10) => api.get(`/api/admin/get-users?pageNumber=${pageNumber}&pageSize=${pageSize}`),
   updateUser: (payload) => {
    console.log(payload);
    return api.put(`/api/admin/update-user`, payload)
   }
}
export const userService = {

  async getAllUser(){
    try {
      const response = await api.get("api/user/get-users", {
        params: {
          pageNumber: 1,
          pageSize: 100,
        },
      });
      console.log({ response });

      return response.data.data.items;
    } catch (error) {
      console.error("Error fetching blood types:", error);
      return [];
    }
  },

  async getCurrentUser() {
    const response = await api.get("/api/user/get-current-users");
    return response.data.data;
  },

  async updateProfile(data) {
    const response = await api.put("/api/user/update-current-user", data);
    console.log({response});
    
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
      console.log({ response });

      return response.data.data.items;
    } catch (error) {
      console.error("Error fetching blood types:", error);
      return [];
    }
  },

  async getBloodStored() {
    try {
      const response = await api.get("/api/blood/get-blood-stored", {
        params: {
          pageNumber: 1,
          pageSize: 100,
        },
      });
      return response.data.data.items;
    } catch (error) {
      console.error("Error fetching blood stored:", error);
      return [];
    }
  },

  async addBloodStored(data) {
    try {
      const response = await api.post("/api/blood/update-blood-stored", data);
      return response.data;
    } catch (error) {
      console.error("Error adding blood stored:", error);
      throw error;
    }
  },

  async updateBloodStored(data) {
    try {
      const response = await api.put("/api/blood/update-blood-stored", data);
      return response.data;
    } catch (error) {
      console.error("Error updating blood stored:", error);
      throw error;
    }
  },
};
