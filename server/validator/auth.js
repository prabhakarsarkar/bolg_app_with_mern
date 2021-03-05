const {check,validationResult} = require('express-validator');

exports.signupValidationRequest=[
    check('user_name')
    .notEmpty()
    .withMessage('user name is required'),
    check('email')
    .isEmail()
    .withMessage('Valid email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('Password must be at least 6 character'),
]




exports.loginValidationRequest=[
    check('email')
    .isEmail()
    .withMessage('valid email is required'),
    check('password')   
    .isLength({min:6})
    .withMessage('password must be at least 6 character'),
]

exports.isValidation=(req,res,next)=>{
    
    const error =validationResult(req)
    if(error.array().length>0){
       return res.send({errors:error.array()[0].msg,loginError:true,signupError:true})
    }
        next();     
        
    
}