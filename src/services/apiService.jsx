// src/services/apiService.js
import axios from 'axios';
import { API_CONFIG } from '../config/apiConfig';

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const apiService = {
  getItems: (params) => apiClient.get(API_CONFIG.ENDPOINTS.GET_ITEMS, { params }).then(res => res.data),
  createItem: (data) => apiClient.post(API_CONFIG.ENDPOINTS.GET_ITEMS, data).then(res => res.data),
  updateItem: (id, data) => apiClient.put(`${API_CONFIG.ENDPOINTS.GET_ITEMS}/${id}`, data).then(res => res.data),
  deleteItem: (id) => apiClient.delete(`${API_CONFIG.ENDPOINTS.GET_ITEMS}/${id}`).then(res => res.data),
};
