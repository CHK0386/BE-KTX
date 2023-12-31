import Accounts from '../Models/Account.js';
import bcrypt from 'bcryptjs';
import { createError } from '../Utils/Error.js';
import jwt from 'jsonwebtoken';
import User from '../Models/User.js';
import Role from '../Models/Role.js';

//register
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(req.body.MatKhau, salt);
    const newAccount = new Accounts({
      CMND: req.body.CMND,
      MatKhau: hash,
      RoleId: req.body.RoleId
    });
    await newAccount.save();
    res.status(201).json({ id: newAccount._id });
  } catch (err) {
    next(err);
  }
};
//login
export const login = async (req, res, next) => {
  try {
    const account = await Accounts.findOne({ CMND: req.body.CMND });
    if (!account) return next(createError(404, 'Không tìm thấy thông tin CMND!'));

    const isPasswordCorrect = await bcrypt.compare(req.body.MatKhau, account.MatKhau);
    if (!isPasswordCorrect) return next(createError(400, 'Sai mật khẩu!'));
    const role = await Role.findOne({ _id: account.RoleId });

    const token = jwt.sign({ id: account._id, CMND: account.CMND, RoleId: account.RoleId }, process.env.JWT, {
      expiresIn: '1h'
    });
    const { MatKhau, RoleId, CMND, _id } = account._doc;
    res
      .cookie('access_token', token, {
        httpOnly: true
      })
      .status(201)
      .json({ details: { CMND, MatKhau, _id, RoleId }, role });
  } catch (err) {
    next(err);
  }
};
