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
        type: [String],
    },
    Status: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);

export default mongoose.model("HoaDon", HoaDonSchema);