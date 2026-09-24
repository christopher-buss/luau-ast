"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenFragment = exports.fragmentToString = exports.markLayout = exports.markClosing = exports.markNode = exports.join = exports.sequence = exports.concat = void 0;
const LuauAST_1 = __importDefault(require("../LuauAST"));
const assert_1 = require("../LuauAST/util/assert");
function concat(...parts) {
    return sequence(parts);
}
exports.concat = concat;
function sequence(parts) {
    let result = "";
    for (const part of parts) {
        if (typeof part !== "string") {
            return { kind: "sequence", parts };
        }
        result += part;
    }
    return result;
}
exports.sequence = sequence;
function join(parts, separator) {
    const result = new Array();
    for (let i = 0; i < parts.length; i++) {
        if (i > 0) {
            result.push(separator);
        }
        result.push(parts[i]);
    }
    return sequence(result);
}
exports.join = join;
function markNode(node, content) {
    return { kind: "node", node, content };
}
exports.markNode = markNode;
function markClosing(node) {
    return { kind: "closing", node };
}
exports.markClosing = markClosing;
function markLayout(text) {
    return { kind: "layout", text };
}
exports.markLayout = markLayout;
function fragmentToString(fragment) {
    if (typeof fragment === "string") {
        return fragment;
    }
    return flattenFragment(fragment).code;
}
exports.fragmentToString = fragmentToString;
function flattenFragment(fragment) {
    let code = "";
    const positions = new Array();
    let line = 0;
    let column = 0;
    let previousWasCarriageReturn = false;
    const advance = (text) => {
        for (let i = 0; i < text.length; i++) {
            const character = text.charCodeAt(i);
            if (character === 13) {
                line++;
                column = 0;
                previousWasCarriageReturn = true;
            }
            else if (character === 10) {
                if (!previousWasCarriageReturn) {
                    line++;
                }
                column = 0;
                previousWasCarriageReturn = false;
            }
            else {
                column++;
                previousWasCarriageReturn = false;
            }
        }
    };
    let contentEndLine = 0;
    let contentEndColumn = 0;
    const activeNodes = new Array();
    let firstActiveWithoutContent = 0;
    const stack = new Array(fragment);
    while (stack.length > 0) {
        const current = stack.pop();
        if (typeof current === "string") {
            if (current.length > 0) {
                for (let i = firstActiveWithoutContent; i < activeNodes.length; i++) {
                    activeNodes[i].result.range.start = { line, column };
                    activeNodes[i].hasContent = true;
                }
                firstActiveWithoutContent = activeNodes.length;
                code += current;
                advance(current);
                contentEndLine = line;
                contentEndColumn = column;
            }
        }
        else if (current.kind === "layout") {
            code += current.text;
            advance(current.text);
        }
        else if (current.kind === "sequence") {
            for (let i = current.parts.length - 1; i >= 0; i--) {
                stack.push(current.parts[i]);
            }
        }
        else if (current.kind === "node") {
            const result = {
                node: current.node,
                range: { start: { line, column }, end: { line, column } },
            };
            positions.push(result);
            const active = { node: current.node, result, hasContent: false };
            activeNodes.push(active);
            stack.push({ kind: "end", active }, current.content);
        }
        else if (current.kind === "closing") {
            const active = activeNodes[activeNodes.length - 1];
            (0, assert_1.assert)((active === null || active === void 0 ? void 0 : active.node) === current.node, "Closing keyword must be rendered by its own node");
            active.result.range.closing = { line, column };
        }
        else {
            const { active } = current;
            active.result.range.end = active.hasContent
                ? { line: contentEndLine, column: contentEndColumn }
                : { ...active.result.range.start };
            activeNodes.pop();
            firstActiveWithoutContent = Math.min(firstActiveWithoutContent, activeNodes.length);
        }
    }
    return { code, positions };
}
exports.flattenFragment = flattenFragment;
//# sourceMappingURL=Fragment.js.map