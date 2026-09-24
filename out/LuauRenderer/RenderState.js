"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderState = void 0;
const LuauAST_1 = __importDefault(require("../LuauAST"));
const assert_1 = require("../LuauAST/util/assert");
const Fragment_1 = require("./Fragment");
const getEnding_1 = require("./util/getEnding");
const getOrSetDefault_1 = require("./util/getOrSetDefault");
const INDENT_CHARACTER = "\t";
const INDENT_CHARACTER_LENGTH = INDENT_CHARACTER.length;
class RenderState {
    constructor(includePositions = false) {
        this.includePositions = includePositions;
        this.indent = "";
        this.seenTempNodes = new Map();
        this.listNodesStack = new Array();
        this.tempIdFallback = 0;
    }
    pushIndent() {
        this.indent += INDENT_CHARACTER;
    }
    popIndent() {
        this.indent = this.indent.substr(INDENT_CHARACTER_LENGTH);
    }
    getTempName(node) {
        const name = (0, getOrSetDefault_1.getOrSetDefault)(this.seenTempNodes, node.id, () => `_${this.tempIdFallback++}`);
        (0, assert_1.assert)(name);
        return name;
    }
    pushListNode(listNode) {
        this.listNodesStack.push(listNode);
    }
    peekListNode() {
        return this.listNodesStack[this.listNodesStack.length - 1];
    }
    popListNode() {
        return this.listNodesStack.pop();
    }
    newline(text) {
        return text + "\n";
    }
    indented(text) {
        return this.indent + text;
    }
    line(text, endNode) {
        let result = this.indented(text);
        if (endNode) {
            result += (0, getEnding_1.getEnding)(this, endNode);
        }
        result = this.newline(result);
        return result;
    }
    block(callback) {
        this.pushIndent();
        const result = callback();
        this.popIndent();
        return result;
    }
    layout(text) {
        return this.includePositions && text !== "" ? (0, Fragment_1.markLayout)(text) : text;
    }
    newlineFragment(fragment) {
        return (0, Fragment_1.concat)(fragment, this.layout("\n"));
    }
    indentedFragment(fragment) {
        return (0, Fragment_1.concat)(this.layout(this.indent), fragment);
    }
    lineFragment(fragment, endNode) {
        if (endNode) {
            fragment = (0, Fragment_1.concat)(fragment, (0, getEnding_1.getEnding)(this, endNode));
        }
        return this.newlineFragment(this.indentedFragment(fragment));
    }
    markNode(node, content) {
        return this.includePositions ? (0, Fragment_1.markNode)(node, content) : content;
    }
    markClosing(node) {
        return this.includePositions ? (0, Fragment_1.markClosing)(node) : "";
    }
}
exports.RenderState = RenderState;
//# sourceMappingURL=RenderState.js.map