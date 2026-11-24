import { create } from 'zustand';
import { database } from '../database';
import { FoodModel } from '../database/models/FoodModel';

interface ProductState {
  addProduct: (data: any) => Promise<void>;
  checkDuplicate: (name: string) => Promise<boolean>;
}

export const useProductVM = create<ProductState>(() => ({
  checkDuplicate: async (name) => {
    const collection = database.get<FoodModel>('products');
    const all = await collection.query().fetch();
    return all.some(p => p.name.toLowerCase() === name.toLowerCase());
  },
  addProduct: async (data) => {
    const collection = database.get<FoodModel>('products');
    await database.write(async () => {
      await collection.create((p: any) => Object.assign(p, data));
    });
  },
}));
