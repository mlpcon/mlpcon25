import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from 'preact-iso';
import { createContext } from 'preact';
import { useState } from 'preact/hooks';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/_404.tsx';
import contard from './assets/images/contard.png';
import anon from './assets/images/anon.png';
import '@/style.scss';

type Themes = 'light' | 'dark';

export const Theme = createContext<{
  theme: Themes;
  setTheme: (str: Themes) => void;
}>(null);

export function App() {
  const [theme, setTheme] = useState<Themes>('light');

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <LocationProvider>
        <img src={contard} alt='Contard' class='contard' />
        <img src={anon} alt='Anon' class='anon' />
        <Header />
        <main>
          <Router>
            <Route path='/' component={Home} />
            <Route default component={NotFound} />
          </Router>
        </main>

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
