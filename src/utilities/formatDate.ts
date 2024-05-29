export function formatDate(date: string) {
  const convert = new Date(date);

  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(convert);
}
