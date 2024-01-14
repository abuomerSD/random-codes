const resSender = require('../utils/resSender');

const errorHandler = (err, req, res, next) => {
    resSender.error(res, 500, err);
}

module.exports = {errorHandler};

