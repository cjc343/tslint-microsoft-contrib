import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    static FAILURE_FUNCTION_WITH_BIND: string;
    static FAILURE_ARROW_WITH_BIND: string;
    static UNDERSCORE_BINARY_FUNCTION_NAMES: string[];
    static UNDERSCORE_TERNARY_FUNCTION_NAMES: string[];
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
