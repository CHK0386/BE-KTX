import mongoose from "mongoose";
const { Schema } = mongoose;

const RoleSchema = new Schema(
    {
        Role: {
            type: String,
            enum: ['admin', 'student', 'superAdmin'],
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Roles", RoleSchema);