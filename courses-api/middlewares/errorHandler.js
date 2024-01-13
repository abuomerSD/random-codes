const errorHandler = (err, req, res, next) => {
    if(err) {
        return next(err);
    }
    res.status(500).json({
        "status": "error",
        "message": res.message,
    })
}

module.exports = errorHandler;

