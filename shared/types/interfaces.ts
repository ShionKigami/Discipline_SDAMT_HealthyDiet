export interface IProfileData {
  gender: Gender;
  age: number;
  height: number; // см
  weight: number; // кг
  activityLevel: ActivityLevel;
  goal: Goal;
}

export interface ICalcResult {
  calories: number;
  protein: number; // г
  fat: number; // г
  carbs: number; // г
  fiber: number;
  vitamins: { A: number; C: number; D: number; B12: number };
  minerals: { iron: number; calcium: number; potassium: number };
}
