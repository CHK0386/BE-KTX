import  express  from "express";
import { createAdmin, deleteAdmin, getAdmin, getallAdmin, updateAdmin } from "../Controllers/admin.js";

const router = express.Router();

//Create
router.post("/", createAdmin);
//Update
router.put("/:id", updateAdmin);
//Delete
router.delete("/:id", deleteAdmin);
//Get
router.get("/:id", getAdmin);
//Getall
router.get("/", getallAdmin);
export default router