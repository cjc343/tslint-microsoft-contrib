import * as ts from 'typescript';
export declare function isJsxAttribute(node: ts.Node): node is ts.JsxAttribute;
export declare function isJsxSpreadAttribute(node: ts.Node): node is ts.JsxSpreadAttribute;
export declare function isJsxExpression(node: ts.Node): node is ts.JsxExpression;
export declare function isNumericLiteral(node: ts.Node): node is ts.LiteralExpression;
export declare function isStringLiteral(node: ts.Node): node is ts.StringLiteral;
export declare function isJsxElement(node: ts.Node): node is ts.JsxElement;
export declare function isJsxSelfClosingElement(node: ts.Node): node is ts.JsxSelfClosingElement;
export declare function isJsxOpeningElement(node: ts.Node): node is ts.JsxOpeningElement;
export declare function isTrueKeyword(node: ts.Node): node is ts.LiteralExpression;
export declare function isFalseKeyword(node: ts.Node): node is ts.LiteralExpression;
export declare function isNullKeyword(node: ts.Node): node is ts.LiteralExpression;