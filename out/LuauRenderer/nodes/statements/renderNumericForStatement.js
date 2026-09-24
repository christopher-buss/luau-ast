"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderNumericForStatement = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
const renderStatements_1 = require("../../util/renderStatements");
function renderNumericForStatement(state, node) {
    const id = (0, LuauRenderer_1.renderNode)(state, node.id);
    const start = (0, LuauRenderer_1.renderNode)(state, node.start);
    const end = (0, LuauRenderer_1.renderNode)(state, node.end);
    let predicate = (0, Fragment_1.concat)(start, ", ", end);
    if (node.step && (!LuauAST_1.default.isNumberLiteral(node.step) || Number(node.step.value) !== 1)) {
        const step = (0, LuauRenderer_1.renderNode)(state, node.step);
        predicate = (0, Fragment_1.concat)(predicate, ", ", step);
    }
    return (0, Fragment_1.concat)(state.lineFragment((0, Fragment_1.concat)("for ", id, " = ", predicate, " do")), state.block(() => (0, renderStatements_1.renderStatementsFragment)(state, node.statements)), state.lineFragment((0, Fragment_1.concat)(state.markClosing(node), "end")));
}
exports.renderNumericForStatement = renderNumericForStatement;
//# sourceMappingURL=renderNumericForStatement.js.map