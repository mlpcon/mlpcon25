export const getRandomItems = <T>(arr: T[], count: number): T[] => {
  if (count > arr.length) {
    console.warn('Not enough items in the array.');
    return [];
  }
  const copy = [...arr];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy.slice(0, count);
};

const BASE = '';
export function withBase(path: string): string { return `${BASE}${path}`; }

export const formatMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  let readableFormat: string = "";

  if (remainingMinutes > 0)
    readableFormat = `${(hours > 0) ? ", " : ""}${remainingMinutes} minutes`;

  if (hours > 0)
    readableFormat = `${hours} ${(hours === 1) ? "hour" : "hours"}${readableFormat}`;
  const isoFormat = `PT${hours > 0 ? hours + 'H' : ''}${remainingMinutes}M`;

  return { readableFormat, isoFormat };
};
