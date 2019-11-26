import { createElement as h } from '/web_modules/preact.js';

const LandingView = ({ dispatch }) => {
  const onPlayClick = () => {
    dispatch({ type: 'play' });
    localStorage.setItem('DEFAULT_VIEW', 'main');
    localStorage.setItem('DEFAULT_VOLUME', 'unmute');
  };
  const onPlayMutedClick = () => {
    dispatch({ type: 'play-muted' });
    localStorage.setItem('DEFAULT_VIEW', 'main');
    localStorage.setItem('DEFAULT_VOLUME', 'mute');
  };

  return h('div', { class: 'landingContainer' }, [
    h('h1', {}, 'Showdown at High Noon'),
    h('p', {},
      'This page uses autoplaying Audio and Video on this page as part of it\'s primary content. ' +
      'You can change the volume on the page by the control in the top right hand corner of the screen.'
    ),
    h('div', { class: 'landingControls' }, [
      h('button', { class: 'landingPlay', onClick: onPlayClick }, 'Play'),
      h('button', { class: 'landingPlayMuted', onClick: onPlayMutedClick }, 'Start muted')
    ])
  ]);
};

export {
  LandingView,
};
