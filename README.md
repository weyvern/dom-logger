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

You can also use the CDN directly within a JS Module

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>001-Intro-to-JS</title>
  </head>
  <body>
    <main>
      <div id="output"></div>
    </main>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

```js
import DOMLogger from 'https://unpkg.com/@weyvern/dom-logger@1.0.1/index.js';

// a valid HTML element that allows IinnerHTML
const element = document.getElementById('output');

const logger = new DOMLogger(element);

logger.log('Hello World!');
logger.info('Hello World!');
logger.warn('Hello World!');
logger.error('Hello World!');
```

You can additionally style the message CSS, e.g:

```css
.info {
  background-color: #1da4cd;
}

.warn {
  background-color: #f0d16b;
  color: #251919;
}

.error {
  background-color: #f8485e;
}
```

## Example within a div element

![Screenshot 2024-01-30 at 18 07 52](https://github.com/weyvern/dom-logger/assets/19370560/fda17ca9-d009-4ac4-8328-33edd4cc54cd)
