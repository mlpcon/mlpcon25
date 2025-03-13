import css from './style.module.scss';

export function Footer() {
  return (
    <footer class={css.footer}>
      <p
        onClick={(e) => {
          if ((e.target as HTMLParagraphElement).classList.contains(css.anim)) {
            return;
          }
          (e.target as HTMLParagraphElement).classList.add(css.anim);
          setTimeout(() => {
            (e.target as HTMLParagraphElement).classList.remove(css.anim);
          }, 500);
        }}
      >
        /mlp/ con 2025
      </p>
    </footer>
  );
}
