import { create } from 'zustand';
import { useAuthVM } from '../../viewmodels/useAuthVM';
import { useCalculatorVM } from '../../viewmodels/useCalculatorVM';
import { useDiaryVM } from '../../viewmodels/useDiaryVM';
import { usePlanVM } from '../../viewmodels/usePlanVM';
import { useProfileVM } from '../../viewmodels/useProfileVM';
import { useRecipeVM } from '../../viewmodels/useRecipeVM';
import { useProductVM } from '../../viewmodels/useProductVM';
import { useSearchVM } from '../../viewmodels/useSearchVM';

/**
 * Агрегатор всех ViewModels — единая точка доступа к стейту.
 * Пример: const { user, calcResult, diaryEntries } = useStore();
 */
export const useStore = create(() => ({}));

// Удобные хуки для компонентов, чтобы не импортировать каждый VM отдельно
export const useAppStore = () => ({
  auth: useAuthVM(),
  profile: useProfileVM(),
  calculator: useCalculatorVM(),
  diary: useDiaryVM(),
  plan: usePlanVM(),
  recipe: useRecipeVM(),
  product: useProductVM(),
  search: useSearchVM(),
});
