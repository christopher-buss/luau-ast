"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderForStatement = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
const renderStatements_1 = require("../../util/renderStatements");
function renderForStatement(state, node) {
    const ids = LuauAST_1.default.list.isEmpty(node.ids)
        ? "_"
        : (0, Fragment_1.join)(LuauAST_1.default.list.mapToArray(node.ids, id => (0, LuauRenderer_1.renderNode)(state, id)), ", ");
    const exp = (0, LuauRenderer_1.renderNode)(state, node.expression);
    return (0, Fragment_1.concat)(state.lineFragment((0, Fragment_1.concat)("for ", ids, " in ", exp, " do")), state.block(() => (0, renderStatements_1.renderStatementsFragment)(state, node.statements)), state.lineFragment((0, Fragment_1.concat)(state.markClosing(node), "end")));
}
exports.renderForStatement = renderForStatement;
//# sourceMappingURL=renderForStatement.js.map