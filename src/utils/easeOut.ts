export const easeOut = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};
