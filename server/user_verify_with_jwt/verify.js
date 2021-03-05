const jwt = require("jsonwebtoken")

exports.require_user=(req,res,next)=>{
    var token=req.headers.cookie.slice(6)
    console.log(token);
    if(token!=undefined){
    // const token = req.headers.cookie.splice(6)
    const user = jwt.verify(token,"prabhakar")
    req.user=user 
    }else{
        return res.status(401).json({ message: "Authorization required" })
    }

    next()
}
