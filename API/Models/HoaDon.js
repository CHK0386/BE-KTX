import mongoose from "mongoose";

const HoaDonSchema = new mongoose.Schema({
    Price: {
        type: Number,
        required: true,
    },
    IdDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HoaDonDetails',
        required: true,
    },
},
    { timestamps: true }
);

export default mongoose.model("HoaDon", HoaDonSchema);