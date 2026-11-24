export const calculateRecipeNorms = (ingredients: { calories: number, protein: number, fat: number, carbs: number, weight: number }[], totalWeight: number) => {
  const total = ingredients.reduce((acc, item) => {
    const ratio = item.weight / 100;
    return {
      calories: acc.calories + item.calories * ratio,
      protein: acc.protein + item.protein * ratio,
      fat: acc.fat + item.fat * ratio,
      carbs: acc.carbs + item.carbs * ratio,
    };
  }, { calories: 0, protein: 0, fat: 0, carbs: 0 });

  const factor = totalWeight > 0 ? 100 / totalWeight : 1;

  return {
    calories: Math.round(total.calories * factor),
    protein: Math.round(total.protein * factor),
    fat: Math.round(total.fat * factor),
    carbs: Math.round(total.carbs * factor),
  };
};
