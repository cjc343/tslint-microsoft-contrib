import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    static WRITE_FAILURE: string;
    static WRITELN_FAILURE: string;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
