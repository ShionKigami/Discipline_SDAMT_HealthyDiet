import { synchronize } from '@nozbe/watermelondb/sync';
import { database } from '../index';
import { syncApi } from '../../services/api/syncApi';

export const syncDatabase = async () => {
  try {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await syncApi.pullChanges(lastPulledAt || 0);
        return { changes: response.changes, timestamp: response.timestamp };
      },
      pushChanges: async ({ changes }) => {
        await syncApi.pushChanges(changes);
      },
      migrationsEnabledAtVersion: 1,
    });
  } catch (e) {
    console.warn('Sync failed (offline mode):', e);
  }
};
