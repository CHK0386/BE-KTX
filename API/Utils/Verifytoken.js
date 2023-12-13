import  Jwt  from "jsonwebtoken";
import { createError } from "../Utils/Error.js";
// import { ObjectId } from "mongodb";
import Role from "../Models/Role.js"
import Account from "../Models/Account.js";

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

async function isAdmin(accountId) {
    try {
      const account = await Account.findById(accountId);
      if (!account) {
        return false; // Tài khoản không tồn tại
      }
  
      const role = await Role.findById(account.RoleId);
      return role.role === "admin";
    } catch (error) {
      console.error("Error checking admin status:", error);
      return false;
    }
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

export const VerifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };