import { createElement } from '/web_modules/preact.js';

import { LandingView } from '../views/landing.js';
import { MainView } from '../views/main.js';
import { useShowdownState } from '../hooks/useShowdownState.js';

const getViewComponent = (view) => {
  switch (view) {
    case 'main':
      return MainView;
    case 'landing':
    default:
      return LandingView;
  }
};

const Showdown = () => {
  const [state, dispatch] = useShowdownState();

  const ViewComponent = getViewComponent(state.view);

  return createElement('div', { class: 'showdownContainer', }, [
    createElement(ViewComponent, { state, dispatch })
  ]);
};

export {
  Showdown,
}