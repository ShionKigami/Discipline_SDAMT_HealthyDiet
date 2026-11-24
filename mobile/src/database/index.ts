import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { schema } from './schema';
import { migrations } from './migrations';
import { ProfileModel } from './models/ProfileModel';
import { FoodModel } from './models/FoodModel';
import { RecipeModel } from './models/RecipeModel';
import { DiaryEntryModel } from './models/DiaryEntryModel';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: (error) => {
    console.error('WatermelonDB setup error:', error);
  },
});

export const database = new Database({
  adapter,
  modelClasses: [ProfileModel, FoodModel, RecipeModel, DiaryEntryModel],
});
