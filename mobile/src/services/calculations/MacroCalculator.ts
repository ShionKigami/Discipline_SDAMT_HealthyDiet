import { NUTRIENT_NORMS } from '../../constants/nutrients';
import { Goal } from '../../../../shared/types/enums';

export interface MacroTargets {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
  vitamins: { A: number; C: number; D: number; B12: number };
  minerals: { iron: number; calcium: number; potassium: number };
}

/**
 * Распределение макронутриентов по цели (F.01.02):
 *  - Похудение:     белок 30%, жиры 25%, углеводы 45%
 *  - Поддержание:   белок 25%, жиры 30%, углеводы 45%
 *  - Набор массы:   белок 25%, жиры 25%, углеводы 50%
 */
const MACRO_RATIOS: Record<Goal, { protein: number; fat: number; carbs: number }> = {
  [Goal.LOSE]:     { protein: 0.30, fat: 0.25, carbs: 0.45 },
  [Goal.MAINTAIN]: { protein: 0.25, fat: 0.30, carbs: 0.45 },
  [Goal.GAIN]:     { protein: 0.25, fat: 0.25, carbs: 0.50 },
};

/**
 * Расчёт БЖУ по калориям и цели пользователя.
 * 1 г белка = 4 ккал, 1 г жира = 9 ккал, 1 г углеводов = 4 ккал.
 */
export const calculateMacroTargets = (calories: number, goal: Goal): MacroTargets => {
  const ratios = MACRO_RATIOS[goal] ?? MACRO_RATIOS[Goal.MAINTAIN];

  return {
    calories: Math.round(calories),
    protein: Math.round((calories * ratios.protein) / 4),
    fat: Math.round((calories * ratios.fat) / 9),
    carbs: Math.round((calories * ratios.carbs) / 4),
    fiber: NUTRIENT_NORMS.fiber,
    vitamins: { ...NUTRIENT_NORMS.vitamins },
    minerals: { ...NUTRIENT_NORMS.minerals },
  };
};

/**
 * Суммирование КБЖУ по списку продуктов/ингредиентов.
 * Используется в RecipeCalculator и DiaryScreen.
 */
export const sumMacros = (
  items: Array<{ calories: number; protein: number; fat: number; carbs: number }>
) => {
  return items.reduce(
    (acc, item) => ({
      calories: acc.calories + item.calories,
      protein: acc.protein + item.protein,
      fat: acc.fat + item.fat,
      carbs: acc.carbs + item.carbs,
    }),
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
  );
};

/**
 * Пересчёт КБЖУ с учётом веса порции (F.02.04, F.03.02).
 * Принимает нутриенты на 100 г и вес порции в граммах.
 */
export const scaleMacrosByWeight = (
  per100g: { calories: number; protein: number; fat: number; carbs: number },
  weight: number
) => {
  const ratio = weight / 100;
  return {
    calories: Math.round(per100g.calories * ratio * 10) / 10,
    protein: Math.round(per100g.protein * ratio * 10) / 10,
    fat: Math.round(per100g.fat * ratio * 10) / 10,
    carbs: Math.round(per100g.carbs * ratio * 10) / 10,
  };
};
