import { IProfileData, ICalcResult, Gender, Goal } from '../../../../shared/types/interfaces';
import { ActivityLevel } from '../../../../shared/types/enums';

export const calculateNorms = (data: IProfileData): ICalcResult => {
  // 1. Базовый метаболизм (BMR)
  let bmr = 10 * data.weight + 6.25 * data.height - 5 * data.age;
  if (data.gender === Gender.MALE) {
    bmr += 5;
  } else {
    bmr -= 161;
  }

  // 2. Суточная норма с учетом активности (TDEE)
  let calories = bmr * data.activityLevel;

  // 3. Корректировка под цель
  if (data.goal === Goal.LOSE) calories *= 0.8; // дефицит 20%
  if (data.goal === Goal.GAIN) calories *= 1.15; // профицит 15%

  // 4. Распределение БЖУ (Примерные стандарты)
  // Белки: 25%, Жиры: 30%, Углеводы: 45%
  const protein = (calories * 0.25) / 4;
  const fat = (calories * 0.30) / 9;
  const carbs = (calories * 0.45) / 4;

  // 5. Микронутриенты (базовые заглушки по нормам)
  return {
    calories: Math.round(calories),
    protein: Math.round(protein),
    fat: Math.round(fat),
    carbs: Math.round(carbs),
    fiber: 25, // г
    vitamins: { A: 900, C: 90, D: 15, B12: 2.4 },
    minerals: { iron: 18, calcium: 1000, potassium: 3500 },
  };
};
