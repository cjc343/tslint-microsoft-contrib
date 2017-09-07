import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export interface Exception {
    file: string;
    method: string;
    comment: string;
}
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
    static getExceptions(options: Lint.IOptions): Exception[];
}
