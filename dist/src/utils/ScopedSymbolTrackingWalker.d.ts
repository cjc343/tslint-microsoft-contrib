import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ErrorTolerantWalker } from './ErrorTolerantWalker';
export declare class ScopedSymbolTrackingWalker extends ErrorTolerantWalker {
    private typeChecker?;
    private scope;
    constructor(sourceFile: ts.SourceFile, options: Lint.IOptions, program?: ts.Program);
    protected isExpressionEvaluatingToFunction(expression: ts.Expression): boolean;
    private isFunctionType(expressionType, typeChecker);
    protected visitSourceFile(node: ts.SourceFile): void;
    protected visitModuleDeclaration(node: ts.ModuleDeclaration): void;
    protected visitClassDeclaration(node: ts.ClassDeclaration): void;
    protected visitFunctionDeclaration(node: ts.FunctionDeclaration): void;
    protected visitConstructorDeclaration(node: ts.ConstructorDeclaration): void;
    protected visitMethodDeclaration(node: ts.MethodDeclaration): void;
    protected visitArrowFunction(node: ts.ArrowFunction): void;
    protected visitFunctionExpression(node: ts.FunctionExpression): void;
    protected visitSetAccessor(node: ts.AccessorDeclaration): void;
}
