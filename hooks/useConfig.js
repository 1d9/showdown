import { useEffect, useState } from '/web_modules/preact/hooks.js';

const useConfig = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('/config.json')
      .then(response => response.json())
      .then(config => console.log(config) || setConfig(config));
  }, [])

  return config;
};

export {
  useConfig,
};
