"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMethodDeclaration = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
const renderParameters_1 = require("../../util/renderParameters");
const renderStatements_1 = require("../../util/renderStatements");
function renderMethodDeclaration(state, node) {
    const exp = (0, LuauRenderer_1.renderNode)(state, node.expression);
    const params = (0, renderParameters_1.renderParameters)(state, node);
    return (0, Fragment_1.concat)(state.lineFragment((0, Fragment_1.concat)("function ", exp, `:${node.name}(`, params, ")")), state.block(() => (0, renderStatements_1.renderStatementsFragment)(state, node.statements)), state.lineFragment((0, Fragment_1.concat)(state.markClosing(node), "end")));
}
exports.renderMethodDeclaration = renderMethodDeclaration;
//# sourceMappingURL=renderMethodDeclaration.js.map