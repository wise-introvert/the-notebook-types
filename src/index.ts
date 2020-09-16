export const add: Function = (...numbers: number[]): number => {
  let sum: number = 0;
  numbers.forEach((n: number) => (sum += n));

  return sum;
};
