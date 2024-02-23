import { USER_ROLE } from "./user.const";

export interface Tuser {
    email: string;
    password: string;
    role: 'superAdmin' | 'manager' | 'seller'
}
export interface TpayloadUser {
    name: string;
    email: string;
    role: string;
    password: string;
    confirmpassword: string;
}
export interface Tlogin {
    email: string;
    password: string;
}
export interface TjwtPayLoad {
    id: string;
    email: string;
    role: string;
}

export type TUserRole = keyof typeof USER_ROLE;