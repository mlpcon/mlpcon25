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
