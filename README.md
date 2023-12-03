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
const maxi = require('maxi-logger');
```

Then, you can use the logger to log messages at different levels:

```node
maxi.log("success", "This is a success message.");
maxi.log("info", "This is an info message.");
maxi.log("warn", "This is a warning message.");
maxi.log("error", "This is an error message.");
maxi.log("verbose", "This is a verbose message.");

// you can colorize text also.
maxi.log("info", maxi.colorize("cyan", "This is a cyan message."));
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
