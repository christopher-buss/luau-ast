import luau from "../LuauAST";
import { RenderFragment } from "./Fragment";
export declare class RenderState {
    readonly includePositions: boolean;
    private indent;
    seenTempNodes: Map<number, string>;
    private readonly listNodesStack;
    constructor(includePositions?: boolean);
    private pushIndent;
    private popIndent;
    private tempIdFallback;
    getTempName(node: luau.TemporaryIdentifier): string;
    pushListNode(listNode: luau.ListNode<luau.Statement>): void;
    peekListNode(): luau.ListNode<luau.Statement> | undefined;
    popListNode(): luau.ListNode<luau.Statement<luau.SyntaxKind>> | undefined;
    newline(text: string): string;
    indented(text: string): string;
    line(text: string, endNode?: luau.Statement): string;
    block<T>(callback: () => T): T;
    private layout;
    newlineFragment(fragment: RenderFragment): RenderFragment;
    indentedFragment(fragment: RenderFragment): RenderFragment;
    lineFragment(fragment: RenderFragment, endNode?: luau.Statement): RenderFragment;
    markNode(node: luau.Node, content: RenderFragment): RenderFragment;
    markClosing(node: luau.Node): RenderFragment;
}
