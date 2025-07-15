import { BLOG_API } from "../constants/api";
import { apiInstance } from "../constants/apiInstance";

const api = apiInstance.create({
    baseURL: BLOG_API
})

export const manageBlogService = {
   getBlogs: (pageNumber = 1, pageSize = 10) => api.get(`/get-blogpost?pageNumber=${pageNumber}&pageSize=${pageSize}`),
   getBlogById: (id) => api.get(`/get-blog/${id}`),
   createBlog: (payload) => api.post("/create-blogpost", payload),
   updateBlog: (id,payload) => api.put(`/update-blog/${id}`, payload),
   deleteBlog: (id) => api.delete(`/delete/${id}`)
}