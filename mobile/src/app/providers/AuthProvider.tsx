import React, { useEffect } from 'react';
import { useAuthVM } from '../../viewmodels/useAuthVM';
import { tokenService } from '../../services/auth/tokenService';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuthVM();

  useEffect(() => {
    // При старте проверяем наличие токена (упрощенно)
    const checkAuth = async () => {
      const token = await tokenService.getToken();
      if (token) {
        // В реальном приложении здесь запрос /auth/me
      }
    };
    checkAuth();
  }, []);

  return <>{children}</>;
};
