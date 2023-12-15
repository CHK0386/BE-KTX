import  express  from "express";
import { VerifyAdmin } from "../Utils/Verifytoken.js";
import { createHD, createHDCT, getHDCT, getallHD, gethoadon, updateHD, updateHDCT } from "../Controllers/hoadon.js";

const router = express.Router();

//Create HD
router.post("/", VerifyAdmin, createHD);
//Create HDCT
router.post("/:hdId", VerifyAdmin, createHDCT);
//Update
router.put("/:id",VerifyAdmin, updateHD);
router.put("/:id",VerifyAdmin, updateHDCT);
//Delete
// router.delete("/:id", VerifyAdmin);
//Get
router.get("/:id",getHDCT);
//Getall
router.get("/", VerifyAdmin, getallHD);
router.get("/hoadondetails/:id", gethoadon);

export default router