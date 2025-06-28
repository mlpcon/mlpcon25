import { ReactNode } from 'preact/compat';
import { VendorImage, VENDORS } from '@/consts';
import css from './style.module.scss';

export const Vendors = () => {
	function generatePicture(vendorName: string, images: Array<VendorImage>, isPreview?: bool = false): ReactNode {
		if (!self.Array.isArray(images) || images.length === 0)
			throw new self.Error("Error in `generatePicture`: expected a non-zero length Array for `images`");
		const lastImage: VendorImage = images[images.length - 1];
		const img: ReactNode = <>
			<img 
				class={isPreview ? css.previewImg : ""}
				key={isPreview ? "" : lastImage.url}
				alt={vendorName}
				src={lastImage.url}
				type={lastImage.type} />
		</>;
		return (
			<picture>
				{images.slice(0, -1).map<VendorImage, ReactNode>((image) => <><source srcset={image.url} type={image.type} /></>)}
				{img}
			</picture>
		);
	}

	return (
		<div class={css.wrapper}>
			<h1 class={css.title}>Vendors</h1>
			<div class={css.list}>
				{VENDORS.length === 0 && (
					<h3
						style={{ textAlign: 'center', fontSize: '1.8rem', marginTop: 24 }}
					>
						Vendors list is not available yet.
					</h3>
				)}
				{VENDORS.map((item) => {
					const moreThanOne = item.images.length > 1
					return (
						<a
							target={'_blank'}
							href={item.link}
							class={`${css.item} ${moreThanOne ? css.hover : ''}`}
							key={item.title}
						>
							{generatePicture(item.title, item.images[0], true)}

							<div class={css.content}>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
								<div class={css.imgWrapper}>
									{item.images.slice(item.images.length > 4 ? 1 : -4).map((images) => generatePicture(item.title, images))}
								</div>
							</div>
						</a>
					)
				})}
			</div>
		</div>
	);
};
