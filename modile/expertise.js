const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const exper_schema=new Schema({

    name:{ type:String,required:true},
    id_expe:{type:String,required:true},
    num_year:{type:Number,required:true},
    place:{type:String,required:true}
    
});

const exper=mongoose.model("exper",exper_schema);
module.exports=exper;