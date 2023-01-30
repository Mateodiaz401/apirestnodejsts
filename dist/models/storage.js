"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StorageSchema = new mongoose_1.Schema({
    fileName: {
        type: String,
    },
    idUser: {
        type: String,
    },
    path: {
        type: String,
    },
}, {
    versionKey: false,
    timestamps: true,
});
const StorageModel = (0, mongoose_1.model)("media", StorageSchema);
exports.default = StorageModel;
