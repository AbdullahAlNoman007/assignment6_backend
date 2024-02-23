import httpStatus from "http-status"
import sendRespone from "../../utility/sendResponse"
import catchAsync from "../../utility/trycatch"
import { memberService } from "./member.service"

const getAllSuperAdmin = catchAsync(async (req, res) => {
    const result = await memberService.getAllSuperAdminIntoDB()
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All Super Admin is retrieved",
        data: result
    })
})
const getAllManager = catchAsync(async (req, res) => {
    const result = await memberService.getAllManagerIntoDB()
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All Manager is retrieved",
        data: result
    })
})
const getAllSeller = catchAsync(async (req, res) => {
    const result = await memberService.getAllSellerIntoDB()
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All Seller is retrieved",
        data: result
    })
})


const getASuperAdmin = catchAsync(async (req, res) => {
    const result = await memberService.getASuperAdminIntoDB(req.params.id)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Super Admin is retrieved",
        data: result
    })
})
const getAManager = catchAsync(async (req, res) => {
    const result = await memberService.getAManagerIntoDB(req.params.id)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Manager is retrieved",
        data: result
    })
})
const getASeller = catchAsync(async (req, res) => {
    const result = await memberService.getASellerIntoDB(req.params.id)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Seller is retrieved",
        data: result
    })
})


const updateSuperAdmin = catchAsync(async (req, res) => {
    const result = await memberService.updateSuperAdminIntoDB(req.body, req.params.id)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Super Admin is Updated",
        data: result
    })
})
const updateManager = catchAsync(async (req, res) => {
    const result = await memberService.updateManagerIntoDB(req.body, req.params.id)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Manager is Updated",
        data: result
    })
})
const updateSeller = catchAsync(async (req, res) => {
    const result = await memberService.updateSellerIntoDB(req.body, req.params.id)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Seller is Updated",
        data: result
    })
})


const deleteSuperAdmin = catchAsync(async (req, res) => {
    const result = await memberService.deleteSuperAdminIntoDB(req.params.id)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Super Admin is deleted",
        data: result
    })
})
const deleteManager = catchAsync(async (req, res) => {
    const result = await memberService.deleteManagerIntoDB(req.params.id)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Manager is deleted",
        data: result
    })
})
const deleteSeller = catchAsync(async (req, res) => {
    const result = await memberService.deleteSellerIntoDB(req.params.id)
    sendRespone(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Seller is deleted",
        data: result
    })
})

export const memberController = {
    getAllManager,
    getAllSeller,
    getAllSuperAdmin,
    getAManager,
    getASeller,
    getASuperAdmin,
    updateManager,
    updateSeller,
    updateSuperAdmin,
    deleteManager,
    deleteSeller,
    deleteSuperAdmin
}