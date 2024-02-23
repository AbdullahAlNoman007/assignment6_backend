import { Types } from "mongoose";

export interface Tmember {
    user: Types.ObjectId;
    name: string;
    email: string;
    role: 'superAdmin' | 'manager' | 'seller'
}

export interface TupdatePayload {
    name: string;
}