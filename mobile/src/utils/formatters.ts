export const formatDate = (d: Date): string => d.toISOString().split('T')[0];
export const formatCalories = (n: number): string => `${Math.round(n)} ккал`;
