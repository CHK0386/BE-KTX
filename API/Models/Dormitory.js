import mongoose from "mongoose";

const KTXSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    Desc: {
        type: String,
        required: true,
    },
    Room: {
        type: [String],
    },
    CheapestPrice: {
        type: Number,
        required: true,
    },
    Photos: {
        type: [String],
    },
});

export default mongoose.model("Dormitory", KTXSchema);