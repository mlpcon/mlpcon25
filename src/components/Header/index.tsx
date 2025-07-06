import { useContext } from 'preact/hooks';

import cn from 'classnames';
import { Theme } from '@/index';
import moon from '@/assets/images/moon.png';
import sun from '@/assets/images/sun.png';
import css from './style.module.scss';
import { withBase } from '@/utils';

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
        <a href={withBase('/')} class={css.title}>
          <span class={css.hors}>🐴</span> /mlp/con{' '}
          <span class={css.hors2}>🐴</span>
        </a>
      ) : (
        <a class={css.title} href={withBase('/')}>
          /mlp/con
        </a>
      )}
      <div class={cn(css.washiTape, css.bottom)}></div>
      <nav>
        <a target={'_blank'} href='https://forms.gle/Ge5AXkJ4zU5VE6B39'>Host a Panel</a>
        <a target={'_blank'} href='https://forms.gle/3FQuGsF9n4aUSapU7'>Be a Vendor</a>
        <a href={withBase('/schedule')}>Schedule</a>
        <a href={withBase('/vendors')}>Vendors</a>
        <a target={'_blank'} href='//boards.4chan.org/mlp/thread/42330512'>
          Current Thread
        </a>
      </nav>
    </header>
  );
}
