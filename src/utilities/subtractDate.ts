export function subtractDays(date: Date, days: number) {
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() - days);

  return `${newDate.getFullYear()}-${(newDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${newDate.getDate()}`;
}
