import { withBase } from './utils';

export const SCHEDULE: {
  title: string;
  description: string;
  datetime: number; // UNIX
  duration: number; // MINUTES
  channel: 1 | 2;
}[] = [
  // {
  //   title: 'title',
  //   description: 'description',
  //   duration: 30,
  //   datetime: 1741859253893,
  //   channel: 1,
  // },
].sort((a, b) => a.datetime - b.datetime);

/**
 * @returns array of image paths
 * @param count - number of images
 * @param folder - folder name
 * @param format - image format (jpg, png, etc.)
 */
const getImages = (count: number, folder: string, format: string) => {
  return new Array(count)
    .fill(0)
    .map((_, i) => withBase(`/images/vendors/${folder}/${i + 1}.${format}`));
};

export const VENDORS = [
  // {
  //   title: 'title',
  //   description: 'description.',
  //   link: 'link',
  //   images: getImages(5, 'folder', 'format'),
  // },
];
