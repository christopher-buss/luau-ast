"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderComputedIndexExpression = void 0;
const LuauAST_1 = __importDefault(require("../../../../LuauAST"));
const LuauRenderer_1 = require("../../..");
const Fragment_1 = require("../../../Fragment");
function renderComputedIndexExpression(state, node) {
    const exp = (0, LuauRenderer_1.renderNode)(state, node.expression);
    if (LuauAST_1.default.isStringLiteral(node.index) && LuauAST_1.default.isValidIdentifier(node.index.value)) {
        return (0, Fragment_1.concat)(exp, ".", state.markNode(node.index, node.index.value));
    }
    else {
        const index = (0, LuauRenderer_1.renderNode)(state, node.index);
        return (0, Fragment_1.concat)(exp, "[", index, "]");
    }
}
exports.renderComputedIndexExpression = renderComputedIndexExpression;
//# sourceMappingURL=renderComputedIndexExpression.js.map