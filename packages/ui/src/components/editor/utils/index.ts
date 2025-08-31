export function formatNumber(num: number) {
  // Check if it's an integer
  if (Number.isInteger(num)) {
    return num;
  }
  // Otherwise, format with 1 decimal
  return Number(num.toFixed(2));
}
