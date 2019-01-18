'use strict';

// Require the dependency node modules
const dateformat = require('dateformat'),
      chalk = require('chalk');


// Create the loggerClass
class LoggerClass {

    // The constructor
    constructor() {
        // [TODO]: Take the args passed and make them global

        // The chalk styles for different log types
        this.criticalStyle = chalk.bold.redBright;
        this.warningStyle = chalk.bold.yellowBright;
        this.verboseStyle = chalk.bold.magentaBright;
        this.okStyle = chalk.bold.gray;
        this.infoStyle = chalk.bold.blueBright;
        this.successStyle = chalk.bold.greenBright;
    }

    // The function that logs a critical statement, sometimes called a fatal or error
    logCritical(strMessage) {
        console.log(this.criticalStyle(`[ERROR]: `) + strMessage);
    }

    // The function that logs a warning statement
    logWarning(strMessage) {
        console.log(this.warningStyle(`[WARNING]: `) + strMessage);
    }

    // The function that logs a verbose statement, which is normally hidden
    logVerbose(strMessage) {
        console.log(this.verboseStyle(`[VERBOSE]: `) + strMessage);
    }

    // The function that logs an OK message
    logOK(strMessage) {
        console.log(this.okStyle(`[OK]: `) + strMessage);
    }

    // The function that logs an informational statement
    logInfo(strMessage) {
        console.log(this.infoStyle(`[INFO]: `) + strMessage);
    }

    // The function that logs a success message
    logSuccess(strMessage) {
        console.log(this.successStyle(`[SUCCESS]: `) + strMessage);
    }

}

// Export our class, so itivruttah.js can require it
module.exports = LoggerClass;