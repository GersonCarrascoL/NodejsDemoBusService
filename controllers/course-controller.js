'use strict'

const CourseModel = require('../models/course-model'),
    cm = new CourseModel()

class CourseController{
    getCourses(serviceBusService){
        cm.getCourses(function(err,data){
            serviceBusService.sendQueueMessage('getcourses',data,function(err){
                if(!err){
                    console.log('Message sended to queue getcourses')
                }else{
                    console.log('Error sending message')
                }
            })
        })
        
    }
}

module.exports = CourseController