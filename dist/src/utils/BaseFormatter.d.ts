import { Formatters } from 'tslint';
import { RuleFailure } from 'tslint';
export declare class BaseFormatter extends Formatters.AbstractFormatter {
    private ruleName;
    private applyFix;
    constructor(ruleName: string, applyFix: (this: BaseFormatter, failure: RuleFailure) => void);
    format(allFailures: RuleFailure[]): string;
    protected readFile(fileName: string): string;
    protected writeFile(fileName: string, fileContents: string): void;
    private formatFailure(failure);
}
