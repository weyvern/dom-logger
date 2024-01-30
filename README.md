# DOM Logger

_A simple JavaScript utility to log to a DOM element instead of the console_

## Install

```bash
npm i @weyvern/dom-logger
```

## Usage

```js
import DOMLogger from '@weyvern/dom-logger';

// a valid HTML element that allows IinnerHTML
const element = document.getElementById('output');

const logger = new DOMLogger(element);

logger.log('Hello World!');
logger.info('Hello World!');
logger.warn('Hello World!');
logger.error('Hello World!');
```
