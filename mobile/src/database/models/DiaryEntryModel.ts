import { Model } from '@nozbe/watermelondb';
import { field, text } from '@nozbe/watermelondb/decorators';

export class DiaryEntryModel extends Model {
  static table = 'diary_entries';
  @text('date') date!: string;
  @text('product_id') productId!: string;
  @field('weight') weight!: number;
  @field('calories') calories!: number;
  @field('protein') protein!: number;
  @field('fat') fat!: number;
  @field('carbs') carbs!: number;
}
