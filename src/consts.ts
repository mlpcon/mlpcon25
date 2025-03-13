export const SCHEDULE: {
  title: string;
  description: string;
  datetime: number; // UNIX
  duration: number; // MINUTES
  channel: 1 | 2;
}[] = [
  {
    title: 'title',
    description: 'WOW',
    duration: 30,
    datetime: 1741859253893,
    channel: 1,
  },
  {
    title: 'title 2',
    description: 'WOW',
    duration: 45,
    datetime: 1741945653893,
    channel: 2,
  },
  {
    title: 'title 2(1)',
    description: 'WOW',
    duration: 45,
    datetime: 1741945753200,
    channel: 1,
  },
  {
    title: 'title 2(1)',
    description: 'WOW',
    duration: 45,
    datetime: 1741945753200,
    channel: 1,
  },
  {
    title: 'title 2(1)',
    description: 'WOW',
    duration: 45,
    datetime: 1741945753200,
    channel: 1,
  },
  {
    title: 'title 2(1)',
    description: 'WOW',
    duration: 45,
    datetime: 1741945753200,
    channel: 1,
  },
  {
    title: 'title 2(1)',
    description: 'WOW',
    duration: 45,
    datetime: 1741945753200,
    channel: 1,
  },
  {
    title: 'title 2(1)',
    description: 'WOW',
    duration: 45,
    datetime: 1741945753200,
    channel: 1,
  },
  {
    title: 'title 3',
    description: 'WOWZA',
    duration: 15,
    datetime: 1742032053893,
    channel: 1,
  },
  {
    title: 'title 3',
    description: 'WOWZA',
    duration: 15,
    datetime: 1742032053893,
    channel: 1,
  },
  {
    title: 'title 3',
    description: 'WOWZA',
    duration: 15,
    datetime: 1742032053893,
    channel: 1,
  },
  {
    title: 'title 3',
    description: 'WOWZA',
    duration: 15,
    datetime: 1742032053893,
    channel: 1,
  },
  {
    title: 'title 3',
    description: 'WOWZA',
    duration: 15,
    datetime: 1742032053893,
    channel: 1,
  },

  {
    title: 'title 3',
    description: 'WOWZA',
    duration: 15,
    datetime: 1742032053893,
    channel: 1,
  },
].sort((a, b) => a.datetime - b.datetime);
