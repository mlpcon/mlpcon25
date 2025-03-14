import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from 'preact-iso';
import { createContext } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { Home } from '@/pages/Home';
import { Vendors } from '@/pages/Vendors';
import { NotFound } from '@/pages/_404.tsx';
import { Schedule } from '@/pages/Schedule';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import contard from './assets/images/contard.png';
import anon from './assets/images/anon.png';
import '@/style.scss';
import { withBase } from './utils';

type Themes = 'light' | 'dark';

export const Theme = createContext<{
  theme: Themes;
  setTheme: (t: Themes) => void;
}>(null);

export function App() {
  const [theme, setTheme] = useState<Themes>('light');

  const setThemeWrapper = (t: Themes) => {
    setTheme(t);
    document.documentElement.dataset.theme = t;
    localStorage.setItem('theme', t);
  };

  useEffect(() => {
    let t = localStorage.getItem('theme') || 'light';
    if (t === 'light' || t === 'dark') {
      setTheme(t);
    } else {
      t = 'light';
    }
    document.documentElement.dataset.theme = t;
  }, []);

  useEffect(() => {
    let int: ReturnType<typeof setInterval>;
    if (theme === 'dark') {
      int = setInterval(() => {
        const emojis = ['🐴', '🦄', '🐎'];
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = `${Math.random() * 100}%`;
        emoji.style.top = `${Math.random() * 100}%`;
        emoji.style.fontSize = '2rem';
        emoji.style.opacity = '0.8';
        emoji.style.animation = `floatScale ${2 + Math.random() * 3}s infinite`;
        emoji.style.transition = `transform .25s ease`;
        emoji.style.pointerEvents = 'none';
        document.body.appendChild(emoji);
        setTimeout(() => {
          emoji.remove();
        }, 3000);
      }, 1500);
    }
    return () => {
      clearInterval(int);
    };
  }, [theme]);

  return (
    <Theme.Provider value={{ theme, setTheme: setThemeWrapper }}>
      <LocationProvider>
        <Header />
        <main>
          <Router>
            <Route path={withBase('/')} component={Home} />
            <Route path={withBase('/schedule')} component={Schedule} />
            <Route path={withBase('/vendors')} component={Vendors} />
            <Route default component={NotFound} />
          </Router>
        </main>

        <img src={contard} alt='Contard' class='contard' />
        <img src={anon} alt='Anon' class='anon' />
        <Footer />
      </LocationProvider>
    </Theme.Provider>
  );
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
