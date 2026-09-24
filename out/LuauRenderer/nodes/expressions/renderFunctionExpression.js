"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderFunctionExpression = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const Fragment_1 = require("../../Fragment");
const renderParameters_1 = require("../../util/renderParameters");
const renderStatements_1 = require("../../util/renderStatements");
function renderFunctionExpression(state, node) {
    if (LuauAST_1.default.list.isEmpty(node.statements)) {
        return (0, Fragment_1.concat)("function(", (0, renderParameters_1.renderParameters)(state, node), ") ", state.markClosing(node), "end");
    }
    return (0, Fragment_1.concat)(state.newlineFragment((0, Fragment_1.concat)("function(", (0, renderParameters_1.renderParameters)(state, node), ")")), state.block(() => (0, renderStatements_1.renderStatementsFragment)(state, node.statements)), state.indentedFragment((0, Fragment_1.concat)(state.markClosing(node), "end")));
}
exports.renderFunctionExpression = renderFunctionExpression;
//# sourceMappingURL=renderFunctionExpression.js.map