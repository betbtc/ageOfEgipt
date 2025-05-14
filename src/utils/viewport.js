
import UAParser from './uaparser';

export const ViewportManager = {
  init() {
    if (typeof window === 'undefined') return;
    
    const calculateScaleFactor = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      return Math.min(width / 1920, height / 1080);
    };

    const setViewport = (scale) => {
      const viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', `user-scalable=no, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`);
      document.head.appendChild(viewport);
    };

    const scale = calculateScaleFactor();
    setViewport(scale);
  }
};

export const initConsole = () => {
  if (typeof console === 'undefined') {
    const noop = () => {};
    window.console = {
      log: noop,
      debug: noop,
      info: noop,
      error: noop,
      trace: noop,
      fatal: noop
    };
  }
};
