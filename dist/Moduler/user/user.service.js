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
exports.userService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../Error/AppError"));
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const createToken_1 = require("../../utility/createToken");
const mongoose_1 = __importDefault(require("mongoose"));
const member_model_1 = require("../member/member.model");
const user_const_1 = require("./user.const");
const createSuperAdminIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.password !== payload.confirmpassword) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Password doesn't match!");
    }
    const hashPassword = yield bcrypt_1.default.hash(payload.password, Number(config_1.default.salt_round));
    const user = {
        email: payload.email,
        password: hashPassword,
        role: user_const_1.USER_ROLE.superAdmin
    };
    const respone = {
        name: payload.name,
        email: payload.email
    };
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const result1 = yield user_model_1.userModel.create([user], { session });
        if (!result1.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create user");
        }
        const member = {
            user: result1[0]._id,
            name: payload.name,
            email: payload.email
        };
        const result2 = yield member_model_1.superAdminModel.create([member], { session });
        if (!result2.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create Super Admin");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return respone;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const createManagerIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.password !== payload.confirmpassword) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Password doesn't match!");
    }
    const hashPassword = yield bcrypt_1.default.hash(payload.password, Number(config_1.default.salt_round));
    const user = {
        email: payload.email,
        password: hashPassword,
        role: user_const_1.USER_ROLE.manager
    };
    const respone = {
        name: payload.name,
        email: payload.email
    };
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const result1 = yield user_model_1.userModel.create([user], { session });
        if (!result1.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create user");
        }
        const member = {
            user: result1[0]._id,
            name: payload.name,
            email: payload.email
        };
        const result2 = yield member_model_1.managerModel.create([member], { session });
        if (!result2.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create Manager");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return respone;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const createSellerIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.password !== payload.confirmpassword) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Password doesn't match!");
    }
    const hashPassword = yield bcrypt_1.default.hash(payload.password, Number(config_1.default.salt_round));
    const user = {
        email: payload.email,
        password: hashPassword,
        role: user_const_1.USER_ROLE.seller
    };
    const respone = {
        name: payload.name,
        email: payload.email
    };
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const result1 = yield user_model_1.userModel.create([user], { session });
        if (!result1.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create user");
        }
        const member = {
            user: result1[0]._id,
            name: payload.name,
            email: payload.email
        };
        const result2 = yield member_model_1.sellerModel.create([member], { session });
        if (!result2.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create Seller");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return respone;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const loginIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.userModel.findOne({ email: payload.email });
    if (!user) {
        throw new AppError_1.default(http_status_1.default.OK, "User doesn't exists");
    }
    const isPasswordMatch = yield bcrypt_1.default.compare(payload.password, user.password);
    if (!isPasswordMatch) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Password doesn't match");
    }
    const jwtPayLoad = {
        id: (user._id).toString(),
        email: user.email,
        role: user.role
    };
    const token = (0, createToken_1.createToken)(jwtPayLoad, config_1.default.token_secret, '1d');
    if (!token) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to create Token');
    }
    const result = Object.assign({}, jwtPayLoad);
    return {
        result,
        token
    };
});
exports.userService = {
    createSuperAdminIntoDB,
    createManagerIntoDB,
    createSellerIntoDB,
    loginIntoDB
};
