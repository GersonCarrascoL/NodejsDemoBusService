'use strict'

const CourseModel = require('../models/course-model'),
    cm = new CourseModel()

class CourseController{
    getCourses(){
        return new Promise(function(resolve,reject){
            cm.getCourses((err,data)=>{
                if(err){
                    return reject(err.stack)
                }else{
                    return resolve(data)
                }
            })
        })    
    }
}

module.exports = CourseController