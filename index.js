//importing express and mongoose modules according to ES6 syntax
import express from 'express';
import mongoose from 'mongoose';
import productRoute from './routes/product.route.js';

//importing dotenv to load environment variables from a .env file
import dotenv from 'dotenv';
dotenv.config();

//defining the port number for the server to listen on, either from environment variables or defaulting to 3000
const PORT = process.env.PORT || 3000

//creating an instance of express
const app = express()

//Middleware
app.use(express.json()); //middleware to parse JSON request bodies (initiallly you can't)
app.use(express.urlencoded({extended: false})); //middleware to parse forms bodies (initiallly you can't)

//routes
app.use('/api/products', productRoute)



// Get
app.get('/', (req, res) => {
    res.send("Hello from Node API Server!")
});


//connecting to MongoDB using mongoose
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB!");
    app.listen(PORT, () => {
        console.log(`It's alive! The server is running on http://localhost:${PORT}`)
    });
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
