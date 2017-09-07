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
var chai = require("chai");
var TestHelper_1 = require("./TestHelper");
var fixNoRequireImportsFormatter_1 = require("../fixNoRequireImportsFormatter");
var FormatterForTesting = (function (_super) {
    __extends(FormatterForTesting, _super);
    function FormatterForTesting(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    FormatterForTesting.prototype.getOutput = function () {
        return this.output;
    };
    FormatterForTesting.prototype.readFile = function () {
        return this.input;
    };
    FormatterForTesting.prototype.writeFile = function (_fileName, fileContents) {
        this.output = fileContents;
    };
    return FormatterForTesting;
}(fixNoRequireImportsFormatter_1.Formatter));
describe('fixNoRequireImportsFormatter', function () {
    var ruleName = 'no-require-imports';
    it('should fix imports in middle of list', function () {
        var input = "\nimport {BaseFormatter} from './utils/BaseFormatter';\nimport TestHelper = require('./TestHelper');\n";
        var formatter = new FormatterForTesting(input);
        formatter.format(TestHelper_1.TestHelper.runRule(ruleName, null, input).failures);
        chai.expect(formatter.getOutput().trim()).to.equal("\nimport {BaseFormatter} from './utils/BaseFormatter';\nimport {TestHelper} from './TestHelper';\n".trim());
    });
    it('should fix imports at start of list', function () {
        var input = "import TestHelper = require('./TestHelper');\n";
        var formatter = new FormatterForTesting(input);
        formatter.format(TestHelper_1.TestHelper.runRule(ruleName, null, input).failures);
        chai.expect(formatter.getOutput().trim()).to.equal("import {TestHelper} from './TestHelper';\n".trim());
    });
    it('should fix imports at end of list', function () {
        var input = "import TestHelper = require('./TestHelper');\n\nconsole.log(TestHelper);";
        var formatter = new FormatterForTesting(input);
        formatter.format(TestHelper_1.TestHelper.runRule(ruleName, null, input).failures);
        chai.expect(formatter.getOutput().trim()).to.equal("import {TestHelper} from './TestHelper';\n\nconsole.log(TestHelper);".trim());
    });
    it('should fix multiline import', function () {
        var input = "\nimport TestHelper = require(\n    './TestHelper'\n);\n";
        var formatter = new FormatterForTesting(input);
        formatter.format(TestHelper_1.TestHelper.runRule(ruleName, null, input).failures);
        chai.expect(formatter.getOutput().trim()).to.equal("\nimport {TestHelper} from\n    './TestHelper'\n;\n".trim());
    });
});
//# sourceMappingURL=FixNoRequireImportsFormatterTests.js.map