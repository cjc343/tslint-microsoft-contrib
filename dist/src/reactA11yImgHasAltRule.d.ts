import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare function getFailureStringNoAlt(tagName: string): string;
export declare function getFailureStringEmptyAltAndNotPresentationRole(tagName: string): string;
export declare function getFailureStringNonEmptyAltAndPresentationRole(tagName: string): string;
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
