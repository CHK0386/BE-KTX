import Accounts from "../Models/Account.js"
export const register = async (req, res, next) => {
    try {
        const newAccount = new Accounts({
            CMND: req.body.CMND,
            MatKhau: req.body.MatKhau,
        })
        await newAccount.save()
        res.status(201).send("Create account success")
    } catch (err) {
        next(err)
    }
}