import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { EditProfileScreen } from '../screens/Profile/EditProfileScreen';
import { EducationScreen } from '../screens/Profile/EducationScreen';
import { PlanScreen } from '../screens/Plan/PlanScreen';
import { PlanSettingsScreen } from '../screens/Plan/PlanSettingsScreen';
import { EditPlanScreen } from '../screens/Plan/EditPlanScreen';
import { DiaryScreen } from '../screens/Diary/DiaryScreen';
import { AddToDiaryScreen } from '../screens/Diary/AddToDiaryScreen';
import { SearchScreen } from '../screens/Search/SearchScreen';
import { CreateRecipeScreen } from '../screens/Recipes/CreateRecipeScreen';
import { MyRecipesScreen } from '../screens/Recipes/MyRecipesScreen';
import { RecipeDetailsScreen } from '../screens/Recipes/RecipeDetailsScreen';
import { AddProductScreen } from '../screens/Products/AddProductScreen';
import { ScannerScreen } from '../screens/Products/ScannerScreen';
import { CalculatorScreen } from '../screens/Calculator/CalculatorScreen';
import { NormsScreen } from '../screens/Calculator/NormsScreen';

const ProfileStack = createStackNavigator();
const ProfileNav = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профиль' }} />
    <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Редактировать' }} />
    <ProfileStack.Screen name="Education" component={EducationScreen} options={{ title: 'Обучение' }} />
    <ProfileStack.Screen name="Calculator" component={CalculatorScreen} options={{ title: 'Калькулятор' }} />
    <ProfileStack.Screen name="Norms" component={NormsScreen} options={{ title: 'Нормы' }} />
    <ProfileStack.Screen name="AddProduct" component={AddProductScreen} options={{ title: 'Новый продукт' }} />
    <ProfileStack.Screen name="Scanner" component={ScannerScreen} options={{ title: 'Сканер' }} />
    <ProfileStack.Screen name="MyRecipes" component={MyRecipesScreen} options={{ title: 'Мои рецепты' }} />
    <ProfileStack.Screen name="CreateRecipe" component={CreateRecipeScreen} options={{ title: 'Новый рецепт' }} />
    <ProfileStack.Screen name="RecipeDetails" component={RecipeDetailsScreen} options={{ title: 'Рецепт' }} />
  </ProfileStack.Navigator>
);

const PlanStack = createStackNavigator();
const PlanNav = () => (
  <PlanStack.Navigator>
    <PlanStack.Screen name="Plan" component={PlanScreen} options={{ title: 'План питания' }} />
    <PlanStack.Screen name="PlanSettings" component={PlanSettingsScreen} options={{ title: 'Настройки' }} />
    <PlanStack.Screen name="EditPlan" component={EditPlanScreen} options={{ title: 'Редактировать план' }} />
  </PlanStack.Navigator>
);

const DiaryStack = createStackNavigator();
const DiaryNav = () => (
  <DiaryStack.Navigator>
    <DiaryStack.Screen name="Diary" component={DiaryScreen} options={{ title: 'Дневник' }} />
    <DiaryStack.Screen name="AddToDiary" component={AddToDiaryScreen} options={{ title: 'Добавить' }} />
    <DiaryStack.Screen name="Search" component={SearchScreen} options={{ title: 'Поиск' }} />
  </DiaryStack.Navigator>
);

const Tab = createBottomTabNavigator();
export const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Профиль" component={ProfileNav} options={{ headerShown: false }} />
    <Tab.Screen name="План" component={PlanNav} options={{ headerShown: false }} />
    <Tab.Screen name="Дневник" component={DiaryNav} options={{ headerShown: false }} />
  </Tab.Navigator>
);
