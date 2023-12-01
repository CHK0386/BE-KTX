import User from "../Models/User"
export const register = async (req,res,next) =>{
    try {
        const newAccount = new Account(req.body)
        
    } catch (err) {
        next(err)
    }
}