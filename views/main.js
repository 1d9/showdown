import { createElement as h } from '/web_modules/preact.js';
import { ShowdownHeader } from '../components/title.js';
import { ShowdownCountdown } from '../components/countdown.js';
import { VolumeControl } from '../components/volume.js';

const Soundtrack = () => {
  return h('iframe', {
    src: 'https://www.youtube.com/embed/PYI09PMNazw?controls=0&autoplay=1&loop=1',
    frameborder: '0',
    allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
    height: '0',
    width: '0',
    allowfullscreen: true,
  })
}

const MainView = ({ state, dispatch }) => {
  return [
    h(VolumeControl, { state, dispatch }),
    h(ShowdownHeader),
    h(ShowdownCountdown),
    state.volume === 'unmute' && h(Soundtrack)
  ];
};

export {
  MainView,
};
