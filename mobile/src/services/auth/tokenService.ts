import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@smart_nutrition_token';

export const tokenService = {
  saveToken: async (token: string) => await AsyncStorage.setItem(TOKEN_KEY, token),
  getToken: async () => await AsyncStorage.getItem(TOKEN_KEY),
  removeToken: async () => await AsyncStorage.removeItem(TOKEN_KEY),
};
