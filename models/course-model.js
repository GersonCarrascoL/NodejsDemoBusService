'use strict'

const conn = require('./model')

class CourseModel{
    getCourses(cb){
        conn.query('CALL sp_get_courses()',cb)
    }
}

module.exports = CourseModel