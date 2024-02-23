import httpStatus from "http-status";
import sendRespone from "../../utility/sendResponse";
import catchAsync from "../../utility/trycatch";
import { userService } from "./user.service";

const createSuperAdmin = catchAsync(async (req, res) => {
    const result = await userService.createSuperAdminIntoDB(req.body);
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Super Admin is created",
        data: result
    })
})
const createManager = catchAsync(async (req, res) => {
    const result = await userService.createManagerIntoDB(req.body)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Manager is created",
        data: result
    })
})
const createSeller = catchAsync(async (req, res) => {
    const result = await userService.createSellerIntoDB(req.body)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Seller is created",
        data: result
    })
})
const login = catchAsync(async (req, res) => {
    const result = await userService.loginIntoDB(req.body)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User is logged in",
        data: result
    })
})

export const userController = {
    createSuperAdmin,
    createManager,
    createSeller,
    login
}