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
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../Error/AppError"));
const trycatch_1 = __importDefault(require("../utility/trycatch"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const user_model_1 = require("../Moduler/user/user.model");
const user_const_1 = require("../Moduler/user/user.const");
const member_model_1 = require("../Moduler/member/member.model");
const auth = (...requiredRoles) => {
    return (0, trycatch_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        let decoded;
        if (!token) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "You do not have the necessary permissions to access this resource.");
        }
        try {
            decoded = jsonwebtoken_1.default.verify(token, config_1.default.token_secret);
        }
        catch (error) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "Token is expired");
        }
        const { id, role } = decoded;
        const isUserExists = yield user_model_1.userModel.findById(id);
        if (!isUserExists) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "User doesn't exists!");
        }
        if (role === user_const_1.USER_ROLE.superAdmin) {
            const member = yield member_model_1.superAdminModel.findOne({ user: isUserExists._id });
            if (!member) {
                throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Member doesn't exists!");
            }
        }
        else if (role === user_const_1.USER_ROLE.manager) {
            const member = yield member_model_1.managerModel.findOne({ user: isUserExists._id });
            if (!member) {
                throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Member doesn't exists!");
            }
        }
        else if (role === user_const_1.USER_ROLE.seller) {
            const member = yield member_model_1.sellerModel.findOne({ user: isUserExists._id });
            if (!member) {
                throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Member doesn't exists!");
            }
        }
        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized!');
        }
        req.user = decoded;
        next();
    }));
};
exports.default = auth;
