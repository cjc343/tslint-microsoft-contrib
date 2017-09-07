"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelper_1 = require("./TestHelper");
describe('noSuspiciousCommentRule', function () {
    var ruleName = 'no-suspicious-comment';
    it('should pass on normal comments', function () {
        var script = "\n            // this comment is not suspicious\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should pass on multi-line comments', function () {
        var script = "\n             /**\n             * This comment\n             * is not suspicious.\n             */\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should pass on TODOlike comments', function () {
        var script = "\n             /**\n             * This comment\n             * is not suspicious, even if it contains the word TODOlike.\n             */\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should fail on multiline TODO comments', function () {
        var script = "\n            /**\n            * TODO: add failing example and update assertions\n            */\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [{
                "failure": "Suspicious comment found: TODO",
                "name": "file.ts",
                "ruleName": "no-suspicious-comment",
                "startPosition": { "character": 13, "line": 2 }
            }]);
    });
    it('should pass on lower case todo comments without colons', function () {
        var script = "\n            // todo add failing example and update assertions\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    ['BUG', 'HACK', 'FIXME', 'LATER', 'LATER2', 'TODO'].forEach(function (suspiciousWord) {
        it("should fail on upper case " + suspiciousWord + " comments without colons", function () {
            var script = "\n                // " + suspiciousWord + " you should fix this\n            ";
            TestHelper_1.TestHelper.assertViolations(ruleName, script, [{
                    "failure": "Suspicious comment found: " + suspiciousWord,
                    "name": "file.ts",
                    "ruleName": "no-suspicious-comment",
                    "startPosition": { "character": 17, "line": 2 }
                }]);
        });
        it("should fail on upper case " + suspiciousWord + " comments with colons", function () {
            var script = "\n                // " + suspiciousWord + ": you should fix this\n            ";
            TestHelper_1.TestHelper.assertViolations(ruleName, script, [{
                    "failure": "Suspicious comment found: " + suspiciousWord,
                    "name": "file.ts",
                    "ruleName": "no-suspicious-comment",
                    "startPosition": { "character": 17, "line": 2 }
                }]);
        });
        it("should fail on lower case " + suspiciousWord + " comments with colons", function () {
            var script = "\n                // " + suspiciousWord + ": you should fix this\n            ";
            TestHelper_1.TestHelper.assertViolations(ruleName, script, [{
                    "failure": "Suspicious comment found: " + suspiciousWord,
                    "name": "file.ts",
                    "ruleName": "no-suspicious-comment",
                    "startPosition": { "character": 17, "line": 2 }
                }]);
        });
    });
});
//# sourceMappingURL=NoSuspiciousCommentRuleTests.js.map