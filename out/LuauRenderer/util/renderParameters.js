"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderParameters = void 0;
const LuauAST_1 = __importDefault(require("../../LuauAST"));
const LuauRenderer_1 = require("..");
const Fragment_1 = require("../Fragment");
function renderParameters(state, node) {
    const params = LuauAST_1.default.list.mapToArray(node.parameters, param => (0, LuauRenderer_1.renderNode)(state, param));
    if (node.hasDotDotDot) {
        params.push("...");
    }
    return (0, Fragment_1.join)(params, ", ");
}
exports.renderParameters = renderParameters;
//# sourceMappingURL=renderParameters.js.map