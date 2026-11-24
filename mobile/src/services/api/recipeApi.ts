import { apiClient } from './client';

export interface PublishRecipePayload {
  name: string;
  ingredients: Array<{
    name: string;
    weight: number;
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  }>;
  steps?: string;
  totalWeight: number;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export const recipeApi = {
  /**
   * Опубликовать рецепт в общую базу приложения (ВИ 5, шаг 10).
   * Рецепт становится доступен другим пользователям в разделе «Поиск → Рецепты».
   */
  publishRecipe: async (payload: PublishRecipePayload) => {
    const response = await apiClient.post('/recipes/publish', payload);
    return response.data;
  },

  /**
   * Получить публичный рецепт по id (для просмотра чужого рецепта).
   */
  getPublicRecipe: async (id: string) => {
    const response = await apiClient.get(`/recipes/public/${id}`);
    return response.data;
  },

  /**
   * Поиск по общей базе рецептов (F.06.01 — поиск продуктов и рецептов).
   */
  searchPublicRecipes: async (query: string, filters?: { minCalories?: number; maxCalories?: number }) => {
    const response = await apiClient.get('/recipes/public/search', {
      params: { q: query, ...filters },
    });
    return response.data;
  },
};
