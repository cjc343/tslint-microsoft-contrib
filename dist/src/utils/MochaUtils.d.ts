import * as ts from 'typescript';
export declare module MochaUtils {
    function isMochaTest(node: ts.SourceFile): boolean;
    function isStatementDescribeCall(statement: ts.Statement): boolean;
    function isDescribe(call: ts.CallExpression): boolean;
    function isLifecycleMethod(call: ts.CallExpression): boolean;
}
