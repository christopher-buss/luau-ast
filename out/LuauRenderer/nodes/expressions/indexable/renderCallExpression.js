"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCallExpression = void 0;
const LuauAST_1 = __importDefault(require("../../../../LuauAST"));
const LuauRenderer_1 = require("../../..");
const Fragment_1 = require("../../../Fragment");
const renderArguments_1 = require("../../../util/renderArguments");
function renderCallExpression(state, node) {
    return (0, Fragment_1.concat)((0, LuauRenderer_1.renderNode)(state, node.expression), "(", (0, renderArguments_1.renderArguments)(state, node.args), ")");
}
exports.renderCallExpression = renderCallExpression;
//# sourceMappingURL=renderCallExpression.js.map