"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderAssignment = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const assert_1 = require("../../../LuauAST/util/assert");
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
function renderAssignment(state, node) {
    let left;
    if (LuauAST_1.default.list.isList(node.left)) {
        (0, assert_1.assert)(!LuauAST_1.default.list.isEmpty(node.left));
        left = (0, Fragment_1.join)(LuauAST_1.default.list.mapToArray(node.left, id => (0, LuauRenderer_1.renderNode)(state, id)), ", ");
    }
    else {
        left = (0, LuauRenderer_1.renderNode)(state, node.left);
    }
    let right;
    if (LuauAST_1.default.list.isList(node.right)) {
        (0, assert_1.assert)(!LuauAST_1.default.list.isEmpty(node.right));
        right = (0, Fragment_1.join)(LuauAST_1.default.list.mapToArray(node.right, expression => (0, LuauRenderer_1.renderNode)(state, expression)), ", ");
    }
    else {
        right = (0, LuauRenderer_1.renderNode)(state, node.right);
    }
    return state.lineFragment((0, Fragment_1.concat)(left, ` ${node.operator} `, right), node);
}
exports.renderAssignment = renderAssignment;
//# sourceMappingURL=renderAssignment.js.map