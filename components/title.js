import { createElement as h } from '/web_modules/preact.js';

const ShowdownHeader = () => {
  return h('header', { class: 'showdownHeader' }, [
    h('p', {}, '1d9-tech presents'),
    h('h1', {}, 'Showdown at Mey\'ir 🤠'),
  ]);
};

export {
  ShowdownHeader,
};
