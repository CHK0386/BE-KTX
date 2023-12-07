import  express  from "express";
import  {login, register}  from "../Controllers/auth.js";
import { VerifyAdmin, VerifyUser, Verifytoken } from "../Utils/Verifytoken.js";
const router = express.Router();


router.get("/checkauth", Verifytoken,(req,res,next)=>{
    res.send("you are logged in");
});
router.get("/checkuser/:id", VerifyUser,(req,res,next)=>{
    res.send("you are logged in");
});
router.get("/checkadmin/:id", VerifyAdmin,(req,res,next)=>{
    res.send("you are logged in admin account");
});

router.post("/register", register);
router.post("/login", login);

export default router