import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const schema = appSchema({
  version: 1,
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
        { name: 'is_global', type: 'boolean' },
      ],
    }),
    // ... таблицы diary, recipes
  ],
});
