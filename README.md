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
![Screenshot 2024-01-30 at 18 07 52](https://github.com/weyvern/dom-logger/assets/19370560/fda17ca9-d009-4ac4-8328-33edd4cc54cd)
