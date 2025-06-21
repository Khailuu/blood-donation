import { USER_API } from "../constants/api";
import { apiInstance } from "../constants/apiInstance";

const api = apiInstance.create({ baseURL: USER_API });

export const authService = {
  // Đăng nhập
  async login(email, password) {
    try {
      const response = await api.post("/api/auth/login", { email, password });
      const { accessToken, refreshToken, role, name } = response.data.data;

      // Map role number to string
      let roleStr = "member";
      if (role === 1) roleStr = "admin";
      else if (role === 2) roleStr = "staff";

      // Lưu vào localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem(
        "user",
        JSON.stringify({
          role: roleStr,
          email,
          name: name || email.split("@")[0],
        })
      );

      return response.data;
    } catch (error) {
      this._handleAuthError(error);
      throw error;
    }
  },

  // Đăng ký
  async register(userData) {
    try {
      const response = await api.post("/api/auth/register", userData);
      return response.data;
    } catch (error) {
      this._handleAuthError(error);
      throw error;
    }
  },

  // Refresh token
  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await api.post("/api/auth/refresh", { refreshToken });
      this._storeAuthData(response.data);
      return response.data;
    } catch (error) {
      this.logout();
      throw error;
    }
  },

  // Đăng xuất
  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  },

  // Lấy thông tin user hiện tại
  getCurrentUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  // Kiểm tra role
  hasRole(role) {
    const user = this.getCurrentUser();
    return user?.role === role;
  },

  // Helper methods
  _storeAuthData(data) {
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("user", JSON.stringify(data.user));
  },

  _handleAuthError(error) {
    if (error.response?.status === 401) {
      this.logout();
    }
    throw new Error(error.response?.data?.message || "Authentication error");
  },

  // Setup interceptors
  _setupInterceptors() {
    api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            await authService.refreshToken();
            return api(originalRequest);
          } catch (refreshError) {
            authService.logout();
            window.location.href = "/login";
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );
  },
};

// Khởi tạo interceptor
authService._setupInterceptors();
