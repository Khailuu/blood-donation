import React from 'react';
import { apiInstance } from '../constants/apiInstance';
import { USER_API } from '../constants/api';

const api = apiInstance.create({ baseURL: USER_API });

export const blogService = {
   async getAllBlog(){
    try {
      const response = await api.get('/api/blogpost/get-blogpost', {
        params: {
          pageNumber: 1,
          pageSize: 100
        }
      });
      console.log({response});
      
      return response.data.data.items || [];
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
  },


  async createBlog(blogData) {
    try {
      const response = await api.post('/api/blogpost/create-blogpost', blogData);
      console.log({response});
      
      return response.data;
    } catch (error) {
      console.error("Error creating blog:", error);
      throw this._handleRequestError(error, "Failed to create blog");
    }
  },

  async updateBlog(id, blogData) {
    try {
      const response = await api.put(`/api/blogpost/update/${id}`, blogData);
      return response.data.data;
    } catch (error) {
      console.error("Error updating blog:", error);
      throw this._handleRequestError(error, "Failed to update blog");
    }
  },

  async deleteBlog(id) {
    try {
      const response = await api.delete(`/api/blogpost/delete/${id}`);
      return response.data.data;
    } catch (error) {
      console.error("Error deleting blog:", error);
      throw this._handleRequestError(error, "Failed to delete blog");
    }
  },

 
};