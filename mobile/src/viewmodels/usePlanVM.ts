import { create } from 'zustand';
import { database } from '../database';
import { RecipeModel } from '../database/models/RecipeModel';

interface PlanState {
  plan: any[];
  isGenerating: boolean;
  generate: (targetCalories: number, exclusions: string[]) => Promise<void>;
}

export const usePlanVM = create<PlanState>((set) => ({
  plan: [],
  isGenerating: false,
  generate: async (targetCalories, exclusions) => {
    set({ isGenerating: true });
    const collection = database.get<RecipeModel>('recipes');
    const all = await collection.query().fetch();
    const filtered = all.filter(r => !exclusions.some(e => r.name.toLowerCase().includes(e.toLowerCase())));
    // Простой алгоритм: 4 приёма пищи = завтрак/обед/ужин/перекус
    const perMeal = targetCalories / 4;
    const days = 7;
    const plan: any[] = [];
    for (let d = 0; d < days; d++) {
      const day = { day: d + 1, meals: [] as any[] };
      ['Завтрак', 'Обед', 'Ужин', 'Перекус'].forEach((meal, idx) => {
        const candidates = filtered.filter(r => Math.abs(r.calories - perMeal) < perMeal * 0.5);
        const picked = candidates[d % Math.max(candidates.length, 1)] || filtered[0];
        if (picked) day.meals.push({ meal, recipe: picked });
      });
      plan.push(day);
    }
    set({ plan, isGenerating: false });
  },
}));
