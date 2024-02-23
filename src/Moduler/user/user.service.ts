import httpStatus from "http-status";
import AppError from "../../Error/AppError";
import { Tlogin, TpayloadUser, Tuser } from "./user.interface";
import { userModel } from "./user.model";
import bcrypt from 'bcrypt'
import config from "../../config";
import { createToken } from "../../utility/createToken";
import mongoose from "mongoose";
import { managerModel, sellerModel, superAdminModel } from "../member/member.model";
import { USER_ROLE } from "./user.const";

const createSuperAdminIntoDB = async (payload: TpayloadUser) => {

    if (payload.password !== payload.confirmpassword) {
        throw new AppError(httpStatus.BAD_REQUEST, "Password doesn't match!")
    }

    const hashPassword = await bcrypt.hash(payload.password, Number(config.salt_round))

    const user = {
        email: payload.email,
        password: hashPassword,
        role: USER_ROLE.superAdmin
    }
    const respone = {
        name: payload.name,
        email: payload.email
    }

    const session = await mongoose.startSession()
    try {
        session.startTransaction();
        const result1 = await userModel.create([user], { session })

        if (!result1.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user")
        }
        const member = {
            user: result1[0]._id,
            name: payload.name,
            email: payload.email
        }
        const result2 = await superAdminModel.create([member], { session })

        if (!result2.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create Super Admin")
        }


        await session.commitTransaction();
        await session.endSession();

        return respone;

    } catch (error: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(error)
    }

}
const createManagerIntoDB = async (payload: TpayloadUser) => {

    if (payload.password !== payload.confirmpassword) {
        throw new AppError(httpStatus.BAD_REQUEST, "Password doesn't match!")
    }

    const hashPassword = await bcrypt.hash(payload.password, Number(config.salt_round))

    const user = {
        email: payload.email,
        password: hashPassword,
        role: USER_ROLE.manager
    }

    const respone = {
        name: payload.name,
        email: payload.email
    }

    const session = await mongoose.startSession()
    try {
        session.startTransaction();
        const result1 = await userModel.create([user], { session })

        if (!result1.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user")
        }
        const member = {
            user: result1[0]._id,
            name: payload.name,
            email: payload.email
        }
        const result2 = await managerModel.create([member], { session })

        if (!result2.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create Manager")
        }


        await session.commitTransaction();
        await session.endSession();

        return respone;

    } catch (error: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(error)
    }

}
const createSellerIntoDB = async (payload: TpayloadUser) => {

    if (payload.password !== payload.confirmpassword) {
        throw new AppError(httpStatus.BAD_REQUEST, "Password doesn't match!")
    }

    const hashPassword = await bcrypt.hash(payload.password, Number(config.salt_round))

    const user = {
        email: payload.email,
        password: hashPassword,
        role: USER_ROLE.seller
    }

    const respone = {
        name: payload.name,
        email: payload.email
    }

    const session = await mongoose.startSession()
    try {
        session.startTransaction();
        const result1 = await userModel.create([user], { session })

        if (!result1.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user")
        }
        const member = {
            user: result1[0]._id,
            name: payload.name,
            email: payload.email
        }
        const result2 = await sellerModel.create([member], { session })

        if (!result2.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create Seller")
        }


        await session.commitTransaction();
        await session.endSession();

        return respone;

    } catch (error: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(error)
    }
}

const loginIntoDB = async (payload: Tlogin) => {
    const user = await userModel.findOne({ email: payload.email })
    if (!user) {
        throw new AppError(httpStatus.OK, "User doesn't exists")
    }

    const isPasswordMatch = await bcrypt.compare(payload.password, user.password)
    if (!isPasswordMatch) {
        throw new AppError(httpStatus.BAD_REQUEST, "Password doesn't match")
    }

    const jwtPayLoad = {
        id: (user._id).toString(),
        email: user.email,
        role: user.role
    }

    const token = createToken(jwtPayLoad, config.token_secret as string, '1d')
    if (!token) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Token');
    }

    const result = { ...jwtPayLoad }
    return {
        result,
        token
    }
}

export const userService = {
    createSuperAdminIntoDB,
    createManagerIntoDB,
    createSellerIntoDB,
    loginIntoDB
}