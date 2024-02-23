"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../utility/sendResponse"));
const trycatch_1 = __importDefault(require("../../utility/trycatch"));
const member_service_1 = require("./member.service");
const getAllSuperAdmin = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAllSuperAdminIntoDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "All Super Admin is retrieved",
        data: result
    });
}));
const getAllManager = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAllManagerIntoDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "All Manager is retrieved",
        data: result
    });
}));
const getAllSeller = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAllSellerIntoDB();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "All Seller is retrieved",
        data: result
    });
}));
const getASuperAdmin = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getASuperAdminIntoDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Super Admin is retrieved",
        data: result
    });
}));
const getAManager = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getAManagerIntoDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Manager is retrieved",
        data: result
    });
}));
const getASeller = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.getASellerIntoDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Seller is retrieved",
        data: result
    });
}));
const updateSuperAdmin = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.updateSuperAdminIntoDB(req.body, req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Super Admin is Updated",
        data: result
    });
}));
const updateManager = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.updateManagerIntoDB(req.body, req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Manager is Updated",
        data: result
    });
}));
const updateSeller = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.updateSellerIntoDB(req.body, req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Seller is Updated",
        data: result
    });
}));
const deleteSuperAdmin = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.deleteSuperAdminIntoDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Super Admin is deleted",
        data: result
    });
}));
const deleteManager = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.deleteManagerIntoDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Manager is deleted",
        data: result
    });
}));
const deleteSeller = (0, trycatch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.deleteSellerIntoDB(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Seller is deleted",
        data: result
    });
}));
exports.memberController = {
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
};
