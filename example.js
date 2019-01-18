#!/usr/bin/env node

'use strict';

// Require the itivruttah logging system
const itivruttah = require('itivruttah');

// Create a new instance of the Logger
let logger = new itivruttah.createNewLogger();

// Example to log a critical message
logger.logCritical("This is a critical message.");

// Example to log a warning message
logger.logWarning("This is an example warning message.");

// Example to log a verbose message, which will be only shown
// When there is "--verbose" flag found in the command-line arguments
logger.logVerbose("This is a message that should be useful to devs.");

// Example to log an OK message
logger.logOK("This is a message that is not an info, but says OK!");

// Example to log an informational message
logger.logInfo("This is an example of an informational statement.");

// Example to log a success message
logger.logSuccess("This is a success message, that makes everyone happy.");