export const isValidNumber = (v: string): boolean => !isNaN(Number(v)) && Number(v) >= 0;
export const isValidEmail = (v: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isValidPassword = (v: string): boolean => v.length >= 6; // S.01
