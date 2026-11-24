import { create } from 'zustand';
import { database } from '../database';
import { FoodModel } from '../database/models/FoodModel';
import { DiaryEntryModel } from '../database/models/DiaryEntryModel';

interface DiaryState {
  entries: DiaryEntryModel[];
  loadEntries: (date: string) => Promise<void>;
  addEntry: (product: FoodModel, weight: number, date: string) => Promise<void>;
}

export const useDiaryVM = create<DiaryState>((set) => ({
  entries: [],
  loadEntries: async (date) => {
    const collection = database.get<DiaryEntryModel>('diary_entries');
    const entries = await collection.query().fetch();
    set({ entries: entries.filter(e => e.date === date) });
  },
  addEntry: async (product, weight, date) => {
    const collection = database.get<DiaryEntryModel>('diary_entries');
    const ratio = weight / 100;
    await database.write(async () => {
      await collection.create((entry) => {
        entry.date = date;
        entry.productId = product.id;
        entry.weight = weight;
        entry.calories = product.calories * ratio;
        entry.protein = product.protein * ratio;
        entry.fat = product.fat * ratio;
        entry.carbs = product.carbs * ratio;
      });
    });
    // Перезагрузка после добавления
    const updatedEntries = await collection.query().fetch();
    set({ entries: updatedEntries.filter(e => e.date === date) });
  },
}));
