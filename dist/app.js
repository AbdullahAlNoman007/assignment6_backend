"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFound_1 = __importDefault(require("./middleware/notFound"));
const globalErrorHandle_1 = __importDefault(require("./middleware/globalErrorHandle"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:5173', 'https://fullstack-2-8255d.web.app', 'https://fullstack-2-8255d.firebaseapp.com'];
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "https://fullstack-2-8255d.web.app", credentials: true }));
app.use('/api', router_1.default);
app.get('/', (req, res) => {
    res.send("Welcome to Fullstack's Assignment 2 | Redux-2 ");
});
app.use(globalErrorHandle_1.default);
app.use(notFound_1.default);
exports.default = app;
