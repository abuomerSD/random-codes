const chalk = require('chalk');

module.exports = (req, res, next)=> {
    console.log(`${chalk.green(req.method)} ${chalk.red(req.url)}`);
    next();
}