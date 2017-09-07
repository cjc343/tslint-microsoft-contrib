"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Lint = require("tslint");
var ErrorTolerantWalker_1 = require("./utils/ErrorTolerantWalker");
var MATH_FAIL_STRING = 'Math.random produces insecure random numbers. ' +
    'Use crypto.randomBytes() or window.crypto.getRandomValues() instead';
var NODE_FAIL_STRING = 'crypto.pseudoRandomBytes produces insecure random numbers. ' +
    'Use crypto.randomBytes() instead';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new InsecureRandomRuleWalker(sourceFile, this.getOptions()));
    };
    Rule.metadata = {
        ruleName: 'insecure-random',
        type: 'functionality',
        description: 'Do not use insecure sources for random bytes',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Security',
        commonWeaknessEnumeration: '330'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var InsecureRandomRuleWalker = (function (_super) {
    __extends(InsecureRandomRuleWalker, _super);
    function InsecureRandomRuleWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsecureRandomRuleWalker.prototype.visitPropertyAccessExpression = function (node) {
        if (node.expression.getText() === 'Math' && node.name.text === 'random') {
            this.addFailureAt(node.getStart(), node.getWidth(), MATH_FAIL_STRING);
        }
        else if (node.name.text === 'pseudoRandomBytes') {
            this.addFailureAt(node.getStart(), node.getWidth(), NODE_FAIL_STRING);
        }
        _super.prototype.visitPropertyAccessExpression.call(this, node);
    };
    return InsecureRandomRuleWalker;
}(ErrorTolerantWalker_1.ErrorTolerantWalker));
//# sourceMappingURL=insecureRandomRule.js.map