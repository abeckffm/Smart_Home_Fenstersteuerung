"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNumberArray(value) {
    return value instanceof Array && value.every(item => typeof item === 'number');
}
exports.default = isNumberArray;
//# sourceMappingURL=isNumberArray.js.map