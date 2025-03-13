import css from './style.module.scss';

const getImages = (count: number, folder: string, format: string) => {
  return new Array(count)
    .fill(0)
    .map((_, i) => `/images/vendors/${folder}/${i + 1}.${format}`);
};

const vendors = [
  {
    title: 'Mare Wear',
    description: 'The final word on bespoke mare apparel.',
    link: 'https://ko-fi.com/comforble/shop/',
    images: getImages(3, 'marewear', 'webp'),
  },
  {
    title: 'Mare Wear',
    description: 'The final word on bespoke mare apparel.',
    link: 'https://ko-fi.com/comforble/shop/',
    images: getImages(5, 'marewear', 'webp'),
  },
  {
    title: 'Mare Wear',
    description: 'The final word on bespoke mare apparel.',
    link: 'https://ko-fi.com/comforble/shop/',
    images: getImages(5, 'marewear', 'webp'),
  },
  {
    title: 'Mare Wear',
    description: 'The final word on bespoke mare apparel.',
    link: 'https://ko-fi.com/comforble/shop/',
    images: getImages(5, 'marewear', 'webp'),
  },
];

export const Vendors = () => {
  return (
    <div class={css.wrapper}>
      <h1 class={css.title}>Vendors</h1>
      <div class={css.list}>
        {vendors.map((item) => (
          <a
            target={'_blank'}
            href={item.link}
            class={css.item}
            key={item.title}
          >
            <img class={css.previewImg} src={item.images[0]} alt={item.title} />

            <div class={css.content}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div class={css.imgWrapper}>
                {item.images.slice(1).map((image) => (
                  <img key={image} src={image} alt={item.title} />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
