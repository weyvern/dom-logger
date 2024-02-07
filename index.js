'use strict';

class DOMLogger {
  #native;
  #output;
  constructor(element, nativeConsole = false) {
    this.#native = nativeConsole;
    this.#output = element;
  }

  serialize(message) {
    let fileAndLine = '';
    if (message instanceof Error) {
      const stackSplit = message.stack.split('/');
      fileAndLine = stackSplit.pop();
      message = stackSplit.join().split('\n')[0];
    } else {
      if (typeof message === 'object') {
        message = JSON.stringify(message);
      }
      fileAndLine = new Error().stack.split('/').pop();
    }
    return `${message} | ${fileAndLine}`;
  }

  scrollToBottom() {
    this.#output.scroll({
      top: this.#output.scrollHeight,
      behavior: 'smooth'
    });
  }

  log(message) {
    if (this.#native) console.log(message);
    this.#output.innerHTML += `<p> > ${this.serialize(message)}</p>`;
    this.scrollToBottom();
  }

  info(message) {
    if (this.#native) console.info(message);
    this.#output.innerHTML += `<p class="info"> > <span role="img" aria-label="info">ℹ️</span> ${this.serialize(
      message
    )}</p>`;
    this.scrollToBottom();
  }

  error(message) {
    if (this.#native) console.error(message);
    this.#output.innerHTML += `<p class="error"> > <span role="img" aria-label="error">☠️</span> ${this.serialize(
      message
    )}</p>`;
    this.scrollToBottom();
  }

  warn(message) {
    if (this.#native) console.warn(message);
    this.#output.innerHTML += `<p class="warn"> > <span role="img" aria-label="warn">⚠️</span>${this.serialize(
      message
    )}</p>`;
    this.scrollToBottom();
  }
}

export default DOMLogger;
