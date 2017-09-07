import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare function getFailureStringForNotImplicitRole(roleNamesInElement: string[], missingProps: string[]): string;
export declare function getFailureStringForImplicitRole(tagName: string, roleNamesInElement: string, missingProps: string[]): string;
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
