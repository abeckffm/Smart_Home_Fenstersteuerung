"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ember_security = exports.crc16ccitt = exports.Deferred = void 0;
/* istanbul ignore file */
const crc16ccitt_1 = __importDefault(require("./crc16ccitt"));
exports.crc16ccitt = crc16ccitt_1.default;
const struct_1 = require("../types/struct");
const named_1 = require("../types/named");
if (!Symbol.asyncIterator) {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
    Symbol.asyncIterator = Symbol.for("Symbol.asyncIterator");
}
class Deferred {
    constructor() {
        this._isResolved = false;
        this._isRejected = false;
        this.promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    resolve(value) {
        this._isResolved = true;
        this._resolve(value);
    }
    reject(value) {
        this._isResolved = true;
        this.reject(value);
    }
    get isResolved() {
        return this._isResolved;
    }
    get isRejected() {
        return this._isRejected;
    }
    get isFullfilled() {
        return this._isResolved || this._isRejected;
    }
}
exports.Deferred = Deferred;
/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/
function ember_security(config) {
    const isc = new struct_1.EmberInitialSecurityState();
    isc.bitmask = (named_1.EmberInitialSecurityBitmask.HAVE_PRECONFIGURED_KEY |
        named_1.EmberInitialSecurityBitmask.TRUST_CENTER_GLOBAL_LINK_KEY |
        named_1.EmberInitialSecurityBitmask.HAVE_NETWORK_KEY |
        named_1.EmberInitialSecurityBitmask.PRECONFIGURED_NETWORK_KEY_MODE);
    isc.preconfiguredKey = new struct_1.EmberKeyData();
    isc.preconfiguredKey.contents = Buffer.from("ZigBeeAlliance09");
    isc.networkKey = new struct_1.EmberKeyData();
    isc.networkKey.contents = config.networkKey;
    isc.networkKeySequenceNumber = 0;
    isc.preconfiguredTrustCenterEui64 = new named_1.EmberEUI64([0, 0, 0, 0, 0, 0, 0, 0]);
    return isc;
}
exports.ember_security = ember_security;
//# sourceMappingURL=index.js.map