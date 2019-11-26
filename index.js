import '/web_modules/preact/debug.js';

import { render, createElement } from '/web_modules/preact.js';
import { ShowdownHeader } from '/components/title.js';
import { ShowdownCountdown } from '/components/countdown.js';

const main = () => {
  const renderRoot = document.getElementById('react-root');
  if (!renderRoot)
    throw new Error('Could not Initialize, no render root detected on the page');
  render(createElement('div', { class: 'showdownContainer', }, [
    createElement(ShowdownHeader),
    createElement(ShowdownCountdown)
  ]), renderRoot);
};

main();
