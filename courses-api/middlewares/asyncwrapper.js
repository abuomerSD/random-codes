const asyncWrapper = (fn)=> {
    try{
        return fn();
    }
    catch(e) {
        resizeBy.status(400).json({
            "status": "fail",
            "data": e.message,
        })
    }
}

module.exports = {asyncWrapper};