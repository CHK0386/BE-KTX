import  Jwt  from "jsonwebtoken";
import { createError } from "../Utils/Error.js";

export const Verifytoken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){

        return next(createError(401,"you are not authenticated!"))
    }
    Jwt.verify(token,process.env.Jwt,(err,user)=>{
        if(err) return next(createError(403,"Token is not valid!"))
        req.user = user;
        next()
    })
}