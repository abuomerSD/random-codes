const { asyncWrapper } = require('../middlewares/asyncwrapper');
const { Course } = require('../database/database')

const addCourse = asyncWrapper(async (req,res)=> {
    const course = req.body;
    await Course.create(course)
        .then((course)=> {
            res.status(201).json({
                status: "success",
                data: co
            })
        })
});


module.exports = {addCourse}