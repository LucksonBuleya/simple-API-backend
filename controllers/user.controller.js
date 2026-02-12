import User from '../models/user.model.js';

//// controller functions for handling user-related routes ////

// Retrieve all users in db
const getUsers = async (req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

//Retrieve a specific user in db (by ID)
const getUser = async (req, res) => {
    try{
        const { id } = req.params; //id from url 
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }   
};

//Create a new user
const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch(error) {
        //handling any errors that may occur during the request processing
        console.log("Error here!")
        res.status(500).json({message: error.message})

    }
};

//Update a user
const updateUser = async (req, res) => {
  try{
    const {id} = req.params       //destructuring
    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
        return res.status(404).json({message: "User not found"})
    }

    //check again
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
    
  } catch (error){
    res.status(500).json({message: error.message})
  } 
};

//Update a user's role (admin only)
const updateUserRole = async (req, res) => {
    try {
        // Only admin can change roles
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Access denied" });
        }

        const { id } = req.params;
        const { role } = req.body;

        const user = await User.findByIdAndUpdate(
            id,
            { role },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

 //Delete a User
const deleteUser = async (req, res) => {
    try {
        // Only admin can delete
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Access denied" });
        }

        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

//Exporting the controller functions to be used in other parts of the application
export {
    getUsers,
    getUser,
    createUser,
    updateUser,
    updateUserRole,
    deleteUser,
};