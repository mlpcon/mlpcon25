import { ReactNode } from 'preact/compat';
import { withBase } from './utils';

export const SCHEDULE: {
  title: string;
  description: ReactNode;
  datetime: number; // UNIX
  duration: number; // MINUTES
  channel: number | {
    name: string;
    link: string;
  }; // 1 | 2
}[] = [
	{
		title: "Opening Maremonies", 
		description: "TBD", 
		duration: 45, 
		datetime: Date.parse("2025-07-04T11:00:00+00:00"), 
		channel: 1
	}, 
	{
	  title: 'Amending Fences 10th Anniversary',
	  description: "It's been ten years since Twilight went back to Canterlot to convince her old friend Moondancer to give friendship another chance!  Join us as we rewatch the best episode of Season 5 and its related fan content!",
	  duration: 45,
	  datetime: Date.parse("2025-07-04T12:00:00+00:00"),
	  channel: 1,
	},
  // {
  //   title: 'title',
  //   description: <>
  //     <p>something</p>
  //     <p>something2</p>
  //   </>,
  //   duration: 30,
  //   datetime: Date.parse("2025-08-04T12:00:00+00:00"),
  //   channel: {
  //     name: "rewatch anon",
  //     link: "https://cytu.be/r/teststestestset"
  //   },
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
