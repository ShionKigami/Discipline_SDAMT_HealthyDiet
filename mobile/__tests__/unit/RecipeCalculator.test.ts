import { calculateRecipeNorms } from '../../src/services/calculations/RecipeCalculator';

describe('Пересчёт рецепта', () => {
  it('ТС-04: Смузи из 3 ингредиентов', () => {
    const ingredients = [
      { calories: 52, protein: 0.3, fat: 0.2, carbs: 14, weight: 100 }, // яблоко
      { calories: 60, protein: 3, fat: 3, carbs: 5, weight: 100 },      // йогурт
      { calories: 89, protein: 1, fat: 0.3, carbs: 23, weight: 100 },   // банан
    ];
    const r = calculateRecipeNorms(ingredients, 300);
    // Итог на 100г = (52+60+89)/3 ≈ 67 ккал
    expect(r.calories).toBeCloseTo(67, 0);
  });
});
