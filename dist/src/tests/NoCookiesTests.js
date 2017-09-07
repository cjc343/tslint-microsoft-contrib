"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelper_1 = require("./TestHelper");
describe('noCookiesRule', function () {
    it('should not produce violations', function () {
        var ruleName = 'no-cookies';
        var inputFile = 'test-data/NoCookies/NoCookiesPassingTestInput.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(ruleName, inputFile, []);
    });
    it('should produce violations', function () {
        var ruleName = 'no-cookies';
        var inputFile = 'test-data/NoCookies/NoCookiesFailingTestInput.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(ruleName, inputFile, [
            {
                "failure": "Forbidden call to document.cookie",
                "name": "test-data/NoCookies/NoCookiesFailingTestInput.ts",
                "ruleName": "no-cookies",
                "startPosition": { "line": 7, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.cookie",
                "name": "test-data/NoCookies/NoCookiesFailingTestInput.ts",
                "ruleName": "no-cookies",
                "startPosition": { "line": 8, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.cookie",
                "name": "test-data/NoCookies/NoCookiesFailingTestInput.ts",
                "ruleName": "no-cookies",
                "startPosition": { "line": 9, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.cookie",
                "name": "test-data/NoCookies/NoCookiesFailingTestInput.ts",
                "ruleName": "no-cookies",
                "startPosition": { "line": 11, "character": 1 }
            },
            {
                "failure": "Forbidden call to document.cookie",
                "name": "test-data/NoCookies/NoCookiesFailingTestInput.ts",
                "ruleName": "no-cookies",
                "startPosition": { "line": 14, "character": 1 }
            }
        ]);
    });
    it('should not throw error ', function () {
        var ruleName = 'no-cookies';
        var inputFile = 'test-data/NoCookies/NoCookiesTestInput-error.ts';
        TestHelper_1.TestHelper.assertViolationsWithTypeChecker(ruleName, inputFile, [
            {
                "failure": "Forbidden call to document.cookie",
                "name": "test-data/NoCookies/NoCookiesTestInput-error.ts",
                "ruleName": "no-cookies",
                "startPosition": { "line": 5, "character": 16 }
            }
        ]);
    });
});
//# sourceMappingURL=NoCookiesTests.js.map