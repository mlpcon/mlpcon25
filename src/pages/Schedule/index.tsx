import { useEffect, useRef, useState } from 'preact/hooks';
import cn from 'classnames';
import { SCHEDULE } from '@/consts';
import css from './style.module.scss';
import { formatMinutes } from '@/utils';

const nyHourFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  hour: '2-digit',
  hour12: false,
});

export const Schedule = () => {
  const [days, setDays] = useState<string[]>([]);
  const lastDay = useRef<string>(null)

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
        {SCHEDULE.length === 0 && (
          <h3 style={{ textAlign: 'center' }}>
            Schedule is not available yet.
          </h3>
        )}
        {SCHEDULE.map((item, i) => {
          const date = new Date(item.datetime);

          const nyHourString = nyHourFormatter.format(date);
          const nyHour = Number(nyHourString);

          const day = new Date(item.datetime).toLocaleString('en-US', {
            day: '2-digit',
            month: 'long',
            weekday: 'long',
          });
          let displaySeparator = false;
          if (!lastDay.current || (nyHour >= 8 && lastDay.current !== day)) {
            displaySeparator = true;
            lastDay.current = day;
          }
          if (i === SCHEDULE.length - 1) {
            lastDay.current = null
          }
          const dur = formatMinutes(item.duration);

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
                    {date.toLocaleString(undefined, { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", timeZoneName: "short" })}{' '}
                  </time>
                  | Duration:{' '}
                  <time class='dt-duration' datetime={dur.isoFormat}>
                    {dur.readableFormat}
                  </time>
                </div>
                <div class={css.channel}>
                  Streaming to{' '}
                  {typeof item.channel === 'number' ? <a
                    class='u-url'
                    href={`//cytu.be/r/mlp-con${item.channel === 2 ? '2' : ''}`}
                    rel='external noopener'
                    target='_blank'
                  >
                    CyTube {item.channel}
                  </a> : <a
                    class='u-url'
                    href={item.channel.link}
                    rel='external noopener'
                    target='_blank'
                  >
                    {item.channel.name}
                  </a>}
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
