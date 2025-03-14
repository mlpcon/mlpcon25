import { useEffect, useState } from 'preact/hooks';
import cn from 'classnames';
import { SCHEDULE } from '@/consts';
import css from './style.module.scss';

let lastDay = null;

export const Schedule = () => {
  const [days, setDays] = useState<string[]>([]);

  useEffect(() => {
    const arr = document.querySelectorAll<HTMLDivElement>(`.${css.separator}`);
    setDays(Array.from(arr).map((item) => item.id));
  }, []);

  return (
    <div class={css.wrapper}>
      <h1 class={css.title}>Schedule</h1>
      <div class={css.days}>
        {days.map((day) => (
          <a key={day} href={`#${day}`}>
            {day}
          </a>
        ))}
      </div>
      <div class={css.list}>
        {SCHEDULE.map((item) => {
          const date = new Date(item.datetime);
          const day = date.toLocaleString(undefined, {
            day: '2-digit',
            month: 'long',
            weekday: 'long',
          });
          let displaySeparator = false;
          if (!lastDay || lastDay !== day) {
            displaySeparator = true;
            lastDay = day;
          }

          return (
            <>
              {displaySeparator && (
                <h3
                  id={date
                    .toLocaleString('en-US', { weekday: 'long' })
                    .toLowerCase()}
                  class={cn(css.separator, 'day-header')}
                  role='separator'
                >
                  <time datetime={date.toLocaleDateString('en-CA')}>{day}</time>
                </h3>
              )}
              <section class={cn(css.listItem, 'h-event')} key={item.title}>
                <h3 class='p-name'>{item.title}</h3>
                <div class={css.date}>
                  <time class='dt-start' datetime={date.toISOString()}>
                    {date.toLocaleString(undefined, { timeZoneName: 'short' })}{' '}
                  </time>
                  | Duration:{' '}
                  <time class='dt-duration' datetime='PT30M'>
                    {item.duration} minutes
                  </time>
                </div>
                <div class={css.channel}>
                  Streaming to{' '}
                  <a
                    class='u-url'
                    href={`//cytu.be/r/mlp-con${item.channel === 2 ? '2' : ''}`}
                    rel='external noopener'
                    target='_blank'
                  >
                    CyTube {item.channel}
                  </a>
                </div>
                <div class={cn(css.desc, 'e-content')}>{item.description}</div>
              </section>
            </>
          );
        })}
      </div>
    </div>
  );
};
