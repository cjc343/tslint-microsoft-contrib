import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare function getFailureStringUndefinedRole(): string;
export declare function getFailureStringInvalidRole(invalidRoleName: string): string;
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
