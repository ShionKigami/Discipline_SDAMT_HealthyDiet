import { calculateNorms } from '../../src/services/calculations/MifflinSanJeor';
import { Gender, ActivityLevel, Goal } from '../../../../shared/types/enums';

describe('Формула Миффлина-Сан-Жеора', () => {
  it('ТС-01: мужчина 70кг/170см/25 лет — ~2200 ккал при средней активности', () => {
    const r = calculateNorms({ gender: Gender.MALE, weight: 70, height: 170, age: 25, activityLevel: ActivityLevel.MODERATE, goal: Goal.MAINTAIN });
    expect(r.calories).toBeGreaterThan(2000);
    expect(r.calories).toBeLessThan(2600);
  });
  it('Женщина при похудении — меньше калорий, чем при поддержании', () => {
    const base = { gender: Gender.FEMALE, weight: 60, height: 165, age: 30, activityLevel: ActivityLevel.SEDENTARY };
    const lose = calculateNorms({ ...base, goal: Goal.LOSE });
    const maintain = calculateNorms({ ...base, goal: Goal.MAINTAIN });
    expect(lose.calories).toBeLessThan(maintain.calories);
  });
});
