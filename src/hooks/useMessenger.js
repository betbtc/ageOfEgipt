
import { useEffect, useCallback } from 'react';

const MESSENGER_VAR = 'MESSENGER';

export const useMessenger = () => {
  const initializeMessenger = useCallback(() => {
    if (typeof window[MESSENGER_VAR] !== 'undefined') {
      console.error(`Cannot initialize MESSENGER because variable window['${MESSENGER_VAR}'] already defined.`);
      return;
    }

    const messenger = {};
    messenger.request = (message, callback) => {
      const response = {
        classifier: 'IError',
        code: -1,
        message: `${MESSENGER_VAR}.request() not yet initialized. Game should initialize it immediately on start`
      };
      console.error(response.message);
      callback.done(JSON.stringify(response));
    };

    window[MESSENGER_VAR] = messenger;
    console.log(`Messenger object has been created. See window['${MESSENGER_VAR}']`);
  }, []);

  useEffect(() => {
    initializeMessenger();
    
    return () => {
      // Cleanup on unmount
      delete window[MESSENGER_VAR];
    };
  }, [initializeMessenger]);

  const sendMessage = useCallback((message, callback) => {
    if (!window[MESSENGER_VAR]) {
      console.error('Messenger not initialized');
      return;
    }
    window[MESSENGER_VAR].request(message, callback);
  }, []);

  return { sendMessage };
};
