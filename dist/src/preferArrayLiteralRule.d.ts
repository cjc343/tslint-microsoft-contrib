import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    static GENERICS_FAILURE_STRING: string;
    static CONSTRUCTOR_FAILURE_STRING: string;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
