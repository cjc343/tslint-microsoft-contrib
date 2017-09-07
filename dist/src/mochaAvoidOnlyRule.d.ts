import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    static FAILURE_STRING_IT: string;
    static FAILURE_STRING_SPECIFY: string;
    static FAILURE_STRING_DESCRIBE: string;
    static FAILURE_STRING_CONTEXT: string;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
