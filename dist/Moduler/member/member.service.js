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
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberService = void 0;
const member_model_1 = require("./member.model");
const getAllSuperAdminIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.superAdminModel.find({});
    return result;
});
const getAllManagerIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.managerModel.find({});
    return result;
});
const getAllSellerIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.sellerModel.find({});
    return result;
});
const getASuperAdminIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.superAdminModel.findById(id);
    return result;
});
const getAManagerIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.managerModel.findById(id);
    return result;
});
const getASellerIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.sellerModel.findById(id);
    return result;
});
const updateSuperAdminIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.superAdminModel.findByIdAndUpdate(id, payload);
    return result;
});
const updateManagerIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.managerModel.findByIdAndUpdate(id, payload);
    return result;
});
const updateSellerIntoDB = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.sellerModel.findByIdAndUpdate(id, payload);
    return result;
});
const deleteSuperAdminIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.superAdminModel.findByIdAndDelete(id);
    return result;
});
const deleteManagerIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.managerModel.findByIdAndDelete(id);
    return result;
});
const deleteSellerIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_model_1.sellerModel.findByIdAndDelete(id);
    return result;
});
exports.memberService = {
    getAllManagerIntoDB,
    getAllSellerIntoDB,
    getAllSuperAdminIntoDB,
    getAManagerIntoDB,
    getASellerIntoDB,
    getASuperAdminIntoDB,
    updateManagerIntoDB,
    updateSuperAdminIntoDB,
    updateSellerIntoDB,
    deleteManagerIntoDB,
    deleteSuperAdminIntoDB,
    deleteSellerIntoDB
};
