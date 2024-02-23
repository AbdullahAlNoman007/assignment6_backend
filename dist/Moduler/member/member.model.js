"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerModel = exports.managerModel = exports.superAdminModel = void 0;
const mongoose_1 = require("mongoose");
const memberSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true }
});
exports.superAdminModel = (0, mongoose_1.model)('superAdmin', memberSchema);
exports.managerModel = (0, mongoose_1.model)('manager', memberSchema);
exports.sellerModel = (0, mongoose_1.model)('seller', memberSchema);
