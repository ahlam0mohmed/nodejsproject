const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const personl_schema=new Schema({

    id_p:{type:String,required:true},
    name:{ type:String,required:true},
    E_mail:{ type:String,required:true},
    gender:{ type:String,required:true},
    birthday:{type:String,required:true},
    id_cardnum:{type:Number,required:true},
    id_cardimg:{type:String,required:true},
    cv:{type:String,required:true},
    address:{type:String,require:true},
    phone:{type:Number,require:true},
    /*id_course:{type:Number,required:true},
    id_expe:{type:Number,required:true},
    id_quality:{type:Number,required:true},
    id_skill:{type:Number,required:true},
    id_soical:{type:Number,required:true},*/
    image:{type:String,required:true}
});

const personl=mongoose.model("persnol",personl_schema);
module.exports=personl;