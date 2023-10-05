const logReq = (req, res, next) => {
    console.log("\x1b[32m%s\x1b[0m"  ,`${req.url} ${req.method}`);
    next();
}

const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        "error":"error"
    });
}

module.exports = { logReq, errorHandler }