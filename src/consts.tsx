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
		datetime: Date.parse("2025-07-04T15:00Z"), 
		channel: 1
	}, 
	{
		title: "Amending Fences 10th Anniversary",
		description: "It's been ten years since Twilight went back to Canterlot to convince her old friend Moondancer to give friendship another chance!  Join us as we rewatch the best episode of Season 5 and its related fan content!",
		duration: 45,
		datetime: Date.parse("2025-07-04T16:00Z"),
		channel: 1
	},
	{
		title: "PuzzlePone Time",
		description: "Join other anons to solve cute mare puzzles while comfy pone music plays in the background!\nOr you can sit back and relax watching other anons work like zebras while you jam to horsey tunes!",
		duration: 180,
		datetime: Date.parse("2025-07-04T17:00Z"),
		channel: 1
	},
	{
		title: "Fucking Around Interdimensionally",
		description: 'A discussion on "astral projection" to equestria,  my experiments with it, phenomena relating to it... As well as a small guided projection session, and a Q&A. ',
		duration: 75,
		datetime: Date.parse("2025-07-04T20:15Z"),
		channel: 1
	},
	{
		title: "dicemares",
		description: "I will play dice mares",
		duration: 45,
		datetime: Date.parse("2025-07-04T22:00Z"),
		channel: 1
	},
	{
		title: "Wetbrain: The Boozy Art Request Stream!",
		description: <>
			Welcome to Wetbrain, the interactive and boozy art request stream game where artists draw and suffer for your enjoyment!
			<p />
			The rules are simple:
			<ul style="list-style-type: '\3e';">
				<li>Selection of tags appear</li>
				<li>Artist remove a tag each that they dont want to draw</li>
				<li>Anons will vote the three tags that have to be drawn from the selection</li>
				<li>Artists have 5 minutes to draw it</li>
				<li>Anons vote who drew the best picture, for whatever reason</li>
				<li>Losers take a shot of hard alchohol</li>
				<li>Repeat until the last round or until everyone drops out</li>
			</ul>
			<ul style="list-style-type: '\3e';">
				<li>Anyone can drop out any time for any reason (like being super wasted)</li>
				<li>Donations are encouraged! Every cent will be donated to Fallen Oak Equine Rescue and Rehabilitation!</li>
				<li>Every 100 USD donated will spin the Wheel of Pain, and a mallus will be inflicted on all artists for the entire game unless otherwise stated</li>
			</ul>
		</>,
		duration: 90,
		datetime: Date.parse("2025-07-04T23:00Z"),
		channel: 1
	},
	{
		title: "",
		description: "",
		duration: 45,
		datetime: Date.parse("2025-07-04T12:00Z"),
		channel: 1
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
