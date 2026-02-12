import express from 'express';
import {getUsers, getUser, createUser, updateUser, deleteUser, updateUserRole} from '../controllers/user.controller.js';

//creating a router instance to define routes for User-related operations
const router = express.Router();

/// controller functions for handling User-related routes

// Retrieve all Users in db
router.get('/', getUsers);
router.get("/:id", getUser);

//Create a new User
router.post("/", createUser);

//update a User
router.put('/:id', updateUser);

//Update a User's role (admin only)
router.put('/:id/role', updateUserRole);

//Delete a User
router.delete('/:id', deleteUser);


export default router;