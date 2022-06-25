import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        description: {type: String, required: true},
        date: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true}
    }
);

const tasks = mongoose.models.tasks || mongoose.model('tasks', taskSchema);

export default tasks;