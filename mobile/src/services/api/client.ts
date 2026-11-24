import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.smart-nutrition.dev', // Замените на реальный URL
  timeout: 10000,
});
