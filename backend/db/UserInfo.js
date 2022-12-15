const mongoose=require('mongoose');

const userinfoSchema= new mongoose.Schema({

    email:String,
    prev_enrollment:Boolean,
    enrollment_date:Date,
    dues:Boolean,
    batch:String
});

module.exports=mongoose.model("user_infos",userinfoSchema);