import  express  from "express";
import { createUser, deleteUser, getUser, getallUser, updateUser } from "../Controllers/user.js";
import { Verifytoken } from "../Utils/Verifytoken.js";
const router = express.Router();

router.get("/checkauth", Verifytoken,(req,res,next)=>{
    res.send("you are logged in");
});
//Create
router.post("/", createUser);
//Update
router.put("/:id", updateUser);
//Delete
router.delete("/:id", deleteUser);
//Get
router.get("/:id", getUser);
//Getall
router.get("/", getallUser);
export default router