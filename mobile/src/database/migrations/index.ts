import { schemaMigrations, addColumns, createTable } from '@nozbe/watermelondb/Schema/migrations';

export const migrations = schemaMigrations({
  migrations: [
    {
      // v1 → v2: добавлены таблицы recipes и diary_entries, поля в profiles
      toVersion: 2,
      steps: [
        createTable({
          name: 'recipes',
          columns: [
            { name: 'name', type: 'string', isIndexed: true },
            { name: 'ingredients', type: 'string' },
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
        createTable({
          name: 'diary_entries',
          columns: [
            { name: 'date', type: 'string', isIndexed: true },
            { name: 'product_id', type: 'string', isOptional: true, isIndexed: true },
            { name: 'recipe_id', type: 'string', isOptional: true, isIndexed: true },
            { name: 'meal_type', type: 'string', isOptional: true },
            { name: 'weight', type: 'number' },
            { name: 'calories', type: 'number' },
            { name: 'protein', type: 'number' },
            { name: 'fat', type: 'number' },
            { name: 'carbs', type: 'number' },
            { name: 'created_at', type: 'number' },
          ],
        }),
        addColumns({
          table: 'profiles',
          columns: [
            { name: 'target_fiber', type: 'number', isOptional: true },
            { name: 'target_vitamins', type: 'string', isOptional: true },
            { name: 'target_minerals', type: 'string', isOptional: true },
            { name: 'exclusions', type: 'string', isOptional: true },
            { name: 'updated_at', type: 'number', isOptional: true },
          ],
        }),
        addColumns({
          table: 'products',
          columns: [
            { name: 'fiber', type: 'number', isOptional: true },
            { name: 'vitamins', type: 'string', isOptional: true },
            { name: 'minerals', type: 'string', isOptional: true },
            { name: 'barcode', type: 'string', isOptional: true, isIndexed: true },
            { name: 'brand', type: 'string', isOptional: true },
            { name: 'created_at', type: 'number', isOptional: true },
          ],
        }),
      ],
    },
  ],
});
