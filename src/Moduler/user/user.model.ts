import { Schema, model } from "mongoose";
import { Tuser } from "./user.interface";

const userSchema = new Schema<Tuser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['superAdmin', 'manager', 'seller'], required: true }
})

export const userModel = model<Tuser>('user', userSchema);