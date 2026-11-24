import { apiClient } from './client';
import { tokenService } from '../auth/tokenService';

export const authApi = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post('/auth/login', { email, password });
    await tokenService.saveToken(response.data.token);
    return response.data;
  },
  register: async (email: string, password: string, profileData: any) => {
    const response = await apiClient.post('/auth/register', { email, password, ...profileData });
    await tokenService.saveToken(response.data.token);
    return response.data;
  },
};
