"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderIfStatement = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
const renderStatements_1 = require("../../util/renderStatements");
function renderIfStatement(state, node) {
    const head = (0, Fragment_1.concat)(state.lineFragment((0, Fragment_1.concat)("if ", (0, LuauRenderer_1.renderNode)(state, node.condition), " then")), state.block(() => (0, renderStatements_1.renderStatementsFragment)(state, node.statements)));
    const elseIfs = new Array();
    let currentElseBody = node.elseBody;
    while (LuauAST_1.default.isNode(currentElseBody)) {
        const statements = currentElseBody.statements;
        const elseIfHead = (0, Fragment_1.concat)(state.lineFragment((0, Fragment_1.concat)("elseif ", (0, LuauRenderer_1.renderNode)(state, currentElseBody.condition), " then")), state.block(() => (0, renderStatements_1.renderStatementsFragment)(state, statements)));
        elseIfs.push([currentElseBody, elseIfHead]);
        currentElseBody = currentElseBody.elseBody;
    }
    let tail = "";
    if (currentElseBody && LuauAST_1.default.list.isNonEmpty(currentElseBody)) {
        const statements = currentElseBody;
        tail = (0, Fragment_1.concat)(state.lineFragment("else"), state.block(() => (0, renderStatements_1.renderStatementsFragment)(state, statements)));
    }
    for (let i = elseIfs.length - 1; i >= 0; i--) {
        const [elseIf, elseIfHead] = elseIfs[i];
        tail = state.markNode(elseIf, (0, Fragment_1.concat)(elseIfHead, tail));
    }
    return (0, Fragment_1.concat)(head, tail, state.lineFragment((0, Fragment_1.concat)(state.markClosing(node), "end")));
}
exports.renderIfStatement = renderIfStatement;
//# sourceMappingURL=renderIfStatement.js.map