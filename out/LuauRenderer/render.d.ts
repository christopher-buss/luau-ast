import luau from "../LuauAST";
import { RenderedNodePosition, RenderFragment } from "./Fragment";
import { RenderState } from "./RenderState";
export declare function render<T extends luau.SyntaxKind>(state: RenderState, node: luau.Node<T>): string;
export declare function renderNode<T extends luau.SyntaxKind>(state: RenderState, node: luau.Node<T>): RenderFragment;
export declare function renderAST(ast: luau.List<luau.Statement>): string;
export interface RenderResultWithPositions {
    code: string;
    positions: Array<RenderedNodePosition>;
}
export declare function renderASTWithPositions(ast: luau.List<luau.Statement>): RenderResultWithPositions;
