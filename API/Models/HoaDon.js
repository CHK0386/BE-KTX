import mongoose from "mongoose";

const HoaDonDetailschema = new mongoose.Schema({
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
    Room: {
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

export default mongoose.model("HoaDonDetails", HoaDonDetailschema);