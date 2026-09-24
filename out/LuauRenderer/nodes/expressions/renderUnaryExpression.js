"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderUnaryExpression = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
const needsParentheses_1 = require("../../util/needsParentheses");
function needsSpace(node) {
    if (node.operator === "not") {
        return true;
    }
    if (LuauAST_1.default.isUnaryExpression(node.expression) && node.expression.operator === "-") {
        return true;
    }
    return false;
}
function renderUnaryExpression(state, node) {
    let opStr = node.operator;
    if (needsSpace(node)) {
        opStr += " ";
    }
    let result = (0, Fragment_1.concat)(opStr, (0, LuauRenderer_1.renderNode)(state, node.expression));
    if ((0, needsParentheses_1.needsParentheses)(node)) {
        result = (0, Fragment_1.concat)("(", result, ")");
    }
    return result;
}
exports.renderUnaryExpression = renderUnaryExpression;
//# sourceMappingURL=renderUnaryExpression.js.map