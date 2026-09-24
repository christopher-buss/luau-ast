"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderComment = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const Fragment_1 = require("../../Fragment");
const getSafeBracketEquals_1 = require("../../util/getSafeBracketEquals");
function renderComment(state, node) {
    const lines = node.text.split("\n");
    if (lines.length > 1) {
        const eqStr = (0, getSafeBracketEquals_1.getSafeBracketEquals)(node.text);
        return (0, Fragment_1.concat)(state.lineFragment(`--[${eqStr}[`), state.block(() => (0, Fragment_1.sequence)(lines.map(line => (line.trim() === "" ? state.newlineFragment("") : state.lineFragment(line))))), state.lineFragment(`]${eqStr}]`));
    }
    else {
        return (0, Fragment_1.sequence)(lines.map(line => state.lineFragment(`--${line}`)));
    }
}
exports.renderComment = renderComment;
//# sourceMappingURL=renderComment.js.map