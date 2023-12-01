import mongoose from "mongoose";
const { Schema } = mongoose;

const AccountSchema = new Schema(
    {
        CMND: {
            type: String,
            required: true,
        },
        MatKhau: {
            type: String,
            required: true,
            default: 'Password@123',
            validate: {
                validator: function(value) {
                    // Kiểm tra xem mật khẩu có bao gồm số, kí tự, và ít nhất 1 kí tự đặc biệt
                    return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&*!])[0-9a-zA-Z@#$%^&*!]{6,}$/.test(value);
                },
                message: props => `${props.value} Does not meet the length and structure requirements for the password!`,
            },
        },
        RoleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'roles',
            required: true,
        },
        
    },
    { timestamps: true }
);

export default mongoose.model("Accounts", AccountSchema);