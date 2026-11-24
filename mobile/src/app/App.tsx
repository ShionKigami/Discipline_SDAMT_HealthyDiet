import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DatabaseProvider } from './providers/DatabaseProvider';
import { AuthProvider } from './providers/AuthProvider';
import { RootNavigator } from '../navigation/RootNavigator';

export const App = () => {
  return (
    <SafeAreaProvider>
      <DatabaseProvider>
        <AuthProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </AuthProvider>
      </DatabaseProvider>
    </SafeAreaProvider>
  );
};
