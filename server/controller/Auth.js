const User = require("../databaseModal/user")
console.log(User);
const jwt = require('jsonwebtoken')
exports.adminSignup= async (req,res) =>{
  await User.find({email:req.body.email})
    .exec(async(err,user)=>{
        if(user.length==1){
           return res.send({errors:"user is all reday signp",signupError:true})
        }
        const {user_name,email,password}=req.body
        const userData= await new User({
            user_name,
            email,
            password,

           
        })
        userData.save((err,data)=>{
            if(err){
               return res.send({errors:err})
            }
            else{
              return res.send({ message:"Admin created successfully",signupError:false})
            }
        })
    })

}



exports.adminLogin=async(req,res)=>{
    const data = false
   await User.findOne({email:req.body.email})
  
    .exec((err,data)=>{
        if(data==null){
            res.send({errors:"you dont have a account",loginError:true}
            )
        }else{
           console.log(data.password);
            if(data.password ==req.body.password){
                console.log({data});
                const token = jwt.sign({_id:data._id,user_name:data.user_name},"prabhakar")
                const {_id,firstName,lastName,email,role}=data
                res.cookie("token",token)
                res.status(200).json({
                    token,
                    user:{
                    _id,firstName,lastName,email,role
                    }
                    
                })
            }
            else{
                res.send({errors:"password is wrong",loginError:true})
            }
        }
    })
}


exports.signout = (req,res)=>{
    res.clearCookie("token")
    return res.send({
        message:"signout seccess ......."
    })
}



