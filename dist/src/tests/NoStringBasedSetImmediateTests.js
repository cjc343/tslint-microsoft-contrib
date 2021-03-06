"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelper_1 = require("./TestHelper");
describe('noStringBasedSetImmediateRule', function () {
    var RULE_NAME = 'no-string-based-set-immediate';
    it('should produce violations ', function () {
        var inputFile = 'test-data/NoStringBasedSetImmediateTestInput.ts';
        TestHelper_1.TestHelper.assertViolations(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden setImmediate string parameter: \"var x = 'should fail'\"",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 37, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: typedStringVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 38, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: anyVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 39, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: untypedCreateFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 40, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: stringFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 41, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: \"var x = 'should fail'\"",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 42, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: typedStringVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 43, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: anyVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 44, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: untypedCreateFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 45, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: stringFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 46, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: \"var x = 'should fail'\"",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 47, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: typedStringVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 48, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: anyVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 49, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: untypedCreateFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 50, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: stringFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 51, "character": 1 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: stringArg",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 53, "character": 5 }
            },
            {
                "failure": "Forbidden setImmediate string parameter: anyArg",
                "name": inputFile,
                "ruleName": "no-string-based-set-immediate",
                "startPosition": { "line": 56, "character": 5 }
            }
        ], true);
    });
});
//# sourceMappingURL=NoStringBasedSetImmediateTests.js.map