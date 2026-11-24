import { create } from 'zustand';
import { database } from '../database';
import { RecipeModel } from '../database/models/RecipeModel';
import { calculateRecipeNorms } from '../services/calculations/RecipeCalculator';

interface RecipeState {
  drafts: any[];
  addIngredient: (ing: any) => void;
  clearDraft: () => void;
  saveRecipe: (name: string, steps: string, totalWeight: number) => Promise<void>;
  myRecipes: RecipeModel[];
  loadMyRecipes: () => Promise<void>;
}

export const useRecipeVM = create<RecipeState>((set, get) => ({
  drafts: [],
  myRecipes: [],
  addIngredient: (ing) => set({ drafts: [...get().drafts, ing] }),
  clearDraft: () => set({ drafts: [] }),
  saveRecipe: async (name, steps, totalWeight) => {
    const norms = calculateRecipeNorms(get().drafts, totalWeight);
    const collection = database.get<RecipeModel>('recipes');
    await database.write(async () => {
      await collection.create((r: any) => {
        r.name = name;
        r.ingredients = get().drafts;
        r.calories = norms.calories;
        r.protein = norms.protein;
        r.fat = norms.fat;
        r.carbs = norms.carbs;
      });
    });
    set({ drafts: [] });
  },
  loadMyRecipes: async () => {
    const collection = database.get<RecipeModel>('recipes');
    const all = await collection.query().fetch();
    set({ myRecipes: all });
  },
}));
