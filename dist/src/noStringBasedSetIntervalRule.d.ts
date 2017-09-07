import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare class Rule extends Lint.Rules.OptionallyTypedRule {
    static metadata: ExtendedMetadata;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
    applyWithProgram(sourceFile: ts.SourceFile, program: ts.Program): Lint.RuleFailure[];
}
