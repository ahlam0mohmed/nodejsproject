const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const skill_schema=new Schema({

    name:{ type:String,required:true},
    id_skill:{type:String,required:true}
});

const skill=mongoose.model("skill",skill_schema);
module.exports=skill;