"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasksController_js_1 = __importDefault(require("../controllers/tasksController.js"));
const router = express_1.default.Router();
router
    .get("/api/v1/tasks", tasksController_js_1.default.listTasks)
    .get("/api/v1/tasks/:id", tasksController_js_1.default.listTaskById)
    .post("/api/v1/tasks", tasksController_js_1.default.addTask)
    .put("/api/v1/tasks/:id", tasksController_js_1.default.updateTask)
    .delete("/api/v1/tasks/:id", tasksController_js_1.default.deleteTasks);
exports.default = router;
