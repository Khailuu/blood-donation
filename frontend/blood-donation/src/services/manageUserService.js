import { USER_API } from "../constants/api";
import { apiInstance } from "../constants/apiInstance";

const api = apiInstance.create({
    baseURL: USER_API
})

export const manageUserService = {
   login: (payload) => api.post("/example", payload),
   getUsers: (pageNumber = 1, pageSize = 10) => api.get(`/api/admin/get-users?pageNumber=${pageNumber}&pageSize=${pageSize}`),
   updateUser: (payload) => {
    console.log(payload);
    return api.put(`/api/admin/update-user`, payload)
   }
}