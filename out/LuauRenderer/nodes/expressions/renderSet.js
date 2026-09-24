"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSet = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
function renderSet(state, node) {
    if (LuauAST_1.default.list.isEmpty(node.members)) {
        return "{}";
    }
    const result = new Array(state.newlineFragment("{"));
    state.block(() => {
        LuauAST_1.default.list.forEach(node.members, member => {
            if (LuauAST_1.default.isStringLiteral(member) && LuauAST_1.default.isValidIdentifier(member.value)) {
                result.push(state.lineFragment((0, Fragment_1.concat)(state.markNode(member, member.value), " = true,")));
            }
            else {
                result.push(state.lineFragment((0, Fragment_1.concat)("[", (0, LuauRenderer_1.renderNode)(state, member), "] = true,")));
            }
        });
    });
    result.push(state.indentedFragment("}"));
    return (0, Fragment_1.sequence)(result);
}
exports.renderSet = renderSet;
//# sourceMappingURL=renderSet.js.map