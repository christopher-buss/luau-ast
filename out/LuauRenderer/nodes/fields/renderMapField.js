"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMapField = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
function renderMapField(state, node) {
    const { index, value } = node;
    const valueFragment = (0, LuauRenderer_1.renderNode)(state, value);
    if (LuauAST_1.default.isStringLiteral(index) && LuauAST_1.default.isValidIdentifier(index.value)) {
        return (0, Fragment_1.concat)(state.markNode(index, index.value), " = ", valueFragment);
    }
    else {
        const indexFragment = (0, LuauRenderer_1.renderNode)(state, index);
        return (0, Fragment_1.concat)("[", indexFragment, "] = ", valueFragment);
    }
}
exports.renderMapField = renderMapField;
//# sourceMappingURL=renderMapField.js.map