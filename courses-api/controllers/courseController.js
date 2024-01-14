const { asyncWrapper } = require('../middlewares/asyncwrapper');
const { Course } = require('../database/database')

const addCourse = asyncWrapper(async (req,res)=> {
    const course = req.body;
    await Course.create(course)
        .then((course)=> {
            res.status(201).json({
                status: "success",
                data: course
            })
        })
});

const getAllCourses = async (req, res) => {
    const courses = await Course.findAll();
    res.status(200).json(courses);
}


module.exports = {addCourse, getAllCourses}