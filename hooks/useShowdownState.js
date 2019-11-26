import { useEffect, useState, useReducer } from '/web_modules/preact/hooks.js';

const DEFAULT_STATE = {
  view: 'landing',
  volume: localStorage.getItem('DEFAULT_VOLUME') || 'mute',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'play':
      return {
        ...state,
        view: 'main',
        volume: 'unmute',
      }
    case 'play-muted':
      return {
        ...state,
        view: 'main',
        volume: 'mute',
      }
    case 'mute':
      return {
        ...state,
        volume: 'mute',
      }
    case 'unmute':
      return {
        ...state,
        volume: 'unmute',
      }
    default:
      return state;
  }
};

const useShowdownState = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  return [state, dispatch]
};

export {
  useShowdownState,
};
