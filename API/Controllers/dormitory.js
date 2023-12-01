import Dormitory from "../Models/Dormitory.js";

//Create
export const createDormitory = async (req, res, next) => {
    const newDormitory = new Dormitory(req.body)
    try {
        const savedDormitory = await newDormitory.save()
        res.status(200).json(savedDormitory)
    } catch (err) {
        next(err)
    }
}
//Update
export const updateDormitory = async (req, res, next) => {
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
}

//Delete
export const deleteDormitory = async (req, res, next) => {
    try {
        await Dormitory.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Delete Success");
    } catch (error) {
        res.status(500).json(error);
    }
}
//Get
export const getDormitory = async (req, res, next) => {
    try {
        const dormitory = await Dormitory.findById(
            req.params.id
        );
        res.status(200).json(dormitory);
    } catch (error) {
        res.status(500).json(error);
    }
}
//Getall
export const getallDormitory = async (req, res, next) => {
    try {
        const dormitorys = await Dormitory.find();
        res.status(200).json(dormitorys);
    } catch (err) {
        next(err);
    }
}