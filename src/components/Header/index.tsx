import { useContext } from 'preact/hooks';

import cn from 'classnames';
import { Theme } from '@/index';
import moon from '@/assets/images/moon.png';
import sun from '@/assets/images/sun.png';
import css from './style.module.scss';

export function Header() {
  const { theme, setTheme } = useContext(Theme);

  const onClick = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <header class={css.header}>
      <div class={css.imgBg}>
        <img
          onClick={onClick}
          class={css.icon}
          src={theme === 'dark' ? sun : moon}
          alt='theme switch'
          title={'theme switch'}
        />
      </div>
      <div class={cn(css.washiTape, css.top)}></div>
      {theme === 'dark' ? (
        <a href={'/'} class={css.title}>
          <span class={css.hors}>🐴</span> /mlp/con{' '}
          <span class={css.hors2}>🐴</span>
        </a>
      ) : (
        <a class={css.title} href={'/'}>
          /mlp/con
        </a>
      )}
      <div class={cn(css.washiTape, css.bottom)}></div>
      <nav>
        <a href='#'>Host a Panel</a>
        <a href='#'>Be a Vendor</a>
        <a href='/schedule'>Schedule</a>
        <a href='/vendors'>Vendors</a>
        <a href='//boards.4chan.org/mlp/thread/42010989' target='_blank'>
          Current Thread
        </a>
      </nav>
    </header>
  );
}
