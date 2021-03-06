import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ErrorTolerantWalker } from './ErrorTolerantWalker';
export declare class BannedTermWalker extends ErrorTolerantWalker {
    private failureString;
    private bannedTerms;
    private allowQuotedProperties;
    constructor(sourceFile: ts.SourceFile, options: Lint.IOptions, failureString: string, bannedTerms: string[]);
    protected visitVariableDeclaration(node: ts.VariableDeclaration): void;
    protected visitFunctionDeclaration(node: ts.FunctionDeclaration): void;
    protected visitPropertyDeclaration(node: ts.PropertyDeclaration): void;
    protected visitPropertySignature(node: ts.Node): void;
    protected visitSetAccessor(node: ts.AccessorDeclaration): void;
    protected visitGetAccessor(node: ts.AccessorDeclaration): void;
    protected visitMethodDeclaration(node: ts.MethodDeclaration): void;
    protected visitParameterDeclaration(node: ts.ParameterDeclaration): void;
    private validateNode(node);
    private isBannedTerm(text);
}
