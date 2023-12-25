import  express  from "express";
import { createRoom, createRoomDetails, deleteRoom, deleteRoomDetails, getRoom, getRoomDetail, getallRoom, getallRoomDetails, updateRoom, updateRoomDetails, updateRoomavAilability } from "../Controllers/room.js";
import { VerifyAdmin } from "../Utils/Verifytoken.js";

const router = express.Router();

//Create
router.post("/:dormitoryId", VerifyAdmin,  createRoom);
router.post("/", VerifyAdmin,  createRoomDetails);
//Update
router.put("/availability/:id", updateRoomavAilability);
router.put("/:id", VerifyAdmin,  updateRoom);
router.post("/:id", VerifyAdmin,  updateRoomDetails);
//Delete
router.delete("/:id/:dormitoryId", VerifyAdmin, deleteRoom);
router.delete("/:id", VerifyAdmin, deleteRoomDetails);
//Get
router.get("/:id", getRoom);
router.get("/:id", getRoomDetail);
//Getall
router.get("/", getallRoom);
router.get("/", getallRoomDetails);

export default router