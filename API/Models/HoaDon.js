import { boolean } from "joi";
import mongoose from "mongoose";

const HoaDonSchema = new mongoose.Schema({
    RoomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    IdDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HoaDonDetails',
        required: true,
    },
    Status: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);

export default mongoose.model("HoaDon", HoaDonSchema);