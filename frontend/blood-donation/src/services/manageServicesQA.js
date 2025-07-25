import { apiInstance } from "../constants/apiInstance";
import { QA_API } from "../constants/api";

const api = apiInstance.create({
    baseURL: QA_API
})

export const manageServicesQA = {
    getQA: (pageNumber = 1, pageSize = 10) => api.get(`/get-q&a?pageNumber=${pageNumber}&pageSize=${pageSize}`) ,
    postAnswer: (payload) => api.post(`/comment`, payload),
    updateAnswer: (payload) => api.put('/comment/update', payload)
}