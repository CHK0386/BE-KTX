import Jwt from "jsonwebtoken";
import { createError } from "../Utils/Error.js";
// import { ObjectId } from "mongodb";
import Role from "../Models/Role.js"
import Account from "../Models/Account.js";

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

export const VerifyAdmin = async (req, res, next) => {
    try {
        const { userId } = req;

        const account = await Account.findById(userId);

        if (!account) {
            return res.status(401).json({ message: 'User not found' });
        }

        if (account.RoleId) {
            const role = await Role.findById(account.RoleId);

            if (role && role.role === 'admin') {
                next();
            } else {
                return res.status(403).json({ message: 'User does not have admin privileges' });
            }
        } else {
            return res.status(403).json({ message: 'User does not have a role assigned' });
        }
    } catch (error) {
        console.error('Error in VerifyAdmin middleware:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
    // try {
    //     const { userId } = req;

    //     const account = await Account.findById(userId);
    //     // const account = await Account.findById(req.account.id);

    //     if (!account) {
    //         return next(createError(401, "User not found"));
    //     }

    //     const role = await Role.findById(account.RoleId);

    //     verifyToken(req, res, () => {
    //         if (role && role.role === 'admin') {
    //             next();
    //         } else {
    //             return next(createError(403, "You are not authorized!"));
    //         }
    //     });
    // } catch (error) {
    //     console.error('Error in VerifyAdmin middleware:', error);
    //     return res.status(500).json({ message: 'Internal server error' });
    // }
    // const account = Account.findOne(req.account.id)
    // const role = Role.findById(account.RoleId);
    // verifyToken(req, res, () => {
    //     if (role && role.role === 'admin') {
    //         next();
    //     } else {
    //         return next(createError(403, "You are not authorized!"));
    //     }
    // });

};