import { Model } from '@nozbe/watermelondb';
import { field, text, json } from '@nozbe/watermelondb/decorators';

export class RecipeModel extends Model {
  static table = 'recipes';
  @text('name') name!: string;
  @json('ingredients', (raw) => raw) ingredients!: any[];
  @field('calories') calories!: number;
  @field('protein') protein!: number;
  @field('fat') fat!: number;
  @field('carbs') carbs!: number;
}
