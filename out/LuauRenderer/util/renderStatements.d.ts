import luau from "../../LuauAST";
import { RenderState } from "..";
import { RenderFragment } from "../Fragment";
export declare function renderStatements(state: RenderState, statements: luau.List<luau.Statement>): string;
export declare function renderStatementsFragment(state: RenderState, statements: luau.List<luau.Statement>): RenderFragment;
