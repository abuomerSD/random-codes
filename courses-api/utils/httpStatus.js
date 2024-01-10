module.exports  = {
    SUCCESS: "success",
    FAIL: "fail",
    ERROR: "error",
}

const success = (data) => {
    res.json({status: httpStatus.SUCCESS , data});
}

const fail = (data, statusCode) => {
    return res.status(statusCode).json({status: httpStatus.FAIL , data});
}

const error = (message, statusCode) => {
    return res.status(statusCode).json({status: httpStatus.ERROR, message});
    
}

// module.exports = {success, fail, error};