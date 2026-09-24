"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderReturnStatement = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
function renderReturnStatement(state, node) {
    const exp = LuauAST_1.default.list.isList(node.expression)
        ? (0, Fragment_1.join)(LuauAST_1.default.list.mapToArray(node.expression, exp => (0, LuauRenderer_1.renderNode)(state, exp)), ", ")
        : (0, LuauRenderer_1.renderNode)(state, node.expression);
    return state.lineFragment((0, Fragment_1.concat)("return ", exp));
}
exports.renderReturnStatement = renderReturnStatement;
//# sourceMappingURL=renderReturnStatement.js.map