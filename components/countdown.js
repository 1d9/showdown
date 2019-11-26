import { createElement as h } from '/web_modules/preact.js';
import { useEffect, useState } from '/web_modules/preact/hooks.js';
import { createCompass } from '/web_modules/@astral-atlas/compass.js';
import { createHTTPClientFromFetch } from '/web_modules/@lukekaalim/http-client.js'

const client = createHTTPClientFromFetch(fetch, Headers);
const compass = createCompass('http://api.tome.1d9.tech', client);

const useCurrentTime = (intervalMilliseconds) => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(Date.now()), intervalMilliseconds);
    return () => clearInterval(intervalId);
  }, [intervalMilliseconds]);

  return currentTime;
};

const useSessions = (compass) => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    compass.session.getSessions()
      .then(sessionResult => {
        if (sessionResult.type === 'success')
          setSessions(sessionResult.success);
      });
  }, [compass]);
  return sessions;
};

const ShowdownCountdown = () => {
  const currentTime = useCurrentTime(100);
  const sessions = useSessions(compass);

  const showdownSession = sessions[sessions.length - 1];

  const secondsUntilShowdownStart = showdownSession && (showdownSession.startTime - currentTime) / 1000;

  const minutesUntilShowdownStart = secondsUntilShowdownStart / 60;
  const hoursUntilShowdownStart = minutesUntilShowdownStart / 60;
  const daysUntilShowdownStart = hoursUntilShowdownStart / 24;

  return h('div', { class: 'showdownCountdown' }, [
    h('table', {}, [
      h('caption', {} , [
        h('p', {}, 'Time until Showdown'),
      ]),
      h('thead', {}, [
        h('tr', {} , [h('th', {} , 'Days'), h('th', {} , 'Hours'), h('th', {} , 'Minutes'), h('th', {} , 'Seconds')])
      ]),
      h('tbody', {} , [
        h('tr', {} , [
          h('td', {} , Math.floor(daysUntilShowdownStart)),
          h('td', {} , Math.floor(hoursUntilShowdownStart % 24)),
          h('td', {} , Math.floor(minutesUntilShowdownStart % 60)),
          h('td', {} , Math.floor(secondsUntilShowdownStart % 60))
        ])
      ]),
    ])
  ]);
};

export {
  ShowdownCountdown,
};
