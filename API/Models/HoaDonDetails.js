import mongoose from "mongoose";

const HoaDonDetailSchema = new mongoose.Schema({
    CMND: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Mssv: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    St: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
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