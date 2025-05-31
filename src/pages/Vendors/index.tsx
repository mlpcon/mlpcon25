import { VENDORS } from '@/consts';
import css from './style.module.scss';

export const Vendors = () => {
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
              <img class={css.previewImg} src={item.images[0]} alt={item.title} />

              <div class={css.content}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div class={css.imgWrapper}>
                  {item.images.slice(-4).map((image) => (
                    <img key={image} src={image} alt={item.title} />
                  ))}
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  );
};
