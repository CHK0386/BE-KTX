import mongoose from "mongoose";

const KTXSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    Status: {
        type: Number,
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
    Featured: {
        type: Boolean,
        default: false,
    },
    CheapestPrice: {
        type: Number,
        required: true,
    },
    Distance: {
        type: String,
        required: true,
    },
    Photos: {
        type: [String],
    },
    Title: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Dormitory", KTXSchema);