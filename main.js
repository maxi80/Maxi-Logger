const path = require('path');

// Define ANSI color codes
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  grey: "\x1b[90m",
  brightRed: "\x1b[91m",
  brightGreen: "\x1b[92m",
  brightYellow: "\x1b[93m",
  brightBlue: "\x1b[94m",
  brightMagenta: "\x1b[95m",
  brightCyan: "\x1b[96m",
  brightWhite: "\x1b[97m",
};

class Logger {
  // Method to colorize text
  colorize(color, text) {
    return `${colors[color]}${text}${colors.reset}`;
  }
  
  // Method to log messages with level and color
  log(level, message) {
    const color = this.getLevelColor(level);
    const { file, line } = this.getStackInfo();
    console.log(`[${this.colorize('white', `${file}, line ${line}`)}] [${this.colorize(color, level)}] ${message}`); 
  }

  // Method to get color based on log level
  getLevelColor(level) {
    const levelColors = {
      verbose: 'cyan',
      success: 'green',
      error: 'red',
      info: 'grey',
      warn: 'yellow',
      default: 'white'
    };
    return levelColors[level] || levelColors.default;
  }

  // Method to get stack trace information
  getStackInfo() {
    const err = {};
    Error.captureStackTrace(err, this.getStackInfo); // eslint-disable-line no-restricted-syntax
    const stacklist = err.stack.split('\n').slice(2); // Remove the first two lines of the stack: getStackInfo and the constructor
    const stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi; // Stack trace format
    const stackReg2 = /at\s+()(.*):(\d*):(\d*)/gi;
    const s = stacklist[0]; // Stack trace line
    const sp = stackReg.exec(s) || stackReg2.exec(s); // Stack trace line format
    if (sp && sp.length === 5) { // If stack trace line format matches the regex
      return {
        method: sp[1], // Method name
        relativePath: sp[2], // File path
        line: sp[3], // Line number
        pos: sp[4], // Column number
        file: path.basename(sp[2]), // File name
        stack: stacklist.join('\n') // Stack trace
      };
    }
  }
}

// Export an instance of Logger
module.exports = new Logger();
