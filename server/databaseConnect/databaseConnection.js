const mongoose = require("mongoose");

// const url ="mongodb+srv://prabhakar:<password>@cluster0.iygha.mongodb.net/<dbname>?retryWrites=true&w=majority"

// mongodb+srv://blogapp:Prabhakar123#@cluster0.vwz39.mongodb.net/BlogAppBlogApp?retryWrites=true&w=majority
const url ="mongodb+srv://prabhakar:sarkar@cluster0.mui6f.mongodb.net/Book-Library?retryWrites=ctrue&w=majority"
// const url ="mongodb+srv://Rajsarkar:blogapp@cluster0.iuo7h.mongodb.net/demo1?retryWrites=true&w=majority"
mongoose.connect(url,{
     useNewUrlParser: true ,
     useUnifiedTopology:true,
     useCreateIndex: true
     
})
.then(()=>{
    console.log("connect");
})
.catch((err)=>{
    // log(err)
    console.log(err);
    console.log("databaseConnectionError");
})
