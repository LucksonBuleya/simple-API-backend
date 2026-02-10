//importing mongoose to create a schema and model for the products
import mongoose from 'mongoose';

//defining a schema for the products collection in MongoDB
const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required!"] 
        },

        quantity: {
            type: Number,
            required: [true, "Product quantity is required!"],
            default: 0
        },

        price: {
            type: Number,
            required: [true, "Product price is required!"],
            default: 0
        },

        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
);

//creating a model from the schema and exporting it
const Product = mongoose.model('Product', ProductSchema);
export default Product;