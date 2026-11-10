import { create } from 'zustand';
import { calculateNorms } from '../services/calculations/MifflinSanJeor';
import { IProfileData, ICalcResult } from '../../../shared/types/interfaces';

interface CalculatorState {
  formData: IProfileData;
  result: ICalcResult | null;
  setField: (field: keyof IProfileData, value: any) => void;
  calculate: () => void;
  reset: () => void;
}

const initialForm: IProfileData = {
  gender: 'male',
  age: 25,
  height: 175,
  weight: 70,
  activityLevel: 1.55,
  goal: 'maintain',
} as any;

export const useCalculatorVM = create<CalculatorState>((set, get) => ({
  formData: initialForm,
  result: null,
  setField: (field, value) =>
    set((state) => ({ formData: { ...state.formData, [field]: value } })),
  calculate: () => {
    const result = calculateNorms(get().formData);
    set({ result });
  },
  reset: () => set({ formData: initialForm, result: null }),
}));
