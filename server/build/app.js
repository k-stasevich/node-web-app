"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/smth', function (req, res) {
    res.send({
        success: true,
        data: [],
    });
});
app.listen(3000, function () {
    console.log('GOOD JOB! Example app listening on port 3000!');
});
