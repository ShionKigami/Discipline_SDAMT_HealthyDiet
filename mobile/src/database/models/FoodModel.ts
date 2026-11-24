import { Model } from '@nozbe/watermelondb';
import { field, text, readonly } from '@nozbe/watermelondb/decorators';

export class FoodModel extends Model {
  static table = 'products';
  @text('name') name!: string;
  @field('calories') calories!: number;
  @field('protein') protein!: number;
  @field('fat') fat!: number;
  @field('carbs') carbs!: number;
  @field('is_global') isGlobal!: boolean;
}
