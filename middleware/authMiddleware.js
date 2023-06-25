//we want to know if we have jwt in our req if the jwt not  vaild  we redirect the user to login page

const jwt = require('jsonwebtoken');
const requireAuth = (req,res,next)=>{

    const token = req.cookies.jwt; //to know if we have jwt in our req
 
    //check json jwt exists and valid

    if (token){
      jwt.verify(token,'this secret',(err,decodedToken)=>{
         if(err){
            console.log(err.message)
            res.redirect('/login')
         } else {
               console.log(decodedToken);
                   next();     
         }
      })
    } 
      else {
         res.redirect('/login')
      }

}

module.exports={requireAuth}