"use strict";
// simple exportation
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
exports.sum = sum;
exports.sub = sub;
exports.default = multiply;
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
// default exportation
function multiply(a, b) {
    return a * b;
}
// namespace
var MathUtils;
(function (MathUtils) {
    function divide(a, b) {
        return a / b;
    }
    MathUtils.divide = divide;
    function squareRoot(a) {
        return Math.sqrt(a);
    }
    MathUtils.squareRoot = squareRoot;
})(MathUtils || (exports.MathUtils = MathUtils = {}));
