"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMixedTable = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
function renderMixedTable(state, node) {
    if (LuauAST_1.default.list.isEmpty(node.fields)) {
        return "{}";
    }
    const result = new Array(state.newlineFragment("{"));
    state.block(() => {
        LuauAST_1.default.list.forEach(node.fields, field => result.push(state.lineFragment((0, Fragment_1.concat)((0, LuauRenderer_1.renderNode)(state, field), ","))));
    });
    result.push(state.indentedFragment("}"));
    return (0, Fragment_1.sequence)(result);
}
exports.renderMixedTable = renderMixedTable;
//# sourceMappingURL=renderMixedTable.js.map