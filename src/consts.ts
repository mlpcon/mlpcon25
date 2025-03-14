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

const getImages = (count: number, folder: string, format: string) => {
  return new Array(count)
    .fill(0)
    .map((_, i) => `/images/vendors/${folder}/${i + 1}.${format}`);
};

export const VENDORS = [
  {
    title: 'Mare Wear1',
    description: 'The final word on bespoke mare apparel.',
    link: 'https://ko-fi.com/comforble/shop/',
    images: getImages(3, 'marewear', 'webp'),
  },
  {
    title: 'Mare Wear2',
    description: 'The final word on bespoke mare apparel.',
    link: 'https://ko-fi.com/comforble/shop/',
    images: getImages(5, 'marewear', 'webp'),
  },
  {
    title: 'Mare Wear3',
    description: 'The final word on bespoke mare apparel.',
    link: 'https://ko-fi.com/comforble/shop/',
    images: getImages(5, 'marewear', 'webp'),
  },
  {
    title: 'Mare Wear4',
    description: 'The final word on bespoke mare apparel.',
    link: 'https://ko-fi.com/comforble/shop/',
    images: getImages(5, 'marewear', 'webp'),
  },
];
