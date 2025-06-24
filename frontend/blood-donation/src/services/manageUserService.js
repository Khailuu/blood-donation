import { USER_API } from "../constants/api";
import { apiInstance } from "../constants/apiInstance";

const api = apiInstance.create({
    baseURL: USER_API
})

export const manageUserService = {
   login: (payload) => api.post("/example", payload),
   getUser: () => api.get('/get-user'),
   updagteUser: (id,payload) => api.put(`/update-user/${id}`, payload)
}