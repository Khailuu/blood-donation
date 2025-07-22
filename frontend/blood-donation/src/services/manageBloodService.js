import { ADMIN_API } from "../constants/api";
import { apiInstance } from "../constants/apiInstance";

const api = apiInstance.create({
    baseURL: ADMIN_API
})

export const manageBloodService = {
    getAllBlood: () => api.get('')
}