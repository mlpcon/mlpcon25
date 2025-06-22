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
	/*** FRIDAY ***/
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
		description: <>
			Join other anons to solve cute mare puzzles while comfy pone music plays in the background!<br />
			Or you can sit back and relax watching other anons work like zebras while you jam to horsey tunes!
		</>,
		duration: 180,
		datetime: Date.parse("2025-07-04T17:00Z"),
		channel: 1
	},
	{
		title: "Detailed pony vectors in inkscape",
		description: "Lineless soft shading with fur as a vector image? No problem. There are many little things in inkscape to make incredible pony vector art with inkscape. May also include rants, why naturally made soap is healthy for skin, and probably something about griffins.",
		duration: 120,
		datetime: Date.parse("2025-07-04T20:00Z"),
		channel: 2
	},
	{
		title: "Fucking Around Interdimensionally",
		description: 'A discussion on "astral projection" to equestria,  my experiments with it, phenomena relating to it... As well as a small guided projection session, and a Q&A. ',
		duration: 75,
		datetime: Date.parse("2025-07-04T20:15Z"),
		channel: 1
	},
	{
		title: "Wetbrain: The Boozy Art Request Stream!",
		description: <>
			Welcome to Wetbrain, the interactive and boozy art request stream game where artists draw and suffer for your enjoyment!<br />
			<br />
			The rules are simple:<br />
			<ul style="list-style-type: '\3e';">
				<li>Selection of tags appear</li>
				<li>Artist remove a tag each that they dont want to draw</li>
				<li>Anons will vote the three tags that have to be drawn from the selection</li>
				<li>Artists have 5 minutes to draw it</li>
				<li>Anons vote who drew the best picture, for whatever reason</li>
				<li>Losers take a shot of hard alchohol</li>
				<li>Repeat until the last round or until everyone drops out</li>
			</ul>
			<br />
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
		title: "Trust the process",
		description: "i dont know fuck you",
		duration: 45,
		datetime: Date.parse("2025-07-05T00:45Z"),
		channel: 1
	},
	{
		title: "Foreign Mares at Your Door",
		description: <>
			Did you know that mares speak more than one language? That's right! There are even mares who don't speak english, and they want to meet you!<br />
			So, relax on your wizard throne and watch multiple ESL pony content and discover different communities and cultures you might not have known about.<br />
			Mares are beautiful! Even if you don't understand anything they're saying...
		</>,
		duration: 45,
		datetime: Date.parse("2025-07-05T03:00Z"),
		channel: 1
	},
	{
		title: "Lesson Zero: A Plot Analysis",
		description: <>
			What's the sexiest episode of <cite>My Little Pony: Friendship is Magic</cite>?  Lesson Zero!<br />
			Let's actively watch this episode and discuss it at key points.<br />
			Togehter, we'll appreciate the plot(s) of this best episode.<br />
		</>,
		duration: 60,
		datetime: Date.parse("2025-07-05T04:45Z"),
		channel: 1
	},
	/*** SATURDAY ***/
	{
		title: "Random Mare Appreciation",
		description: "There are so many background mares in the show that don't get a lot of attention, so we will let RNG highlight some of them for us! Who will we see? I don't know! Expect unscripted mareschizo autism.",
		duration: 60,
		datetime: Date.parse("2025-07-05T14:45Z"),
		channel: 1
	},
	{
		title: "/mlp/ the Antithology Volume 5",
		description: "Come watch /mlp/'s FIFTH annual Antithology!",
		duration: 90,
		datetime: Date.parse("2025-07-05T16:00Z"),
		channel: 1
	},
	{
		title: "Fallen Oak Equine Rescue ",
		description: "Horsey updates, trivia and just horsin around ",
		duration: 90,
		datetime: Date.parse("2025-07-05T17:00Z"),
		channel: 2
	},
	{
		title: "Fluffy pony dating SIM",
		description: "Today, we'll finish what we started. Come join us as I try to speedrun the fluffy pony dating sim that we saw in the gamejam last /mlp/con; watch me try to find a way to fuck all six of these bastards.",
		duration: 90,
		datetime: Date.parse("2025-07-05T17:45Z"),
		channel: 1
	},
	{
		title: "Hangmare",
		description: "silly games of hangman (and more) with a pony twist,",
		duration: 75,
		datetime: Date.parse("2025-07-05T19:30Z"),
		channel: 1
	},
	{
		title: "HLVRAIMLP: BEST OF",
		description: "A compilation of the best of clips of all the past HLVRAIMLP panels since there will be no HLVRAIMLP panel for this con ucu.",
		duration: 180,
		datetime: Date.parse("2025-07-05T19:30Z"),
		channel: 2
	},
	{
		title: "Derpy Doodles feat. QuotePony, MouseuArt, Pabbley, TheBatFang",
		description: "It's a dastardly draw off with pony themed prompts. Join along by posting your art in the thread!",
		duration: 180,
		datetime: Date.parse("2025-07-05T21:00Z"),
		channel: 1
	},
	{
		title: "12 Angry Mares - PONY COURT",
		description: "For all the debates we have over who was in the wrong or how a pony should be perceived, we've never stopped to ask what Equestrian law has to say! At pony court, these disputes shall at long last be settled once and for all (real!)! Prepare a case, find an anon to argue it against (you'll have to decide who's the prosecution and who's the defense), and make the whole board know the truth. The viewers will act as the jury, voting in a poll at the end of each case to decide the winner. Evidence in the form of photos/videos/etc. is highly encouraged! This might be a total disaster, but that should be fun, too! Note: this is basically just autistic debates with a funny coating over it. Don't sweat it if you don't wanna go full court autism (but it's cool if you do)!",
		duration: 60,
		datetime: Date.parse("2025-07-06T00:15Z"),
		channel: 1
	},
	{
		title: "Blondie's Raucous Regalings: Real Edition",
		description: <>
			You know what goes well with stories? Life.<br />
			You know what goes better with stories? Death.<br />
			Let loose the mares of war and delve into this deleterious diary dated by antiquated deeds.
		</>,
		duration: 90,
		datetime: Date.parse("2025-07-06T00:45Z"),
		channel: 2
	},
	{
		title: "Marecurial Sonority Mk. II",
		description: "A conglomareation of operatic maredulation, telecasting mareciferously via ARPANET to your mare-brain. It's maresic! A lot of it.",
		duration: 237,
		datetime: Date.parse("2025-07-06T02:00Z"),
		channel: 1
	},
	{
		title: "Blondie's Vacuous Vulgarities",
		description: "Malicious mares make men mald, lustful lads lurk to lay lemon-colored ladies. Join us on an adventure positively dripping with lime slime, turpentine and negativity.",
		duration: 90,
		datetime: Date.parse("2025-07-06T02:45Z"),
		channel: 2
	},
	/*** SUNDAY ***/
	{
		title: "Traditional art draw panel",
		description: "You know the drill. You give me prompts, I draw mares.",
		duration: 120,
		datetime: Date.parse("2025-07-06T13:00Z"),
		channel: 1
	},
	{
		title: "Applejack Appreciation Appointment",
		description: "A selection of episodes, music and videos dedicated to the prettiest, most hardworking, honest mare to ever wear a cowboy hat, curated by the anons on /aj/",
		duration: 90,
		datetime: Date.parse("2025-07-06T15:15Z"),
		channel: 1
	},
	{
		title: "Worms Armageddon Tournament: Good vs Evil",
		description: "Chat members will submit images to be used for making custom maps, choose what characters populate the sides of Good and Evil, then have absolutely no further involvement as two AI teams duke it out and blow up your creations for control over nothing. Featuring the best software 1999 had to offer: Worms Armageddon. ",
		duration: 150,
		datetime: Date.parse("2025-07-06T17:00Z"),
		channel: 1
	},
	{
		title: "Russian Fanfiction overview",
		description: "Do (you) like MARES? What about stories with MARES? Tune in to hear about the best and the worst examples of Russian pony fanfiction! What to expect - summaries of popular stories and the stories i liked, my personal opinions regarding those fanfics and the fruits of a 1000 hours spent in MS Paint!",
		duration: 120,
		datetime: Date.parse("2025-07-06T19:45Z"),
		channel: 1
	},
	{
		title: "Gamejam showcase: Your choice edition!",
		description: <>
			Welcome to the fifth /mlp/ game jam! We'll once again be taking a look st the submitted games from our VERY talented game devs in the board.<br />
			This time around I'll be letting (You) chose the theme for this little jam! That's right! We'll be doing a theme chosen by the board! So go on ahead and see if it's not too late to make your voice heard! And if the theme is selected, then feel free to participate in the jam! Check the catalog by typing "game jam" in the search bar to find both threads!
		</>,
		duration: 180,
		datetime: Date.parse("2025-07-06T22:00Z"),
		channel: 1
	},
	{
		title: "Live CYOA III: Anonfilly Goes to Manehatten",
		description: <>
			The third of installment of these CYOA adventures, and no less nonsensical. After a spat with Twilight and her friends(Ice cream IS TO a supplement for dinner!!!) Anonfilly decides to runaway to Manehatten to begin a new life. Will she find a meaningful connection? Will she find ways to make bits? Will she explode into an atomic reaction, igniting Equestria's atmosphere? You decide!<br />
			<br />
			How it works: I will draw each scene and situation on the fly, punctuated with brief "loading screens". Each major decision will be decided by a combination of polling, dice rolls, and dealer's choice amongst audience spam, each getting our heroine to her lofty goal of, well, something. Anything goes, from funny memes and rats to foalphilic accusations and magical filly transformations.
		</>,
		duration: 120,
		datetime: Date.parse("2025-07-07T01:15Z"),
		channel: 1
	},
	{
		title: "RarityFest",
		description: "Get ready with your best outfit and your :dance: emotes, we'll listen to a playlist of Rarity's songs from the fandom, from classics to underrated gems.",
		duration: 90,
		datetime: Date.parse("2025-07-07T04:30Z"),
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

const vendorsImageDir: string = "/images/vendors/";
//https://mlpcon.online/cdn-cgi/image/format=auto/https://mlpcon.online/images/vendors/contard-D1laCqa4.png

/**
 * @returns array of image paths
 * @param count - number of images
 * @param folder - folder name
 * @param format - image format (jpg, png, etc.)
 */
const getImages = (count: number, folder: string, format: string) => {
	return new Array(count)
		.fill(0)
		.map((_, i) => withBase(`${vendorsImageDir}${folder}/${i + 1}.${format}`));
};

const defaultImage: Array<string> = [`${vendorsImageDir}default.jpeg`];

export const VENDORS = [
	{
		title: "Cheyenne",
		description: "Pony items",
		link: "//youtu.be/o7aBY2sqbEI?si=XEVKrSnFdGyTN8yL",
		images: defaultImage
	},
	{
		title: "Sigilponies",
		description: "Snowpity Charger pre-orders \\oco/",
		link: "//www.sigil.horse/",
		images: [`${vendorsImageDir}sigil.jpg`]
	},
	{
		title: "Rocket's Equine Outpost",
		description: "Pins, shoe charms, wall scrolls, stickers",
		link: "//ko-fi.com/rocketlawnchair/shop",
		images: getImages(7, "rockets-equine-outpost", "png")
	},
	{
		title: "OTL Crafts",
		description: <>
			LEGO ponies, custom order LEGO ponies (if available), cute or funny stickers, and traditional art commissions. <a href="https://youtu.be/OX8MTUWLSjE">https://youtu.be/OX8MTUWLSjE</a>
		</>,
		link: "//ko-fi.com/otlcrafts",
		images: getImages(10, "otl-crafts", "png")
	},
	{
		title: "soapone",
		description: <>
			Pony themed: Soap, Fragrance spray, Oil, and incense. Incense isn't listed on website, but I normally give it away for any soap order made; ask for it in the comment section of the order form. Similarly, I can add any fragrance to the oil, just ask for it in the comment section.<br />
			I love all the autistic sperging (you) puke out in the comment box of the order form. It helps validates my own autistic sperging.
		</>,
		link: "//snowpity.shop/",
		images: [`${vendorsImageDir}soapone.jpg`]
	},
	{
		title: "Mare Fair",
		description: "We are a convention. Ran by dipshits",
		link: "//marefair.org/",
		images: [`${vendorsImageDir}mare-fair.png`]
	},
	// {
	//   title: 'title',
	//   description: 'description.',
	//   link: 'link',
	//   images: getImages(5, 'folder', 'format'),
	// },
];
