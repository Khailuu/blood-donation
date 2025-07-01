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
    const response = await apiInstance.put("/api/user/update-user", data);
    return response.data;
  },
};
