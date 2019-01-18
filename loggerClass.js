'use strict';

// Require the dependency node modules
const dateformat = require('dateformat'),
      chalk = require('chalk');

// Create the loggerClass
class LoggerClass {

    // The constructor
    constructor(config) {
        // Make the passed config object global
        this.config = config;

        // The chalk styles for different log types
        this.criticalStyle = chalk.bold.redBright;
        this.warningStyle = chalk.bold.yellowBright;
        this.verboseStyle = chalk.bold.magentaBright;
        this.okStyle = chalk.bold.gray;
        this.infoStyle = chalk.bold.blueBright;
        this.successStyle = chalk.bold.greenBright;
    }

    // The private function that renders the theme
    _renderTheme(strType, strMessage) {
        // Get the theme from the config and store it in a variable
        let strThemeTemplate = this.config.theme.toString();

        // Render the $DATE variable
        strThemeTemplate = strThemeTemplate.replace("$DATE", dateformat(new Date(), this.config.dateFormat.toString()));

        // Render the $TIME variable
        strThemeTemplate = strThemeTemplate.replace("$TIME", dateformat(new Date(), this.config.timeFormat.toString()));

        // Render the $TYPE variable [Colored for now]
        strThemeTemplate = strThemeTemplate.replace("$TYPE", strType);

        // Render the $MESSAGE variable
        strThemeTemplate = strThemeTemplate.replace("$MESSAGE", strMessage);
        
        // Return the rendered string
        return strThemeTemplate;
    }

    // The function that logs a critical statement, sometimes called a fatal or error
    logCritical(strMessage) {
        // Create a variable where we will store chalk styles
        let style = chalk;

        // Check for colored and boldText in config and style chalk accordingly
        if (this.config.colored == true) {
            style = style.redBright;
        }
        if (this.config.boldText == true) {
            style = style.bold;
        }

        // Log to the console using _renderTheme and our created style
        console.log(this._renderTheme(style(this.config.criticalText.toString().substring(0, 4)), strMessage));

        // Check if exitAfterCritical is true, if yes then exit the program
        if (this.config.exitAfterCritical == true) {
            // Simply, exit the entire program
            process.exit();
        }
    }

    // The function that logs a warning statement
    logWarning(strMessage) {
        // Create a variable where we will store chalk styles
        let style = chalk;

        // Check for colored and boldText in config and style chalk accordingly
        if (this.config.colored == true) {
            style = style.yellowBright;
        }
        if (this.config.boldText == true) {
            style = style.bold;
        }

        // Log to the console using _renderTheme and our created style
        console.log(this._renderTheme(style("WARN"), strMessage));
    }

    // The function that logs a verbose statement, which is normally hidden
    logVerbose(strMessage) {
        // Create a variable where we will store chalk styles
        let style = chalk;

        // Check for colored and boldText in config and style chalk accordingly
        if (this.config.colored == true) {
            style = style.magentaBright;
        }
        if (this.config.boldText == true) {
            style = style.bold;
        }

        // Log to the console using _renderTheme and our created style
        console.log(this._renderTheme(style("VERB"), strMessage));
    }

    // The function that logs an OK message
    logOK(strMessage) {
        // Create a variable where we will store chalk styles
        let style = chalk;

        // Check for colored and boldText in config and style chalk accordingly
        if (this.config.colored == true) {
            style = style.gray;
        }
        if (this.config.boldText == true) {
            style = style.bold;
        }

        // Log to the console using _renderTheme and our created style
        console.log(this._renderTheme(style("OKAY"), strMessage));
    }

    // The function that logs an informational statement
    logInfo(strMessage) {
        // Create a variable where we will store chalk styles
        let style = chalk;

        // Check for colored and boldText in config and style chalk accordingly
        if (this.config.colored == true) {
            style = style.blueBright;
        }
        if (this.config.boldText == true) {
            style = style.bold;
        }

        // Log to the console using _renderTheme and our created style
        console.log(this._renderTheme(style("INFO"), strMessage));
    }

    // The function that logs a success message
    logSuccess(strMessage) {
        // Create a variable where we will store chalk styles
        let style = chalk;

        // Check for colored and boldText in config and style chalk accordingly
        if (this.config.colored == true) {
            style = style.greenBright;
        }
        if (this.config.boldText == true) {
            style = style.bold;
        }

        // Log to the console using _renderTheme and our created style
        console.log(this._renderTheme(style("SUCC"), strMessage));
    }

}

// Export our class, so itivruttah.js can require it
module.exports = LoggerClass;