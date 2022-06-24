import express from "express";
import TaskController from "../controllers/tasksController.js";

const router = express.Router();

router
    .get("/tasks", TaskController.listTasks)
    .get("/tasks/:id", TaskController.listTaskById)
    .post("/tasks", TaskController.addTask)
    .put("/tasks/:id", TaskController.updateTask)
    .delete("/tasks/:id", TaskController.deleteTasks);

export default router;