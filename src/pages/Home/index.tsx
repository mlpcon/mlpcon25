import { useContext, useEffect, useMemo, useState } from 'preact/hooks';
import { Theme } from '@/index';
import { getRandomItems, withBase } from '@/utils';
import { VENDORS } from '@/consts';
import css from './style.module.scss';

export function Home() {
  const { theme } = useContext(Theme);

  useEffect(() => {
    document
      .querySelectorAll<HTMLDivElement>(`.${css.card}`)
      .forEach((card) => {
        const rotation = Math.random() * 8 - 4;
        card.style.setProperty('--sticker-rotation', `${rotation}deg`);
      });
  }, [theme]);

  if (theme === 'dark') {
    return (
      <div class={css.wrapper}>
        <section>
          <h2>What was it?</h2>
          <p>
            Anons from the /mlp/ board will get together to host their own online <s>shit show</s> convention. 
          </p>
          <div class={css.announcement}>
            Event Dates: <b>July 4 - 6</b>
          </div>
        </section>

        <section>
          <h2>How to Watch</h2>
          <p>
            Check the <a href={withBase('/schedule')}>Schedule</a> for live
            streaming times and links. All events will be available live and as
            replays.
          </p>
        </section>
        
        <section>
         <h2>What happened?</h2>
          <p>Check the /mlp/ con 2025 Pony.Tube playlists</p>
          <ul>
            <li><a href="https://pony.tube/w/p/kHaxG6h1EiPs553wZT5iDy">/mlp/con 2025 CyTube 1</a></li>
            <li><a href="https://pony.tube/w/p/sxfkHDqoXMSuBBwbkhWKc9">/mlp/con 2025 CyTube 2</a></li>
            <li><a href="https://pony.tube/w/p/wR2wVSDjjQA1EZSoJU95qc">/mlp/con 2025 Panels </a></li>
          </ul>
        </section>
        {/* <section>
          <h2>I Want To Participate!</h2>
          <p>
            Got some merch to sell? <a target={'_blank'} class={css.applyVendor} href={'https://forms.gle/3FQuGsF9n4aUSapU7'}>Apply to be a Vendor!</a>
          </p>
          <p>
            Want broadcast your autism to the masses? <a class={css.applyVendor} target={'_blank'} href={'https://forms.gle/Ge5AXkJ4zU5VE6B39'}>Host a Panel!</a>
          </p>
        </section> */}

        <section>
          <h2>What happened in previous years?</h2>
          <p>
            Over 1,640 anons attended at least some portion of the festivities
            the weekend of June 28-30, 2024.
          </p>
          <ul>
            <li>
              <a href='//2024.mlpcon.online/'>/mlp/ con 2024</a>
            </li>
            <li>
              <a href='//2023.mlpcon.online/'>/mlp/ con 2023</a>
            </li>
            <li>
              <a href='//2022.mlpcon.online/'>/mlp/ con 2022</a>
            </li>
            <li>
              <a href='//2021.mlpcon.online/'>/mlp/ con 2021</a>
            </li>
            <li>
              <a href='//2020.mlpcon.online/'>/mlp/ con 2020</a>
            </li>
          </ul>
        </section>
      </div>
    );
  }

  const [vendors, setVendors] = useState([]) 
  useEffect(() => {
    setVendors(getRandomItems(VENDORS, 3))
  }, [])

  return (
    <div class={css.wrapper}>
      <div class={css.card}>
        <div class={css.cardContent}>
          <h2>What was it?</h2>
          <p>
            Anons from the /mlp/ board will get together to host their own online <s>shit show</s> convention. 
          </p>
        </div>
      </div>

      <div class={css.card}>
        <div class={css.cardContent}>
          <h2>When?</h2>
          <h2 class={css.big}>July 4 - 6</h2>
        </div>
      </div>

      <div class={css.card}>
        <div class={css.cardContent}>
          <h2>Vendors</h2>
          <p>
            Stickers? Badges? Questionable fanart? It's yours my friend! As long
            as you have enough bits!
          </p>
          <ul>
            {vendors.map((item) => (
              <li key={item.title}>
                <a href={item.link} target={'_blank'}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <p>
            Check the <a href={withBase('/vendors')}>Vendors</a> page for more!
          </p>
          {/* <p>
            <a target={'_blank'} class={css.applyVendor} href={'https://forms.gle/3FQuGsF9n4aUSapU7'}>Apply to be a Vendor!</a>
          </p> */}
        </div>
      </div>

      <div class={css.card}>
        <div class={css.cardContent}>
          <h2>What happened?</h2>
          <p>Check the /mlp/ con 2025 Pony.Tube playlists</p>
          <a href="https://pony.tube/w/p/kHaxG6h1EiPs553wZT5iDy">/mlp/con 2025 CyTube 1</a>
          <a href="https://pony.tube/w/p/sxfkHDqoXMSuBBwbkhWKc9">/mlp/con 2025 CyTube 2</a>
          <a href="https://pony.tube/w/p/wR2wVSDjjQA1EZSoJU95qc">/mlp/con 2025 Panels </a>

        </div>
      </div>

      <div class={css.card}>
        <div class={css.cardContent}>
          <h2>How can I watch the streams?</h2>
          <p>
            Check the <a href={withBase('/schedule')}>Schedule</a> for live
            streaming times and links. All events will be available live and as
            replays.
          </p>
        </div>
      </div>

      <div class={css.card}>
        <div class={css.cardContent}>
          <h2>What happened in previous years?</h2>
          <p>
            If you're looking for prior year's /mlp/ con sites, they've now been
            archived under new domains:
          </p>
          <ul>
            <li>
              <a target={'_blank'} href='//2024.mlpcon.online/'>
                /mlp/ con 2024
              </a>
            </li>
            <li>
              <a target={'_blank'} href='//2023.mlpcon.online/'>
                /mlp/ con 2023
              </a>
            </li>
            <li>
              <a target={'_blank'} href='//2022.mlpcon.online/'>
                /mlp/ con 2022
              </a>
            </li>
            <li>
              <a target={'_blank'} href='//2021.mlpcon.online/'>
                /mlp/ con 2021
              </a>
            </li>
            <li>
              <a target={'_blank'} href='//2020.mlpcon.online/'>
                /mlp/ con 2020
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
