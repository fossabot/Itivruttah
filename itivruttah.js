'use strict';

// Require the loggerClass
const loggerClass = require('./loggerClass');

// The function that prepares a logger
function createNewLogger() {
    // [TODO]: This function needs to be passed an object for configuration
    // Return a new instance of loggerClass
    return new loggerClass();
}

// Export the required modules
module.exports = {
    createNewLogger: createNewLogger
}