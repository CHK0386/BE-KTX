import  express  from "express";
import { createUser, deleteUser, getUser, getallUser, updateUser } from "../Controllers/user.js";
import { VerifyAdmin } from "../Utils/Verifytoken.js";

const router = express.Router();

//Create
router.post("/", VerifyAdmin, createUser);
//Update
router.put("/:id", VerifyAdmin, updateUser);
//Delete
router.delete("/:id", VerifyAdmin, deleteUser);
//Get
router.get("/:id", getUser);
//Getall
router.get("/", VerifyAdmin, getallUser);
export default router