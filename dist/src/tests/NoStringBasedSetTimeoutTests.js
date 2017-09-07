"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelper_1 = require("./TestHelper");
describe('noStringBasedSetTimeoutRule', function () {
    var RULE_NAME = 'no-string-based-set-timeout';
    it('should not throw error - case 1', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutTestInput-error.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, []);
    });
    it('should not throw error - case 2', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutTestInput-case2.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, []);
    });
    it('should pass when function parameter is Function', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutTestInput-functionParamFunction.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, []);
    });
    it('should support type inference on shadowed variables', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutTestInput-shadowedVariables.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden setTimeout string parameter: moduleProp1",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 9, "line": 18 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: globalFunction1",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 9, "line": 20 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: globalProp2",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 9, "line": 21 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: globalProp1",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 13, "line": 27 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: moduleProp1",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 13, "line": 28 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: globalProp1",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 21, "line": 35 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: globalProp3",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 21, "line": 37 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: globalFunction1",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 21, "line": 38 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: moduleProp1",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 21, "line": 40 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: moduleProp2",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 21, "line": 41 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: moduleProp1",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 13, "line": 48 }
            }
        ]);
    });
    it('should not throw error - case 3', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutTestInput-error3.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, []);
    });
    it('should not throw error - case 4', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutTestInput-error4.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden setTimeout string parameter: this.onAnimationEnd()",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutTestInput-error4.ts",
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "line": 11, "character": 13 }
            }
        ]);
    });
    it('should not throw error - case 5', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutTestInput-error5.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, []);
    });
    it('should not produce violations', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutTestInput-case3.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, []);
    });
    it('should produce violations for string literals', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-literals.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "ruleName": "no-string-based-set-timeout",
                "failure": "Forbidden setTimeout string parameter: \"var x = 'should fail'\"",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-literals.ts",
                "startPosition": { "line": 3, "character": 1 }
            },
            {
                "ruleName": "no-string-based-set-timeout",
                "failure": "Forbidden setTimeout string parameter: \"var x = 'should fail'\"",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-literals.ts",
                "startPosition": { "line": 4, "character": 1 }
            },
            {
                "ruleName": "no-string-based-set-timeout",
                "failure": "Forbidden setTimeout string parameter: \"var x = 'should fail'\"",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-literals.ts",
                "startPosition": { "line": 5, "character": 1 }
            }
        ]);
    });
    it('should produce violations for string variables', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-variables.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "ruleName": "no-string-based-set-timeout",
                "failure": "Forbidden setTimeout string parameter: typedStringVariable",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-variables.ts",
                "startPosition": { "line": 4, "character": 1 }
            },
            {
                "ruleName": "no-string-based-set-timeout",
                "failure": "Forbidden setTimeout string parameter: typedStringVariable",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-variables.ts",
                "startPosition": { "line": 5, "character": 1 }
            },
            {
                "ruleName": "no-string-based-set-timeout",
                "failure": "Forbidden setTimeout string parameter: typedStringVariable",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-variables.ts",
                "startPosition": { "line": 6, "character": 1
                }
            }
        ]);
    });
    it('should produce violations for any variables', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-any-variables.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "ruleName": "no-string-based-set-timeout",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-any-variables.ts",
                "failure": "Forbidden setTimeout string parameter: anyVariable",
                "startPosition": { "line": 4, "character": 1 }
            },
            {
                "ruleName": "no-string-based-set-timeout",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-any-variables.ts",
                "failure": "Forbidden setTimeout string parameter: anyVariable",
                "startPosition": { "line": 5, "character": 1 }
            },
            {
                "ruleName": "no-string-based-set-timeout",
                "failure": "Forbidden setTimeout string parameter: anyVariable",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-any-variables.ts",
                "startPosition": { "line": 6, "character": 1 }
            }
        ]);
    });
    it('should produce violations for any functions', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-any-functions.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden setTimeout string parameter: untypedCreateFunction()",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-any-functions.ts",
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "line": 4, "character": 1 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: untypedCreateFunction()",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-any-functions.ts",
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "line": 5, "character": 1 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: untypedCreateFunction()",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-any-functions.ts",
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "line": 6, "character": 1 }
            }
        ]);
    });
    it('should produce violations for string functions', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-functions.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden setTimeout string parameter: stringFunction()",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-functions.ts",
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "line": 4, "character": 1 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: stringFunction()",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-functions.ts",
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "line": 5, "character": 1 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: stringFunction()",
                "name": "test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-string-functions.ts",
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "line": 6, "character": 1 }
            }
        ]);
    });
    it('should produce violations for parameters', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-parameters.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden setTimeout string parameter: stringArg",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "line": 4, "character": 5 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: anyArg",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "line": 7, "character": 5 }
            }
        ]);
    });
    it('should not produce violations what used to be a false positive case', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutTestInput-formerFalsePositive.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, []);
    });
    it('should not fail within a constructor', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-constructor.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden setTimeout string parameter: arg1",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 9, "line": 4 }
            }
        ]);
    });
    it('should create violations on template strings', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutFailingTestInput-template-strings.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden setTimeout string parameter: `${data}`",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 1, "line": 2 }
            }
        ]);
    });
    it('should pass all Issue #46 usages', function () {
        var inputFile = 'test-data/NoStringBasedSetTimeout/NoStringBasedSetTimeoutTestInput-issue46.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(RULE_NAME, inputFile, [
            {
                "failure": "Forbidden setTimeout string parameter: \"alert(\" + alertNum + \")\"",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 9, "line": 15 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: \"alert(\" + alertNum + \")\"",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 9, "line": 16 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: `alert(${alertNum})`",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 9, "line": 19 }
            },
            {
                "failure": "Forbidden setTimeout string parameter: `alert(${alertNum})`",
                "name": inputFile,
                "ruleName": "no-string-based-set-timeout",
                "startPosition": { "character": 9, "line": 20 }
            }
        ]);
    });
});
//# sourceMappingURL=NoStringBasedSetTimeoutTests.js.map