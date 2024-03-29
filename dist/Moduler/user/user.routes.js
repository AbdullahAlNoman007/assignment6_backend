"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_const_1 = require("./user.const");
const route = express_1.default.Router();
route.post('/create-superAdmin', (0, auth_1.default)(user_const_1.USER_ROLE.superAdmin), (0, validationRequest_1.default)(user_validation_1.userValidation.userValidationSchema), user_controller_1.userController.createSuperAdmin);
route.post('/create-manager', (0, auth_1.default)(user_const_1.USER_ROLE.superAdmin), (0, validationRequest_1.default)(user_validation_1.userValidation.userValidationSchema), user_controller_1.userController.createManager);
route.post('/create-seller', (0, validationRequest_1.default)(user_validation_1.userValidation.userValidationSchema), user_controller_1.userController.createSeller);
route.post('/login', (0, validationRequest_1.default)(user_validation_1.userValidation.logInSchema), user_controller_1.userController.login);
exports.userRoutes = route;
