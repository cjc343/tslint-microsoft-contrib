import * as ts from 'typescript';
export declare function getPropName(node: ts.JsxAttribute): string;
export declare function getStringLiteral(node: ts.JsxAttribute | ts.JsxSpreadAttribute): string;
export declare function getBooleanLiteral(node: ts.JsxAttribute): boolean;
export declare function isEmpty(node: ts.JsxAttribute): boolean;
export declare function getNumericLiteral(node: ts.JsxAttribute): string;
export declare function getAllAttributesFromJsxElement(node: ts.Node): ts.NodeArray<ts.JsxAttributeLike>;
export declare function getJsxAttributesFromJsxElement(node: ts.Node): {
    [propName: string]: ts.JsxAttribute;
};
export declare function getJsxElementFromCode(code: string, exceptTagName: string): ts.JsxElement | ts.JsxSelfClosingElement;
export declare function getAncestorNode(node: ts.Node, ancestorTagName: string): ts.JsxElement;
