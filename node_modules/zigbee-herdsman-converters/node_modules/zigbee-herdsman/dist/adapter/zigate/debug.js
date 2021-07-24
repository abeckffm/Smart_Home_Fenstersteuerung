"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debug = void 0;
/* istanbul ignore file */
/* eslint-disable */
const debug_1 = __importDefault(require("debug"));
debug_1.default.formatters.h = (v) => {
    return v.toString('hex');
};
const adapterDebug = debug_1.default('zigbee-herdsman:adapter:zigate');
const Debug = (suffix) => {
    const extendDebug = adapterDebug.extend(suffix);
    return {
        log: extendDebug.extend('log'),
        info: extendDebug.extend('info'),
        error: extendDebug.extend('error'),
    };
};
exports.Debug = Debug;
//# sourceMappingURL=debug.js.map