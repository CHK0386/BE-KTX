import  express  from "express";
import { createRoom, deleteRoom, getRoom, getallRoom, updateRoom, updateRoomavAilability } from "../Controllers/room.js";
import { VerifyAdmin } from "../Utils/Verifytoken.js";

const router = express.Router();

//Create
router.post("/:dormitoryId", VerifyAdmin,  createRoom);
//Update
router.put("/availability/:id", updateRoomavAilability);
router.put("/:id", VerifyAdmin,  updateRoom);
//Delete
router.delete("/:id/:dormitoryId", VerifyAdmin, deleteRoom);
//Get
router.get("/:id", getRoom);
//Getall
router.get("/", getallRoom);

export default router