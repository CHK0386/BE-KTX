import Jwt from "jsonwebtoken";
import { createError } from "../Utils/Error.js";
// import { ObjectId } from "mongodb";
import Role from "../Models/Role.js"

export const Verifytoken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {

        return next(createError(401, "you are not authenticated!"))
    }
    Jwt.verify(token, process.env.Jwt, (err, account) => {
        if (err) return next(createError(403, "Token is not valid!"))
        req.account = account;
        next()
    })
}

export const VerifyUser = (req, res, next) => {
    Verifytoken(req, res, next, () => {
        if (req.account.id === req.param.id || req.account.RoleId) {
            next()
        } else {
            if (err) return next(createError(403, "you are not authorized"));
        }
    })
}

// export const VerifyAdmin = async (req, res, next) => {
//     try {
//         const account = await Account.findOne({ CMND: req.body.CMND });

//         if (!account) {
//             return res.status(401).json({ message: 'User not found' });
//         }

//         if (account.RoleId) {

//             const role = await Role.findById(account.RoleId);

//             if (role && role.role === 'admin') {
//                 next();
//             } else {
//                 return res.status(403).json({ message: 'User does not have admin privileges' });
//             }
//         } else {
//             return res.status(403).json({ message: 'User does not have a role assigned' });
//         }
//     } catch (error) {
//         console.error('Error in VerifyAdmin middleware:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };
export const VerifyAdmin = async (req, res, next) => {
    try {
        await Verifytoken(req, res, next, async () => {

            if (req.account.RoleId) {
    
                const role = await Role.findById(req.account.RoleId);
    
                if (req.account.id === req.param.id ||role && role.role === 'admin') {
                    next();
                } else {
                    return res.status(403).json({ message: 'User does not have admin privileges' });
                }
            } else {
                return res.status(403).json({ message: 'User does not have a role assigned' });
            }
        })
    } catch (error) {
        console.error('Error in VerifyAdmin middleware:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};