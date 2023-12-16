import  express  from "express";
import { VerifyAdmin } from "../Utils/Verifytoken.js";
import { createHD, createHDCT, getHDCT, getallHD, gethoadon, updateHD, updateHDCT } from "../Controllers/hoadon.js";

const router = express.Router();

//Create HD
router.post("/", createHD);
//Create HDCT
router.post("/:hdId", createHDCT);
//Update
router.put("/:id", updateHD);
router.put("/:id", updateHDCT);
//Delete
// router.delete("/:id", VerifyAdmin);
//Get
router.get("/:id", getHDCT);
//Getall
router.get("/", getallHD);
router.get("/hoadondetails/:id", gethoadon);

export default router