import express from "express";

import {
    createDormitory,
    deleteDormitory,
    getDormitory,
    getallDormitory,
    updateDormitory
} from "../Controllers/dormitory.js";
const router = express.Router();

//Create
router.post("/", createDormitory);
//Update
router.put("/:id", updateDormitory);
//Delete
router.delete("/:id", deleteDormitory);
//Get
router.get("/:id", getDormitory);
//Getall
router.get("/", getallDormitory);

export default router