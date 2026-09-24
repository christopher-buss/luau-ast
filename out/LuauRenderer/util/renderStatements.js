"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderStatementsFragment = exports.renderStatements = void 0;
const LuauAST_1 = __importDefault(require("../../LuauAST"));
const assert_1 = require("../../LuauAST/util/assert");
const LuauRenderer_1 = require("..");
const Fragment_1 = require("../Fragment");
function renderStatements(state, statements) {
    return (0, Fragment_1.fragmentToString)(renderStatementsFragment(state, statements));
}
exports.renderStatements = renderStatements;
function renderStatementsFragment(state, statements) {
    const result = new Array();
    let listNode = statements.head;
    let hasFinalStatement = false;
    while (listNode !== undefined) {
        (0, assert_1.assert)(!hasFinalStatement || LuauAST_1.default.isComment(listNode.value), "Cannot render statement after break, continue, or return!");
        hasFinalStatement || (hasFinalStatement = LuauAST_1.default.isFinalStatement(listNode.value));
        state.pushListNode(listNode);
        result.push((0, LuauRenderer_1.renderNode)(state, listNode.value));
        state.popListNode();
        listNode = listNode.next;
    }
    return (0, Fragment_1.sequence)(result);
}
exports.renderStatementsFragment = renderStatementsFragment;
//# sourceMappingURL=renderStatements.js.map