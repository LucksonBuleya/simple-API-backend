import Product from '../models/product.model.js';

//// controller functions for handling product-related routes ////

// Retrieve all products in db
const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

//Retrieve a specific product in db (by ID)
const getProduct = async (req, res) => {
    try{
        const { id } = req.params; //id from url 
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }   
};

//Create a new product
const createProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch(error) {
        //handling any errors that may occur during the request processing
        console.log("Error here!")
        res.status(500).json({message: error.message})

    }
};

//Update a product
const updateProduct = async (req, res) => {
  try{
    const {id} = req.params       //destructuring
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
        return res.status(404).json({message: "Product not found"})
    }

    //check again
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
    
  } catch (error){
    res.status(500).json({message: error.message})
  } 
};

//Delete a Product
const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;

        const product = await Product.findByIdAndDelete(id);

        if(!product) {
            return res.status(404).json({message: "Product not found"})
        }

        res.status(200).json({message: "Product deleted successfully"})
    } catch (error){
        res.status(500).json({message: error.message})
    }
};


//Exporting the controller functions to be used in other parts of the application
export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};