"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderDoStatement = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const Fragment_1 = require("../../Fragment");
const renderStatements_1 = require("../../util/renderStatements");
function renderDoStatement(state, node) {
    return (0, Fragment_1.concat)(state.lineFragment("do"), state.block(() => (0, renderStatements_1.renderStatementsFragment)(state, node.statements)), state.lineFragment((0, Fragment_1.concat)(state.markClosing(node), "end")));
}
exports.renderDoStatement = renderDoStatement;
//# sourceMappingURL=renderDoStatement.js.map