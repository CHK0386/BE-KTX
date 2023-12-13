import mongoose from "mongoose";

const HoaDonDetailSchema = new mongoose.Schema({
    CMND: {
        type: String,
        ref: 'User',
        required: true,
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    MSSV: {
        type: String,
        required: true,
    },
    St: {
        type: String,
        required: true,
    },
    RoomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
    DateIn: {
        type: Date,
        required: true
    },
    DateOut: {
        type: Date,
        required: true
    },
},
    { timestamps: true }
);

export default mongoose.model("HoaDonDetails", HoaDonDetailSchema);