const blogDB = require("../databaseModal/userBlog")
exports.create_blog =async (req,res)=>{
    console.log(req.user);
    
    const {image,title,blog}=req.body;

    const product =await new blogDB({
       user_id:req.user._id,
       user_name:req.user.user_name,
        image,
        title,
        blog,
    })

    product.save((err,data)=>{

        if(err){    
            console.log("errrrrr");
            return res.status (404).json({error:err})
        }
        else{
            return res.status(200).json({data:data})
        }

    })   
}

exports.get_all_blog=async(req,res)=>{
    await blogDB.find({})
    .then(data=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.get_blog_by_id =async(req,res)=>{
    await blogDB.findById({_id:req.params.id})
    .then(data=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

exports.delete_blog_by_id =async(req,res)=>{
    await blogDB.findByIdAndDelete({_id:req.params.id})
    .then(()=>{
        return res.status(200).json({message:"delete seccess"})
    })  
    .catch((err)=>{
        return res.status(404).json(err)
    })
}

// exports.update_blog_by_id =async(req,res)=>{

// }