import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const schema = appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: 'profiles',
      columns: [
        { name: 'gender', type: 'string' },
        { name: 'age', type: 'number' },
        { name: 'height', type: 'number' },
        { name: 'weight', type: 'number' },
        { name: 'activity_level', type: 'number' },
        { name: 'goal', type: 'string' },
        { name: 'target_calories', type: 'number', isOptional: true },
        { name: 'target_protein', type: 'number', isOptional: true },
        { name: 'target_fat', type: 'number', isOptional: true },
        { name: 'target_carbs', type: 'number', isOptional: true },
        { name: 'target_fiber', type: 'number', isOptional: true },
        { name: 'target_vitamins', type: 'string', isOptional: true },   // JSON
        { name: 'target_minerals', type: 'string', isOptional: true },   // JSON
        { name: 'exclusions', type: 'string', isOptional: true },        // F.02.02 — исключения
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'products',
      columns: [
        { name: 'name', type: 'string', isIndexed: true },
        { name: 'calories', type: 'number' },
        { name: 'protein', type: 'number' },
        { name: 'fat', type: 'number' },
        { name: 'carbs', type: 'number' },
        { name: 'fiber', type: 'number', isOptional: true },
        { name: 'vitamins', type: 'string', isOptional: true },  // JSON
        { name: 'minerals', type: 'string', isOptional: true },  // JSON
        { name: 'is_global', type: 'boolean' },
        { name: 'barcode', type: 'string', isOptional: true, isIndexed: true },
        { name: 'brand', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'recipes',
      columns: [
        { name: 'name', type: 'string', isIndexed: true },
        { name: 'ingredients', type: 'string' },     // JSON
        { name: 'steps', type: 'string', isOptional: true },
        { name: 'total_weight', type: 'number' },
        { name: 'calories', type: 'number' },
        { name: 'protein', type: 'number' },
        { name: 'fat', type: 'number' },
        { name: 'carbs', type: 'number' },
        { name: 'is_published', type: 'boolean', isOptional: true },
        { name: 'author_id', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'diary_entries',
      columns: [
        { name: 'date', type: 'string', isIndexed: true },
        { name: 'product_id', type: 'string', isOptional: true, isIndexed: true },
        { name: 'recipe_id', type: 'string', isOptional: true, isIndexed: true },
        { name: 'meal_type', type: 'string', isOptional: true },  // завтрак/обед/ужин/перекус
        { name: 'weight', type: 'number' },
        { name: 'calories', type: 'number' },
        { name: 'protein', type: 'number' },
        { name: 'fat', type: 'number' },
        { name: 'carbs', type: 'number' },
        { name: 'created_at', type: 'number' },
      ],
    }),
  ],
});
