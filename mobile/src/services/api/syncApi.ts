import { apiClient } from './client';
import { database } from '../../database';

export const syncApi = {
  pushChanges: async (changes: any[]) => {
    const response = await apiClient.post('/sync/push', { changes });
    return response.data;
  },
  pullChanges: async (lastPulledAt: number) => {
    const response = await apiClient.get('/sync/pull', { params: { lastPulledAt } });
    return response.data;
  },
};
