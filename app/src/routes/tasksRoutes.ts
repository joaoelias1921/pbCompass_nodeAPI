import express from "express";
import TaskController from "../controllers/tasksController.js";

const router = express.Router();

router
    .get("/api/v1/tasks", TaskController.listTasks)
    .get("/api/v1/tasks/:id", TaskController.listTaskById)
    .post("/api/v1/tasks", TaskController.addTask)
    .put("/api/v1/tasks/:id", TaskController.updateTask)
    .delete("/api/v1/tasks/:id", TaskController.deleteTasks);

export default router;