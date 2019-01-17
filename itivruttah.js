#!/usr/bin/env node

'use strict';

// Require the dependency modules
const chalk = require('chalk'),
      dateformat = require('dateformat');

// The function that logs an info message to the console
function logInfo(messageStr) {
    console.log("[" + chalk.bold.blue("INFO") + " " + dateformat(new Date(), "hh:MM:ss") + "]: " + messageStr);
}

// Export the required modules
module.exports = {
    info: logInfo
}