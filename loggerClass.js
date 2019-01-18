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

    // The private function that renders the theme
    _renderTheme(strThemeTemplate, strType, strMessage) {
        // Render the $DATE variable
        strThemeTemplate = strThemeTemplate.replace("$DATE", dateformat(new Date(), "dd-mm-yyyy"));

        // Render the $TIME variable
        strThemeTemplate = strThemeTemplate.replace("$TIME", dateformat(new Date(), "hh:MM:ss"));

        // Render the $TYPE variable [Colored for now]
        strThemeTemplate = strThemeTemplate.replace("$TYPE", strType);

        // Render the $MESSAGE variable
        strThemeTemplate = strThemeTemplate.replace("$MESSAGE", strMessage);
        
        // Return the rendered string
        return strThemeTemplate;
    }

    // The function that logs a critical statement, sometimes called a fatal or error
    logCritical(strMessage) {
        console.log(this._renderTheme("$DATE | $TIME | $TYPE | $MESSAGE", this.criticalStyle("CRIT"), strMessage));
    }

    // The function that logs a warning statement
    logWarning(strMessage) {
        console.log(this._renderTheme("$DATE | $TIME | $TYPE | $MESSAGE", this.warningStyle("WARN"), strMessage));
    }

    // The function that logs a verbose statement, which is normally hidden
    logVerbose(strMessage) {
        console.log(this._renderTheme("$DATE | $TIME | $TYPE | $MESSAGE", this.verboseStyle("VERB"), strMessage));
    }

    // The function that logs an OK message
    logOK(strMessage) {
        console.log(this._renderTheme("$DATE | $TIME | $TYPE | $MESSAGE", this.okStyle("OKAY"), strMessage));
    }

    // The function that logs an informational statement
    logInfo(strMessage) {
        console.log(this._renderTheme("$DATE | $TIME | $TYPE | $MESSAGE", this.infoStyle("INFO"), strMessage));
    }

    // The function that logs a success message
    logSuccess(strMessage) {
        console.log(this._renderTheme("$DATE | $TIME | $TYPE | $MESSAGE", this.successStyle("SUCC"), strMessage));
    }

}

// Export our class, so itivruttah.js can require it
module.exports = LoggerClass;