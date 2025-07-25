import { apiInstance } from "../constants/apiInstance";
import { QA_API } from "../constants/api";

const api = apiInstance.create({
    baseURL: QA_API
})

export const manageServicesQA = {
    postQA: (payload) => api.post('/create-q&a-question', payload),
    getQA: (pageNumber = 1, pageSize = 10) => api.get(`/get-q&a?pageNumber=${pageNumber}&pageSize=${pageSize}`) ,
    postAnswer: (payload) => {
        console.log(payload);
        return api.post(`/comment`, payload)
    },
    updateAnswer: (payload) => api.put('/comment/update', payload),
    deleteQA: (id) => api.delete(`/delete/${id}`),
    deleteComment: (id) => api.delete(`/comment/delete/${id}`)
}