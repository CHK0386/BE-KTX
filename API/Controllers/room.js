import Room from "../Models/Room.js";
import Dormitory from "../Models/Dormitory.js";
import { createError } from "../Utils/Error.js";

export const createRoom = async (req,res,next)=>{
    const dormitoryId = req.params.dormitoryId;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
          await Dormitory.findByIdAndUpdate(dormitoryId , {
            $push: { Room: savedRoom._id },
          });
        } catch (err) {
          next(err);
        }
        res.status(200).json(savedRoom);
      } catch (err) {
        next(err);
      }
};



//Update
export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedRoom);
    } catch (error) {
        res.status(500).json(error);
    }
}


//update ngày cho cái phòng ý là ngày book hoặc ngày hết hạn tùy
export const updateRoomavAilability = async (req, res, next) => {
    try {
        await Room.updateOne({"RoomNumbers._id": req.params.id},{
            $push:{
                "RoomNumbers.$.unavailableDates":req.body.dates
            }
        });
        res.status(200).json("Update success!");
    } catch (error) {
        res.status(500).json(error);
    }
}

//Delete
export const deleteRoom = async (req, res, next) => {
    const dormitoryId = req.params.dormitoryId;
    try {
        await Room.findByIdAndDelete(
            req.params.id
        );
        try {
            await Dormitory.findByIdAndUpdate(dormitoryId , {
              $pull: { Room: req.params.id },
            });
          } catch (err) {
            next(err);
          }
        res.status(200).json("Delete Success");
    } catch (error) {
        res.status(500).json(error);
    }
}


//Get
export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(
            req.params.id
        );
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json(error);
    }
}


//Getall
export const getallRoom = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
}



//CheckOut
// export const checkoutRoom = async (req, res, next) => {
//     try {
//         const roomId = req.params.roomId;

//         // Find the room by ID
//         const room = await Room.findById(roomId);

//         // Check if the room exists
//         if (!room) {
//             return res.status(404).json({ message: 'Room not found' });
//         }

//         // Update room status or perform any necessary checkout logic
//         room.StatusId = 'Available';
//         room.UserId = undefined; // Assuming you store the user who booked the room

//         // Save the updated room
//         const updatedRoom = await room.save();

//         // Respond with the updated room or a success message
//         res.status(200).json(updatedRoom);
//     } catch (error) {
//         // Handle errors
//         next(error);
//     }
// };