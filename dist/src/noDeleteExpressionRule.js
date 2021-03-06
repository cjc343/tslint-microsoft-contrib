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
var ts = require("typescript");
var Lint = require("tslint");
var ErrorTolerantWalker_1 = require("./utils/ErrorTolerantWalker");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var noDeleteExpression = new NoDeleteExpression(sourceFile, this.getOptions());
        return this.applyWithWalker(noDeleteExpression);
    };
    Rule.metadata = {
        ruleName: 'no-delete-expression',
        type: 'maintainability',
        description: 'Do not delete expressions. Only properties should be deleted',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security'
    };
    Rule.FAILURE_STRING = 'Variables should not be deleted: ';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoDeleteExpression = (function (_super) {
    __extends(NoDeleteExpression, _super);
    function NoDeleteExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoDeleteExpression.prototype.visitExpressionStatement = function (node) {
        _super.prototype.visitExpressionStatement.call(this, node);
        if (node.expression.kind === ts.SyntaxKind.DeleteExpression) {
            var deletedObject = node.expression.getChildren()[1];
            if (deletedObject != null && deletedObject.kind === ts.SyntaxKind.Identifier) {
                this.addNoDeleteFailure(deletedObject);
            }
        }
    };
    NoDeleteExpression.prototype.addNoDeleteFailure = function (deletedObject) {
        var msg = Rule.FAILURE_STRING + deletedObject.getFullText().trim();
        this.addFailureAt(deletedObject.getStart(), deletedObject.getWidth(), msg);
    };
    return NoDeleteExpression;
}(ErrorTolerantWalker_1.ErrorTolerantWalker));
//# sourceMappingURL=noDeleteExpressionRule.js.map