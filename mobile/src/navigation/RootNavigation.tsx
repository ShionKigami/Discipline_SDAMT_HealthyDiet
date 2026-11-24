import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainTabs } from './MainTabs';
import { AuthStack } from './AuthStack';
import { useAuthVM } from '../viewmodels/useAuthVM';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const { user } = useAuthVM();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Main" component={MainTabs} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};
