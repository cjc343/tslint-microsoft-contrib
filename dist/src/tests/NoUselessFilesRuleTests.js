"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelper_1 = require("./TestHelper");
describe('noUselessFilesRule', function () {
    var ruleName = 'no-useless-files';
    it('should pass on a normal file that contains code', function () {
        var script = "\n            export class MyClass {\n                constructor () {\n                    console.log(\"foo\");\n                }\n            }";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should fail on a file that only contains single-line comments', function () {
        var script = "// This is the only comment in this file";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [{
                'failure': 'This file only contains comments and should be deleted.',
                'name': 'file.ts',
                'ruleName': ruleName,
                'startPosition': { 'character': 1, 'line': 1 }
            }]);
    });
    it('should fail on a file that only contains multi-line comments', function () {
        var script = "/*\n          export class MyClass {\n              constructor () {\n                  console.log(\"foo\");\n              }\n          }\n        */";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [{
                'failure': 'This file only contains comments and should be deleted.',
                'name': 'file.ts',
                'ruleName': ruleName,
                'startPosition': { 'character': 1, 'line': 1 }
            }]);
    });
    it('should fail on a file that only contains several comments', function () {
        var script = "/*\n          export class MyClass {\n              constructor () {\n                  console.log(\"foo\");\n              }\n          }\n        */\n\n        // here is a single line comment\n\n        /* and another\n           multline comment */";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [{
                'failure': 'This file only contains comments and should be deleted.',
                'name': 'file.ts',
                'ruleName': ruleName,
                'startPosition': { 'character': 1, 'line': 1 }
            }]);
    });
    it('should fail on a file that only contains whitespace', function () {
        var script = "\n\n\n            \t\t\t";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [{
                'failure': 'This file is empty and should be deleted.',
                'name': 'file.ts',
                'ruleName': ruleName,
                'startPosition': { 'character': 1, 'line': 1 }
            }]);
    });
    it('should fail on a file that has no content', function () {
        var script = "";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [{
                'failure': 'This file is empty and should be deleted.',
                'name': 'file.ts',
                'ruleName': ruleName,
                'startPosition': { 'character': 1, 'line': 1 }
            }]);
    });
});
//# sourceMappingURL=NoUselessFilesRuleTests.js.map