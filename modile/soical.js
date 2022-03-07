const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const soical_schema=new Schema({

    name:{ type:String,required:true},
    id_soical:{type:String,required:true},
    acount:{type:String,required:true},
});

const soical=mongoose.model("soical",soical_schema);
module.exports=soical;