import mongoose from "mongoose";

const HoaDonSchema = new mongoose.Schema({
    Price: {
        type: Number,
        required: true,
    },
},
    { timestamps: true }
);

export default mongoose.model("HoaDon", HoaDonSchema);