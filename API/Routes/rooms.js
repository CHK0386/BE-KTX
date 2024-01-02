import  express  from "express";
import { createRoom, createRoomDetails, deleteRoom, deleteRoomDetails, getRoom, getRoomDetail, getallRoom, getallRoomDetails, updateRoom, updateRoomDetails, updateRoomavAilability } from "../Controllers/room.js";
import { VerifyAdmin,VerifyUser  } from "../Utils/Verifytoken.js";

const router = express.Router();

//Create
router.post("/dorm/:dormitoryId", VerifyAdmin,  createRoom);
//add sv vào room
router.post("/details", VerifyAdmin, createRoomDetails);
//Update
router.put("/availability/:id", VerifyAdmin, updateRoomavAilability);
router.put("/:id", VerifyAdmin, updateRoom);
router.put("/details/:id", VerifyAdmin,  updateRoomDetails);
//Delete
router.delete("/:id/:dormitoryId", VerifyAdmin, deleteRoom);
router.delete("/:id", VerifyAdmin, deleteRoomDetails);
//Get
router.get("/:id", getRoom);
router.get("/details/:id",VerifyAdmin, getRoomDetail);
//Getall
router.get("/", getallRoom);
router.get("/getalldetails",VerifyAdmin, getallRoomDetails);

// //Checkout Room
// router.post("/:roomId", VerifyUser, checkoutRoom);

export default router