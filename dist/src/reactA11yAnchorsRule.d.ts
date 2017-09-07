import * as ts from 'typescript';
import * as Lint from 'tslint';
import { ExtendedMetadata } from './utils/ExtendedMetadata';
export declare const NO_HASH_FAILURE_STRING: string;
export declare const LINK_TEXT_TOO_SHORT_FAILURE_STRING: string;
export declare const UNIQUE_ALT_FAILURE_STRING: string;
export declare const SAME_HREF_SAME_TEXT_FAILURE_STRING: string;
export declare const DIFFERENT_HREF_DIFFERENT_TEXT_FAILURE_STRING: string;
export declare class Rule extends Lint.Rules.AbstractRule {
    static metadata: ExtendedMetadata;
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
