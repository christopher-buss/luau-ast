"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderIfExpression = void 0;
const LuauAST_1 = __importDefault(require("../../../LuauAST"));
const LuauRenderer_1 = require("../..");
const Fragment_1 = require("../../Fragment");
const needsParentheses_1 = require("../../util/needsParentheses");
function renderIfExpression(state, node) {
    const head = (0, Fragment_1.concat)("if ", (0, LuauRenderer_1.renderNode)(state, node.condition), " then ", (0, LuauRenderer_1.renderNode)(state, node.expression), " ");
    const alternatives = new Array();
    let currentAlternative = node.alternative;
    while (LuauAST_1.default.isIfExpression(currentAlternative)) {
        const condition = (0, LuauRenderer_1.renderNode)(state, currentAlternative.condition);
        const expression = (0, LuauRenderer_1.renderNode)(state, currentAlternative.expression);
        alternatives.push([currentAlternative, (0, Fragment_1.concat)("elseif ", condition, " then ", expression, " ")]);
        currentAlternative = currentAlternative.alternative;
    }
    let tail = (0, Fragment_1.concat)("else ", (0, LuauRenderer_1.renderNode)(state, currentAlternative));
    for (let i = alternatives.length - 1; i >= 0; i--) {
        const [alternative, alternativeHead] = alternatives[i];
        tail = state.markNode(alternative, (0, Fragment_1.concat)(alternativeHead, tail));
    }
    let result = (0, Fragment_1.concat)(head, tail);
    if ((0, needsParentheses_1.needsParentheses)(node)) {
        result = (0, Fragment_1.concat)("(", result, ")");
    }
    return result;
}
exports.renderIfExpression = renderIfExpression;
//# sourceMappingURL=renderIfExpression.js.map