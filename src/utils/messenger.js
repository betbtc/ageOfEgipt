
export class Messenger {
  static MESSENGER_VAR = 'MESSENGER';

  static init() {
    if (typeof window === 'undefined') return;
    
    if (typeof window[this.MESSENGER_VAR] === 'undefined') {
      window[this.MESSENGER_VAR] = {
        request: (message, callback) => {
          const response = {
            classifier: 'IError',
            code: -1,
            message: `${this.MESSENGER_VAR}.request() not yet initialized. Game should initialize it immediately on start`
          };
          console.error(response.message);
          callback.done(JSON.stringify(response));
        }
      };
      console.log(`Messenger object has been created. See window['${this.MESSENGER_VAR}']`);
    } else {
      console.error(`Cannot initialize MESSENGER because variable window['${this.MESSENGER_VAR}'] already defined.`);
    }
  }
}
