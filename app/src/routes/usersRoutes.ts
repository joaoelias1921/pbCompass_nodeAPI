import express from "express";
import UserController from "../controllers/usersController.js";

const router = express.Router();

router
    .get("/users", UserController.listUsers)
    .get("/users/:id", UserController.listUserById)
    .post("/users", UserController.addUser)
    .put("/users/:id", UserController.updateUser)
    .delete("/users/:id", UserController.deleteUser);

export default router;