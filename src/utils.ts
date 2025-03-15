export const getRandomItems = <T>(arr: T[], count: number) => {
  if (count > arr.length) {
    throw new Error('Not enough items in the array.');
  }
  const copy = [...arr];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy.slice(0, count);
};

const BASE = '';
export const withBase = (path: string) => `${BASE}${path}`;

export const formatMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  let readableFormat =
    hours > 0
      ? `${hours} ${
          hours === 1 ? 'hour' : 'hours'
        }, ${remainingMinutes} minutes`
      : `${remainingMinutes} minutes`;

  const isoFormat = `PT${hours > 0 ? hours + 'H' : ''}${remainingMinutes}M`;

  return { readableFormat, isoFormat };
};
