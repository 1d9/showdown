import { createElement as h } from '/web_modules/preact.js';

const VolumeControl = ({ state, dispatch }) => {
  const onMuteClick = () => {
    localStorage.setItem('DEFAULT_VOLUME', 'mute');
    dispatch({ type: 'mute'});
  };

  const onUnmuteClick = () => {
    localStorage.setItem('DEFAULT_VOLUME', 'unmute');
    dispatch({ type: 'unmute' });
  }

  return h('button', {
    class: 'showdownVolumeControl',
    onClick: () => state.volume === 'mute' ? onUnmuteClick() : onMuteClick()
  }, state.volume === 'mute' ? 'unmute' : 'mute')
};

export {
  VolumeControl,
};
