const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const course_schema=new Schema({

    name:{ type:String,required:true},
    id_course:{type:String,required:true},
    date:{type:String,required:true},
    place:{type:String,required:true},
    image:{type:String,required:true}
});

const course=mongoose.model("course",course_schema);
module.exports=course;