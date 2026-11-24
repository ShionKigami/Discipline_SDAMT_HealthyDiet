import { create } from 'zustand';
import { database } from '../database';
import { RecipeModel } from '../database/models/RecipeModel';
import { calculateRecipeNorms } from '../services/calculations/RecipeCalculator';
import { recipeApi } from '../services/api/recipeApi';

interface RecipeState {
  drafts: any[];
  myRecipes: RecipeModel[];
  isPublishing: boolean;
  addIngredient: (ing: any) => void;
  clearDraft: () => void;
  saveRecipe: (name: string, steps: string, totalWeight: number) => Promise<RecipeModel | null>;
  publishRecipe: (name: string, steps: string, totalWeight: number) => Promise<void>;
  loadMyRecipes: () => Promise<void>;
}

export const useRecipeVM = create<RecipeState>((set, get) => ({
  drafts: [],
  myRecipes: [],
  isPublishing: false,

  addIngredient: (ing) => set({ drafts: [...get().drafts, ing] }),
  clearDraft: () => set({ drafts: [] }),

  saveRecipe: async (name, steps, totalWeight) => {
    const norms = calculateRecipeNorms(get().drafts, totalWeight);
    const collection = database.get<RecipeModel>('recipes');
    let created: RecipeModel | null = null;

    await database.write(async () => {
      created = await collection.create((r: any) => {
        r.name = name;
        r.ingredients = JSON.stringify(get().drafts);
        r.steps = steps;
        r.totalWeight = totalWeight;
        r.calories = norms.calories;
        r.protein = norms.protein;
        r.fat = norms.fat;
        r.carbs = norms.carbs;
        r.isPublished = false;
        r.createdAt = Date.now();
      });
    });

    set({ drafts: [] });
    return created;
  },

  /**
   * ВИ 5, шаг 10: сохранить локально + опубликовать в общую базу.
   */
  publishRecipe: async (name, steps, totalWeight) => {
    set({ isPublishing: true });
    try {
      const norms = calculateRecipeNorms(get().drafts, totalWeight);

      // 1. Сначала сохраняем локально
      await get().saveRecipe(name, steps, totalWeight);

      // 2. Публикуем в общую базу
      await recipeApi.publishRecipe({
        name,
        ingredients: get().drafts,
        steps,
        totalWeight,
        calories: norms.calories,
        protein: norms.protein,
        fat: norms.fat,
        carbs: norms.carbs,
      });
    } finally {
      set({ isPublishing: false });
    }
  },

  loadMyRecipes: async () => {
    const collection = database.get<RecipeModel>('recipes');
    const all = await collection.query().fetch();
    set({ myRecipes: all });
  },
}));
