import { useEffect, useState } from '/web_modules/preact/hooks.js';

const client = createHTTPClientFromFetch(fetch, Headers);

const useCompass = (endpoint) => {
  const [compass, setCompass] = useState(null);

  useEffect(() => {
    if (typeof endpoint === 'string') {
      setCompass(createCompass(endpoint, client));
    } else {
      setCompass(null);
    }
    return () => setCompass(null);
  }, [endpoint])

  return compass;
};

export {
  useCompass,
};
