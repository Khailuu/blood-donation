import { BLOOD_API } from "../constants/api";
import { apiInstance } from "../constants/apiInstance";

const api = apiInstance.create({
    baseURL: BLOOD_API
})

export const manageBloodService = {
    getAllBlood: () => api.get('/')
}