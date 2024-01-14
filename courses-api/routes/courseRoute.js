const express  =require('express');
const router = express.Router();
const {  addCourse, getAllCourses  } = require('../controllers/courseController')

router.route('/').get(getAllCourses).post(addCourse);


module.exports = router;