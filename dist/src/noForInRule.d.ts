import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    static FAILURE_STRING_FACTORY(initializer: string, expression: string): string;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
