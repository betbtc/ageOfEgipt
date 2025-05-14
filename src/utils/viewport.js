import UAParser from './uaparser';

const SCREEN_WIDTH = 1920;
const SCREEN_HEIGHT = 1080;

export const ViewportManager = {
  init() {
    if (typeof window === 'undefined') return;

    const calculateScaleFactor = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const parser = new UAParser();
      const browser = parser.getBrowser();
      const device = parser.getDevice();

      // Handle high resolution screens differently
      if (device.type === 'mobile' || device.type === 'tablet') {
        return Math.min(width / SCREEN_WIDTH, height / SCREEN_HEIGHT);
      }

      return 1.0; // Desktop default scale
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