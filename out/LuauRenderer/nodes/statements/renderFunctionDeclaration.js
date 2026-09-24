"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderFunctionDeclaration = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const assert_1 = require("../../../LuauAST/util/assert");
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
const renderParameters_1 = require("../../util/renderParameters");
const renderStatements_1 = require("../../util/renderStatements");
function renderFunctionDeclaration(state, node) {
    if (node.localize) {
        (0, assert_1.assert)(LuauAST_1.default.isAnyIdentifier(node.name), "local function cannot be a property");
    }
    const name = (0, LuauRenderer_1.renderNode)(state, node.name);
    const params = (0, renderParameters_1.renderParameters)(state, node);
    return (0, Fragment_1.concat)(state.lineFragment((0, Fragment_1.concat)(`${node.localize ? "local " : ""}function `, name, "(", params, ")")), state.block(() => (0, renderStatements_1.renderStatementsFragment)(state, node.statements)), state.lineFragment((0, Fragment_1.concat)(state.markClosing(node), "end")));
}
exports.renderFunctionDeclaration = renderFunctionDeclaration;
//# sourceMappingURL=renderFunctionDeclaration.js.map