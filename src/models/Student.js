const {mongoose} = require('../config/db')

let studentSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    surname:{
        type:String,
        required: true
    },
    studentID:{
        type:Number,
        required: true
       
    },
    rollno:{
        type:Number,
        required: true
    },
    adress:{ 
        type:String
    }
},
{
    timestamp:true
})

const Student = mongoose.model('Student',studentSchema);

exports.Student=Student
