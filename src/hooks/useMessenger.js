
import { useCallback, useEffect } from 'react';

export const useMessenger = () => {
  const MESSENGER_VAR = 'MESSENGER';

  const initMessenger = useCallback(() => {
    if (typeof window === 'undefined') return;

    if (!window[MESSENGER_VAR]) {
      window[MESSENGER_VAR] = {
        request: (message, callback) => {
          const response = {
            classifier: 'IError',
            code: -1,
            message: `${MESSENGER_VAR}.request() not initialized`
          };
          console.error(response.message);
          callback.done(JSON.stringify(response));
        }
      };
      console.log(`Messenger initialized: window['${MESSENGER_VAR}']`);
    }
  }, []);

  const sendMessage = useCallback((message, callback) => {
    if (window[MESSENGER_VAR]) {
      window[MESSENGER_VAR].request(message, callback);
    }
  }, []);

  useEffect(() => {
    initMessenger();
    return () => {
      if (window[MESSENGER_VAR]) {
        delete window[MESSENGER_VAR];
      }
    };
  }, [initMessenger]);

  return {
    sendMessage
  };
};
