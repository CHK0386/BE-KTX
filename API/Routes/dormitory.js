import express from "express";
import Dormitory from "../Models/Dormitory.js";
const router = express.Router();

//Create
router.post("/", async (req, res) => {
    const newDormitory = new Dormitory(req.body)
    try {
        const savedDormitory = await newDormitory.save()
        res.status(200).json(savedDormitory)
    } catch (error) {
        res.status(500).json(error)
    }
});
//Update
router.put("/:id", async (req, res) => {
    try {
        const updatedDormitory = await Dormitory.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedDormitory);
    } catch (error) {
        res.status(500).json(error);
    }
});
//Delete
router.delete("/:id", async (req, res) => {
    try {
        await Dormitory.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Delete Success");
    } catch (error) {
        res.status(500).json(error);
    }
});
//Get
router.get("/:id", async (req, res) => {
    try {
        const dormitory = await Dormitory.findById(
            req.params.id
        );
        res.status(200).json(dormitory);
    } catch (error) {
        res.status(500).json(error);
    }
});
//Getall
router.get("/", async (req, res, next) => {
    try {
        const dormitorys = await Dormitory.find();
        res.status(200).json(dormitorys);
    } catch (error) {
        next(error);
    }
});

export default router