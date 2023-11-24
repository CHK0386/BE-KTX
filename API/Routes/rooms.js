import { Express } from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("fuck")
})

export default router