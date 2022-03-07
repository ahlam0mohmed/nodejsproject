const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const quality_schema=new Schema({

    name:{ type:String,required:true},
    id_quality:{type:String,required:true},
    date:{type:String,required:true},
    place:{type:String,required:true},
    department:{type:String,required:true},
    avreg:{type:Number,required:true},
    appreciaion:{type:String,required:true},
    image:{type:String,required:true}
});

const quality=mongoose.model("quality",quality_schema);
module.exports=quality;