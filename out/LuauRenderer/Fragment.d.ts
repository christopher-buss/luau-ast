import luau from "../LuauAST";
export interface GeneratedRange {
    start: luau.Position;
    end: luau.Position;
    closing?: luau.Position;
}
export interface RenderedNodePosition {
    node: luau.Node;
    range: GeneratedRange;
}
interface SequenceFragment {
    kind: "sequence";
    parts: ReadonlyArray<RenderFragment>;
}
interface NodeFragment {
    kind: "node";
    node: luau.Node;
    content: RenderFragment;
}
interface ClosingFragment {
    kind: "closing";
    node: luau.Node;
}
interface LayoutFragment {
    kind: "layout";
    text: string;
}
export type RenderFragment = string | SequenceFragment | NodeFragment | ClosingFragment | LayoutFragment;
export declare function concat(...parts: Array<RenderFragment>): RenderFragment;
export declare function sequence(parts: ReadonlyArray<RenderFragment>): RenderFragment;
export declare function join(parts: ReadonlyArray<RenderFragment>, separator: string): RenderFragment;
export declare function markNode(node: luau.Node, content: RenderFragment): RenderFragment;
export declare function markClosing(node: luau.Node): RenderFragment;
export declare function markLayout(text: string): RenderFragment;
export declare function fragmentToString(fragment: RenderFragment): string;
export declare function flattenFragment(fragment: RenderFragment): {
    code: string;
    positions: RenderedNodePosition[];
};
export {};
