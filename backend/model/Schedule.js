const mongoose = require('mongoose')
const Schema = mongoose.Schema

// sync ข้อมูลกับ front-end
const ScheduleSchema = new Schema({
    startDate : {type:String, require:true},
    surname : {type:String, require:true},
    lastname : {type:String, require:true},
    department : {type:String, require:true},
    objective : {type:String, require:true},
    type : {type:String, require:true},
    time : {type:String, require:true},
    place : {type:String, require:true}
})

// ปั้น schema ส่งออก
const scheduleModel = mongoose.model('schedule', ScheduleSchema)

module.exports = scheduleModel

