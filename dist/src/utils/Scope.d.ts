import * as ts from 'typescript';
import * as Lint from 'tslint';
export declare class Scope {
    parent: Scope;
    private symbols;
    constructor(parent: Scope);
    addFunctionSymbol(symbolString: string): void;
    addNonFunctionSymbol(symbolString: string): void;
    isFunctionSymbol(symbolString: string): boolean;
    addParameters(parameters: ts.ParameterDeclaration[]): void;
    addGlobalScope(node: ts.Node, sourceFile: ts.SourceFile, options: Lint.IOptions): void;
}
