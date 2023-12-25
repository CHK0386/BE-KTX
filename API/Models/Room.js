import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    StatusId: {
        type: String,
        enum: ['Available', 'Full'],
        required: true,
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    St: {
        type: String,
        required: true,
    },
    Slot: {
        type: Number,
        required: true,
    },
    Floor: {
        type: Number,
        required: true,
    },
    Photos: {
        type: [String],
    },
    RoomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
},
    { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);