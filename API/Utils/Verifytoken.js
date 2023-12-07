import  Jwt  from "jsonwebtoken";
import { createError } from "../Utils/Error.js";
import { ObjectId } from "mongodb";


export const Verifytoken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){

        return next(createError(401,"you are not authenticated!"))
    }
    Jwt.verify(token,process.env.Jwt,(err,account)=>{
        if(err) return next(createError(403,"Token is not valid!"))
        req.account = account;
        next()
    })
}

export const VerifyUser = (req,res,next)=>{
    Verifytoken(req,res,next,()=>{
        if(req,account.id === req.param.id || req.account.RoleId){
            next()
        }else{
            if(err) return next(createError(403,"you are not authorized"));
        }
    })
}

export const VerifyAdmin = (req,res,next)=>{
    const accountId = new ObjectId("656cb27c0219ef038cbbcd6c");
    const isAdmin = checkAdminRole(accountId);
    Verifytoken(req,res,next,()=>{
        if(isAdmin){
            next()
        }else{
            if(err) return next(createError(403,"you are not authorized"));
        }
    })
}