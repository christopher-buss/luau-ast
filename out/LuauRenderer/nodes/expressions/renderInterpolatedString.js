"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderInterpolatedString = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
function renderInterpolatedString(state, node) {
    const result = new Array("`");
    LuauAST_1.default.list.forEach(node.parts, part => {
        let expression = (0, LuauRenderer_1.renderNode)(state, part);
        if (LuauAST_1.default.isInterpolatedStringPart(part)) {
            result.push(expression);
        }
        else {
            result.push("{");
            if (LuauAST_1.default.isTable(part)) {
                expression = (0, Fragment_1.concat)("(", expression, ")");
            }
            result.push(expression);
            result.push("}");
        }
    });
    result.push("`");
    return (0, Fragment_1.sequence)(result);
}
exports.renderInterpolatedString = renderInterpolatedString;
//# sourceMappingURL=renderInterpolatedString.js.map