"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    id: { type: String },
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    birthDate: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: String, required: true },
    complement: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String, required: true }
});
// coleção no mongoDB
const users = mongoose_1.default.models.users || mongoose_1.default.model('users', userSchema);
exports.default = users;
