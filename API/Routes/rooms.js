import  express  from "express";
import { createRoom, deleteRoom, getRoom, getallRoom, updateRoom } from "../Controllers/room.js";

const router = express.Router();

//Create
router.post("/:dormitoryId", createRoom);
//Update
router.put("/:id", updateRoom);
//Delete
router.delete("/:id/:dormitoryId", deleteRoom);
//Get
router.get("/:id", getRoom);
//Getall
router.get("/", getallRoom);

export default router