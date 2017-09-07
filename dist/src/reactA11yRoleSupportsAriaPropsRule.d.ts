import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare function getFailureStringForNotImplicitRole(roleNamesInElement: string[], invalidPropNames: string[]): string;
export declare function getFailureStringForImplicitRole(tagName: string, roleName: string, invalidPropNames: string[]): string;
export declare function getFailureStringForNoRole(tagName: string, invalidPropNames: string[]): string;
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
