import  express  from "express";
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("home")
})

router.get("/Login",(req,res)=>{
    res.send("Login")
})
export default router