import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { schema } from './schema';
import { ProfileModel } from './models/ProfileModel';
import { FoodModel } from './models/FoodModel';
import { RecipeModel } from './models/RecipeModel';
import { DiaryEntryModel } from './models/DiaryEntryModel';

const adapter = new SQLiteAdapter({ schema });

export const database = new Database({
  adapter,
  modelClasses: [ProfileModel, FoodModel, RecipeModel, DiaryEntryModel],
});
