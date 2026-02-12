//importing mongoose to create a schema and model for the users
import mongoose from 'mongoose';

//defining a schema for the users collection in MongoDB
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "User name is required!"],
            unique: true,
            trim: true 
        },

        email: {
            type: String,
            required: [true, "User email is required!"],
            unique: true,
            trim: true,
            lowercase: true
        },

        password: {
            type: String,
            required: [true, "password is required!"],
            trim: true,
            minlength: [6, "Password must be at least 6 characters long!"]
        },

        bio: {
            type: String,
            required: false,
            default: ""
        },
        
        image: {
            type: String,
            required: false,
        },

        role:{
            type: String,
            enum: ["user", "moderator", "admin"],
            default: "user"
        }        
    },
    {
        timestamps: true
    }
);

//creating a model from the schema and exporting it
const User = mongoose.model('User', UserSchema);
export default User;