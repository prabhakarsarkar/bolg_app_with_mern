const mongose = require("mongoose");

const userSchema = new mongose.Schema({
    user_id:{
        type:String,
        required:true,
        trim:true,


    },
    user_name:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    image:{
        type:String
    },
    title:{
        type:String,
        required:true,
        trim:true,
        lowercase:true

    },
    blog:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: new Date()
      }


})

module.exports= mongose.model("blog_data",userSchema)