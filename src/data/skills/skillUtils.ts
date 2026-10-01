export function getYearsExp(startYear: number, endYear: number | null): number {
  const end = endYear ?? new Date().getFullYear();

  if (end < startYear) return 0;

  return end - startYear;
}

export function getLastUsed(endYear: number | null): string {
  if (endYear === null) return 'Present';

  return String(endYear);
}
