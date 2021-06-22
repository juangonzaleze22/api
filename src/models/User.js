import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: false
    },
    username: {
        type: String,
        unique: true
    },
    business_photo: {
        type: Array
    },
    business_name: {
        type: String
    },
    description: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    status: {
        type: String,
    },
    password: {
        type: String,
        required: false
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
      }]
}, {
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, receivePassword) => {
    return await bcrypt.compare(password, receivePassword);
}



export default model('User', userSchema);

