
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
      const device = parser.getDevice();

      if (device.type === 'mobile' || device.type === 'tablet') {
        return Math.min(width / SCREEN_WIDTH, height / SCREEN_HEIGHT);
      }
      return 1.0;
    };

    const scaleFactor = calculateScaleFactor();
    const viewport = document.createElement('meta');
    viewport.setAttribute('name', 'viewport');
    viewport.setAttribute('content', `width=device-width, initial-scale=${scaleFactor}, user-scalable=no`);
    document.head.appendChild(viewport);
  }
};

export const initConsole = () => {
  if (typeof console === 'undefined') {
    const noop = () => {};
    console = {
      log: noop,
      debug: noop, 
      info: noop,
      error: noop,
      trace: noop,
      fatal: noop
    };
  }
};
