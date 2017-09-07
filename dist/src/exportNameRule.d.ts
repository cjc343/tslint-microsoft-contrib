import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ErrorTolerantWalker } from './utils/ErrorTolerantWalker';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    static FAILURE_STRING: string;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
    static getExceptions(options: Lint.IOptions): string[];
}
export declare class ExportNameWalker extends ErrorTolerantWalker {
    protected visitSourceFile(node: ts.SourceFile): void;
    private getExportStatementsWithinModules(moduleDeclaration);
    private getExportStatements(element);
    private validateExportedElements(exportedElements);
    private validateExport(exportedName, node);
    private getFilename();
    private isSuppressed(exportedName);
}
