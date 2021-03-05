const mongose = require("mongoose");

const userSchema = new mongose.Schema({
    user_name:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20

    },

    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true

    },
    password:{
        type:String,
        required:true
    }
    


},{timestamps:true})

module.exports= mongose.model("userdata",userSchema)