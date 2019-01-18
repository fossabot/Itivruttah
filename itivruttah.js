'use strict';

// Require the loggerClass
const loggerClass = require('./loggerClass');

// Declare a default configuration
let defaultConfig = {
    colored: true,
    boldText: true,
    criticalText: "ERROR",
    exitAfterCritical: false,
    timeFormat: "hh:MM:ss",
    dateFormat: "dd-mm-yyyy",
    theme: "$DATE | $TIME | $TYPE | $MESSAGE"
}

// The function that prepares a logger
function createNewLogger(passedConfig) {
    // Check if the passedConfig is actually given or not
    if (passedConfig) {
        // Loop through the defaultConfig
        for(let obj in defaultConfig) {
            // Check if the object is defined in the passedConfig or not
            if (passedConfig[obj] === undefined) {
                // Merge the undefined object with the default one
                passedConfig[obj] = defaultConfig[obj];
            }
        }

        // Return a new instance of loggerClass with the passed config
        return new loggerClass(passedConfig);
    } else {
        // Return a new instance of loggerClass with a default config
        return new loggerClass(defaultConfig);
    }
}

// Export the required modules
module.exports = {
    createNewLogger: createNewLogger
}