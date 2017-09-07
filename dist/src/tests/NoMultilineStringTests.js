"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelper_1 = require("./TestHelper");
describe('noMultilineStringRule', function () {
    var RULE_NAME = 'no-multiline-string';
    it('should produce violations ', function () {
        var inputFile = "\n\nvar x = `some\n        multiline\n        string`;";
        TestHelper_1.TestHelper.assertViolations(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden Multiline string: `some...",
                "name": "file.ts",
                "ruleName": "no-multiline-string",
                "startPosition": {
                    "line": 3,
                    "character": 9
                }
            }
        ]);
    });
});
//# sourceMappingURL=NoMultilineStringTests.js.map