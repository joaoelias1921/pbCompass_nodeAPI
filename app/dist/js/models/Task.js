"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
    description: { type: String, required: true },
    date: { type: Date, required: true },
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'users', required: true }
});
const tasks = mongoose_1.default.models.tasks || mongoose_1.default.model('tasks', taskSchema);
exports.default = tasks;
