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
      return response.data.data.items;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
  },

  async getDonationRequestById(id) {
    try {
      const response = await api.get(
        `/api/blogpost/get-blogpost/${id}`
      );
      return response.data;
    } catch (error) {
      this._handleRequestError(error, "Failed to fetch donation request");
      throw error;
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

  // Like blog
  async likeBlog(blogId, userId) {
    try {
      const response = await api.post(`/api/blogpost/like/${blogId}`, { userId });
      return response.data.data;
    } catch (error) {
      console.error("Error liking blog:", error);
      throw this._handleRequestError(error, "Failed to like blog");
    }
  },

  // Unlike blog
  async unlikeBlog(blogId, userId) {
    try {
      const response = await api.post(`/api/blogpost/unlike/${blogId}`, { userId });
      return response.data.data;
    } catch (error) {
      console.error("Error unliking blog:", error);
      throw this._handleRequestError(error, "Failed to unlike blog");
    }
  },

  // Xử lý lỗi chung
  _handleRequestError(error, defaultMessage) {
    const errorMessage = error.response?.data?.message || defaultMessage;
    console.error(errorMessage, error);
    return new Error(errorMessage);
  }
};