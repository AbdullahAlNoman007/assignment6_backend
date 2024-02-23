import { Schema, model } from "mongoose";
import { Tmember } from "./member.interface";


const memberSchema = new Schema<Tmember>({
    user: { type: Schema.Types.ObjectId, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true }
})

export const superAdminModel = model<Tmember>('superAdmin', memberSchema);
export const managerModel = model<Tmember>('manager', memberSchema);
export const sellerModel = model<Tmember>('seller', memberSchema);