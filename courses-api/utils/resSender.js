const httpStatus  = {
    SUCCESS: "success",
    FAIL: "fail",
    ERROR: "error",
}

const success = (res, data) => {
    res.json({status: httpStatus.SUCCESS , data});
}

const fail = (res, statusCode, data) => {
    return res.status(statusCode).json({status: httpStatus.FAIL , data});
}

const error = (res, statusCode, message) => {
    return res.status(statusCode).json({status: httpStatus.ERROR, message});
    
}

module.exports = {success, fail, error};