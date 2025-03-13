import { useEffect } from 'preact/hooks';
import css from './style.module.scss';

export function Home() {
  useEffect(() => {
    document
      .querySelectorAll<HTMLDivElement>(`.${css.card}`)
      .forEach((card) => {
        const rotation = Math.random() * 8 - 4;
        card.style.setProperty('--sticker-rotation', `${rotation}deg`);
      });
  }, []);

  return (
    <div class={css.wrapper}>
      <div class={css.card}>
        <div class={css.cardContent}>
          <h2>What is it?</h2>
          <p>
            Anons from the /mlp/ board got together to host their own online
            <s>shit show</s> convention. With over 1,640 anons attended at least
            some portion of the festivities the weekend of June 28-30, 2024.
          </p>
        </div>
      </div>

      <div class={css.card}>
        <div class={css.cardContent}>
          <h2>When?</h2>
          <p>
            <b>TDB</b>
          </p>
          <p>Check the thread for updates</p>
        </div>
      </div>

      <div class={css.card}>
        <div class={css.cardContent}>
          <h2>Vendors</h2>
          <p>
            Stickers? Badges? Questionable fanart? It's yours my friend! As long
            as you have enough bits!
          </p>
          <ul class='vendor-grid'>
            <li class='vendor'>
              <a href='#'>Random vendor 1</a>
            </li>
            <li class='vendor'>
              <a href='#'>Random vendor 2</a>
            </li>
            <li class='vendor'>
              <a href='#'>Random vendor 3</a>
            </li>
          </ul>
          <p>
            Check the <a href='/vendors'>Vendors</a> page for more!
          </p>
        </div>
      </div>

      <div class={css.card}>
        <div class={css.cardContent}>
          <h2>What happened before?</h2>
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

      <div class={css.card}>
        <div class={css.cardContent}>
          <h2>How can I watch the streams?</h2>
          <p>
            Check the <a href='/schedule'>Schedule</a> for live streaming times
            and links. All events will be available live and as replays.
          </p>
        </div>
      </div>
    </div>
  );
}
