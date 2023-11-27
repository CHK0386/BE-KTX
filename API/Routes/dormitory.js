import  express  from "express";
import Dormitory from "../Models/Dormitory.js";
const router = express.Router();

//Create
router.post("/", async (req,res)=>{
    const newDormitory = new Dormitory(req.body)
    try{
        const savedDormitory = await newDormitory.save()
        res.status(200).json(savedDormitory)
    }catch(error){
        res.status(500).json(error)
    }
})
//Update
//Delete
//Get
//Getall
export default router