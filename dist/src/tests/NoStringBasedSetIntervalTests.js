"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelper_1 = require("./TestHelper");
describe('noStringBasedSetIntervalRule', function () {
    var RULE_NAME = 'no-string-based-set-interval';
    it('should produce violations ', function () {
        var inputFile = 'test-data/NoStringBasedSetIntervalTestInput.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden setInterval string parameter: \"var x = 'should fail'\"",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 37, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: typedStringVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 38, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: anyVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 39, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: untypedCreateFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 40, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: stringFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 41, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: \"var x = 'should fail'\"",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 42, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: typedStringVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 43, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: anyVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 44, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: untypedCreateFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 45, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: stringFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 46, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: \"var x = 'should fail'\"",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 47, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: typedStringVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 48, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: anyVariable",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 49, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: untypedCreateFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 50, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: stringFunction()",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 51, "character": 1 }
            },
            {
                "failure": "Forbidden setInterval string parameter: stringArg",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 53, "character": 5 }
            },
            {
                "failure": "Forbidden setInterval string parameter: anyArg",
                "name": inputFile,
                "ruleName": "no-string-based-set-interval",
                "startPosition": { "line": 56, "character": 5 }
            }
        ]);
    });
});
//# sourceMappingURL=NoStringBasedSetIntervalTests.js.map