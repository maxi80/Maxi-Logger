# maxi-logger

A simple, colorized logging utility for Node.js applications.

## Installation

Install the package with npm:

```bash
npm install maxi-logger
```
## Usage
First, require the package in your file:

```node
const logger = require('maxi-logger');
```

Then, you can use the logger to log messages at different levels:

```node
logger.info('This is an informational message');
logger.warn('This is a warning');
logger.error('This is an error message');
logger.success('This is a success message');
logger.verbose('This is a verbose message');
````

Each level is associated with a different color:

* info: grey
* warn: yellow
* error: red
* success: green
* verbose: cyan

The logger also includes a stacktrace:

```console
[app.js, line 10] [info] This is an informational message
```

## License
ISC

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
