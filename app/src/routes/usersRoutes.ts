import express from "express";
import UserController from "../controllers/usersController.js";

const router = express.Router();

router
    .get("/api/v1/users", UserController.listUsers)
    .get("/api/v1/users/:id", UserController.listUserById)
    .post("/api/v1/users", UserController.addUser)
    .put("/api/v1/users/:id", UserController.updateUser)
    .delete("/api/v1/users/:id", UserController.deleteUser);

export default router;