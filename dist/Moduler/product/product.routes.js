"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const product_validation_1 = require("./product.validation");
const product_controller_1 = require("./product.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_const_1 = require("../user/user.const");
const route = express_1.default.Router();
route.post('/create-product', (0, auth_1.default)(user_const_1.USER_ROLE.superAdmin, user_const_1.USER_ROLE.manager), (0, validationRequest_1.default)(product_validation_1.productValidation.productValidationSchema), product_controller_1.productController.createProduct);
route.get('/get-products', (0, auth_1.default)(user_const_1.USER_ROLE.superAdmin, user_const_1.USER_ROLE.manager), product_controller_1.productController.getAllProduct);
route.get('/get-product', (0, auth_1.default)(user_const_1.USER_ROLE.superAdmin, user_const_1.USER_ROLE.manager, user_const_1.USER_ROLE.seller), product_controller_1.productController.getProduct);
route.get('/get-product/:id', (0, auth_1.default)(user_const_1.USER_ROLE.superAdmin, user_const_1.USER_ROLE.manager), product_controller_1.productController.getAProduct);
route.delete('/delete-products', (0, auth_1.default)(user_const_1.USER_ROLE.superAdmin, user_const_1.USER_ROLE.manager), (0, validationRequest_1.default)(product_validation_1.productValidation.productDelete), product_controller_1.productController.deleteProduct);
route.post('/update-product/:id', (0, auth_1.default)(user_const_1.USER_ROLE.superAdmin, user_const_1.USER_ROLE.manager), (0, validationRequest_1.default)(product_validation_1.productValidation.productUpdateSchema), product_controller_1.productController.updateProduct);
exports.productRoutes = route;
