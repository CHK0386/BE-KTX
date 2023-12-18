import Accounts from "../Models/Account.js"
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
        if (req.account.id === req.param.id) {
            next()
        } else {
            if (err) return next(createError(403, "you are not authorized"));
        }
    })
}

export const VerifyAdmin = async (req, res, next) => {

    try {
        // Kiểm tra xem người dùng có tồn tại không
        const accounts = await Accounts.findOne({ CMND: req.body.CMND });
        const role = await Role.findById(req.account.RoleId);
        if (!accounts) {
            return res.status(401).json({ message: 'User not found' });
        }
        console.log('Account RoleId:', accounts.RoleId);
        console.log('Token Account:', req.accounts);
        console.log('RoleId:', role);
        // Kiểm tra quyền của người dùng
        Verifytoken(req, res, next, async () => {
        if (accounts.RoleId ) {
                if (role && role.role === 'admin') {
                    // Nếu có quyền admin, cho phép tiếp tục
                    console.log('Role from DB:', role);
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


// export const VerifyAdmin = async (req, res, next) => {
//     try {
//         // Kiểm tra xem người dùng có tồn tại không
//         const account = await Accounts.findOne( {CMND: req.body.CMND} );

//         if (!account) {
//             return res.status(401).json({ message: 'User not found' });
//         }

//         // Kiểm tra quyền của người dùng
//         if (account.RoleId) {
//             const role = await Roles.findById(account.RoleId);

//                 if (role && role.role ==='admin') {
//                     // Nếu có quyền admin, cho phép tiếp tục
//                     next();
//                 } else {
//                     return res.status(403).json({ message: 'User does not have admin privileges' });
//                 }

//         } else {
//             return res.status(403).json({ message: 'User does not have a role assigned' });
//         }
//     } catch (error) {
//         console.error('Error in VerifyAdmin middleware:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };

