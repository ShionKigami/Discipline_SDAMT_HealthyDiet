import { Model } from '@nozbe/watermelondb';
import { field, text } from '@nozbe/watermelondb/decorators';

export class ProfileModel extends Model {
  static table = 'profiles';
  @text('gender') gender!: string;
  @field('age') age!: number;
  @field('height') height!: number;
  @field('weight') weight!: number;
  @field('activity_level') activityLevel!: number;
  @text('goal') goal!: string;
  @field('target_calories') targetCalories!: number;
  @field('target_protein') targetProtein!: number;
  @field('target_fat') targetFat!: number;
  @field('target_carbs') targetCarbs!: number;
}
