import { create } from 'zustand';
import { database } from '../database';
import { FoodModel } from '../database/models/FoodModel';
import { RecipeModel } from '../database/models/RecipeModel';

interface SearchState {
  results: any[];
  filterMin: number | null;
  filterMax: number | null;
  setFilters: (min: number | null, max: number | null) => void;
  search: (q: string, section: 'products' | 'recipes') => Promise<void>;
}

export const useSearchVM = create<SearchState>((set, get) => ({
  results: [],
  filterMin: null,
  filterMax: null,
  setFilters: (min, max) => set({ filterMin: min, filterMax: max }),
  search: async (q, section) => {
    let items: any[] = [];
    if (section === 'products') {
      const col = database.get<FoodModel>('products');
      const all = await col.query().fetch();
      items = all.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
    } else {
      const col = database.get<RecipeModel>('recipes');
      const all = await col.query().fetch();
      items = all.filter(r => r.name.toLowerCase().includes(q.toLowerCase()));
    }
    const { filterMin, filterMax } = get();
    if (filterMin !== null) items = items.filter(i => i.calories >= filterMin);
    if (filterMax !== null) items = items.filter(i => i.calories <= filterMax);
    set({ results: items });
  },
}));
