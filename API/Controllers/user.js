import Users from "../Models/User.js";

//Create
export const createUser = async (req, res, next) => {
    const newUser = new Users(req.body)
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        next(err)
    }
}
//Update
export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await Users.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

//Delete
export const deleteUser = async (req, res, next) => {
    try {
        await Users.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Delete Success");
    } catch (error) {
        res.status(500).json(error);
    }
}
//Get
export const getUser = async (req, res, next) => {
    try {
        const User = await Users.findById(
            req.params.id
        );
        res.status(200).json(User);
    } catch (error) {
        res.status(500).json(error);
    }
}
//Getall
export const getallUser = async (req, res, next) => {
    try {
        const Users = await User.find();
        res.status(200).json(Users);
    } catch (err) {
        next(err);
    }
}