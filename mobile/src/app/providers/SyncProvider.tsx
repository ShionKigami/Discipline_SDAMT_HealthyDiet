import React, { useEffect } from 'react';
import { AppState } from 'react-native';
import { syncDatabase } from '../../database/sync/sync';

export const SyncProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') syncDatabase();
    });
    syncDatabase();
    return () => sub.remove();
  }, []);
  return <>{children}</>;
};
