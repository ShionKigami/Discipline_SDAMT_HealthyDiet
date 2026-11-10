// mobile/src/navigation/MainTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CalculatorScreen } from '../screens/Calculator/CalculatorScreen';
import { NormsScreen } from '../screens/Calculator/NormsScreen';
import { DiaryScreen } from '../screens/Diary/DiaryScreen';
import { PlanScreen } from '../screens/Plan/PlanScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Профиль" component={ProfileScreen} />
      <Tab.Screen name="План" component={PlanScreen} />
      <Tab.Screen name="Дневник" component={DiaryScreen} />
      <Tab.Screen name="Калькулятор" component={CalculatorScreen} />
      <Tab.Screen name="Нормы" component={NormsScreen} />
    </Tab.Navigator>
  );
};
