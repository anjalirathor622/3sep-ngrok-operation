const { Student } = require("../models/Student");

let studentController = (req, res)=>{

    const studentObj = new Student(req.query);
    studentObj.save()
    .then(d=>{ 
       console.log(req.query)},

       res.status(200).json({
            msg:'data saved',
            data:req.query
        })
    )
    .catch(e=>
        res.status(400).json({
            msg:'data not saved',

        })
    )
}
exports.studentController=studentController