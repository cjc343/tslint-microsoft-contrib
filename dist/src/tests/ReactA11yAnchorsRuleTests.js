"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelper_1 = require("./TestHelper");
var reactA11yAnchorsRule_1 = require("../reactA11yAnchorsRule");
describe('reactA11yAnchorsRule', function () {
    var ruleName = 'react-a11y-anchors';
    it('should pass on opening anchor when href contains alphanumeric characters', function () {
        var script = "\n            import React = require('react');\n            const anchor = <a href=\"someRef\">someTitle</a>;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should pass on function call', function () {
        var script = "\n            import React = require('react');\n            const anchor = <a href={PrivacyNotification.privacyNoticeLink}>\n                            {TEXT(CommonKey.privacy_notice_2())}\n                        </a>\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should fail on self closing anchor without link text', function () {
        var script = "\n            import React = require('react');\n            const anchor = <a href=\"someRef\"/>;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": reactA11yAnchorsRule_1.LINK_TEXT_TOO_SHORT_FAILURE_STRING,
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 28, "line": 3 }
            }
        ]);
    });
    it('should fail on anchor when href is #', function () {
        var script = "\n            import React = require('react');\n            const anchor = <a href=\"#\">someTitle</a>;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": reactA11yAnchorsRule_1.NO_HASH_FAILURE_STRING,
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 28, "line": 3 }
            }
        ]);
    });
    it('should fail on self closing anchor when href is #', function () {
        var script = "\n            import React = require('react');\n            const anchor = <a href=\"#\"/>;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": reactA11yAnchorsRule_1.NO_HASH_FAILURE_STRING,
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 28, "line": 3 }
            },
            {
                "failure": reactA11yAnchorsRule_1.LINK_TEXT_TOO_SHORT_FAILURE_STRING,
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 28, "line": 3 }
            }
        ]);
    });
    describe('Link text should be at least 4 characters long', function () {
        it('should pass when length of text equals or larger than 4', function () {
            var script = "\n                import React = require('react');\n                const anchor1 = <a href=\"someRef1\">save</a>;\n                const anchor2 = <a href=\"someRef2\">Delete</a>;\n                const anchor3 = <a href=\"someRef3\"><span>cancel</span></a>;\n                const anchor4 = <a href=\"someRef4\"><img alt=\"image\" /></a>;\n                const anchor5 = <a href=\"someRef5\"><span>ok</span><img alt=\"done\" /></a>;\n            ";
            TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
        });
        it('should pass when role is not link and length of text less than 4', function () {
            var script = "\n                import React = require('react');\n                const anchor1 = <a role='button'>add</a>;\n                const anchor2 = <a role='button'><span className='iconClass'></span></a>;\n                const anchor3 = <a><img src='someURL' alt='someAlt' /></a>;\n            ";
            TestHelper_1.TestHelper.assertNoViolation(ruleName, script);
        });
        it('should fail when length of text less than 4', function () {
            var script = "\n                import React = require('react');\n                const anchor1 = <a href=\"someRef1\">ok</a>;\n                const anchor2 = <a href=\"someRef2\"><span>Go</span></a>;\n                const anchor3 = <a href=\"someRef3\"><img alt=\"Go\" /></a>\n                const anchor4 = <a href=\"someRef4\"><span>ok</span><img alt=\"go\" /></a>\n            ";
            TestHelper_1.TestHelper.assertViolations(ruleName, script, [
                {
                    "failure": reactA11yAnchorsRule_1.LINK_TEXT_TOO_SHORT_FAILURE_STRING,
                    "name": "file.tsx",
                    "ruleName": "react-a11y-anchors",
                    "startPosition": { "character": 33, "line": 3 }
                },
                {
                    "failure": reactA11yAnchorsRule_1.LINK_TEXT_TOO_SHORT_FAILURE_STRING,
                    "name": "file.tsx",
                    "ruleName": "react-a11y-anchors",
                    "startPosition": { "character": 33, "line": 4 }
                },
                {
                    "failure": reactA11yAnchorsRule_1.LINK_TEXT_TOO_SHORT_FAILURE_STRING,
                    "name": "file.tsx",
                    "ruleName": "react-a11y-anchors",
                    "startPosition": { "character": 33, "line": 5 }
                },
                {
                    "failure": reactA11yAnchorsRule_1.LINK_TEXT_TOO_SHORT_FAILURE_STRING,
                    "name": "file.tsx",
                    "ruleName": "react-a11y-anchors",
                    "startPosition": { "character": 33, "line": 6 }
                }
            ]);
        });
    });
    it('should pass when hrefs and texts both are identical', function () {
        var script = "\n            import React = require('react');\n            const anchor1 = <a href=\"someRef\">someTitle</a>;\n            const anchor2 = <a href=\"someRef\">someTitle</a>;\n            const anchor3 = <a href=\"someRef\">someTitle</a>;\n            const anchor4 = <a href=\"someRef\">someTitle</a>;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should pass when hrefs, texts and alt texts are all identical', function () {
        var scriptWithAltText = "\n            import React = require('react');\n            const anchor1 = <a href=\"someRef\"><span>someTitle</span><img alt=\"someAlt\" /></a>;\n            const anchor2 = <a href=\"someRef\"><span>someTitle</span><img alt=\"someAlt\" /></a>;\n            const anchor3 = <a href=\"someRef\"><span>someTitle</span><img alt=\"someAlt\" /></a>;\n            const anchor4 = <a href=\"someRef\"><span>someTitle</span><img alt=\"someAlt\" /></a>;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, scriptWithAltText, []);
    });
    it('shoud pass when hrefs undefiend and texts are variant', function () {
        var script = "\n            import React = require('react');\n            const anchor1 = <a>someTitle1</a>;\n            const anchor2 = <a>someTitle2</a>;\n            const anchor3 = <a>someTitle3</a>;\n            const anchor4 = <a>someTitle4</a>;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should pass when hrefs and texts both are different', function () {
        var script = "\n            import React = require('react');\n            const anchor1 = <a href=\"someRef1\">someTitle1</a>;\n            const anchor2 = <a href=\"someRef2\">someTitle2</a>;\n            const anchor3 = <a href=\"someRef3\">someTitle3</a>;\n            const anchor4 = <a href=\"someRef4\">someTitle4</a>;\n            const anchor5 = <a href=\"someRef5\"><img alt=\"someAlt1\" /><a>;\n            const anchor6 = <a href=\"someRef6\"><img alt=\"someAlt2\" /><a>;\n            const anchor7 = <a href=\"someRef7\"><img alt=\"someAlt3\" /><a>;\n            const anchor8 = <a href=\"someRef8\"><img alt=\"someAlt4\" /><a>;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should fail when identical hrefs have different texts', function () {
        var script = "\n            import React = require('react');\n            const anchor1 = <a href=\"someRef\">someTitle1</a>;\n            const anchor2 = <a href=\"someRef1\">someTitle2</a>;\n            const anchor3 = <a href=\"someRef\">someTitle3</a>;  // should fail with line 3\n            const anchor4 = <a href=\"someRef1\">someTitle4</a>; // should fail with line 4\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": reactA11yAnchorsRule_1.SAME_HREF_SAME_TEXT_FAILURE_STRING + " First link at character: 29 line: 3",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 29, "line": 5 }
            },
            {
                "failure": reactA11yAnchorsRule_1.SAME_HREF_SAME_TEXT_FAILURE_STRING + " First link at character: 29 line: 4",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 29, "line": 6 }
            }
        ]);
    });
    it('should fail when identical hrefs have different alt texts', function () {
        var script = "\n            import React = require('react');\n            const anchor1 = <a href=\"someRef\"><img alt=\"someAlt1\" /></a>;\n            const anchor2 = <a href=\"someRef1\"><span>someTitle</span><img alt=\"someAlt2\" /></a>;\n            const anchor3 = <a href=\"someRef\"><img alt=\"someOtherAlt1\" /></a>;  // should fail with line 3\n            const anchor4 = <a href=\"someRef1\"><span>someTitle</span><img alt=\"someOtherAlt2\" /></a>; // should fail with line 4\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": reactA11yAnchorsRule_1.SAME_HREF_SAME_TEXT_FAILURE_STRING + " First link at character: 29 line: 3",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 29, "line": 5 }
            },
            {
                "failure": reactA11yAnchorsRule_1.SAME_HREF_SAME_TEXT_FAILURE_STRING + " First link at character: 29 line: 4",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 29, "line": 6 }
            }
        ]);
    });
    it('should fail when identical hrefs have different texts in multiple repeated anchors', function () {
        var script = "\n            import React = require('react');\n            const anchor1 = <a href=\"someRef\">someTitle1</a>;\n            const anchor2 = <a href=\"someRef\">someTitle2</a>; // should fail with line 3\n            const anchor3 = <a href=\"someRef\">someTitle3</a>; // should fail with line 3\n            const anchor4 = <a href=\"someRef\">someTitle4</a>; // should fail with line 3\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": reactA11yAnchorsRule_1.SAME_HREF_SAME_TEXT_FAILURE_STRING + " First link at character: 29 line: 3",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": {
                    "character": 29,
                    "line": 4
                }
            },
            {
                "failure": reactA11yAnchorsRule_1.SAME_HREF_SAME_TEXT_FAILURE_STRING + " First link at character: 29 line: 3",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": {
                    "character": 29,
                    "line": 5
                }
            },
            {
                "failure": reactA11yAnchorsRule_1.SAME_HREF_SAME_TEXT_FAILURE_STRING + " First link at character: 29 line: 3",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": {
                    "character": 29,
                    "line": 6
                }
            }
        ]);
    });
    it('should fail when different hrefs have same text', function () {
        var script = "\n            import React = require('react');\n            const anchor1 = <a href=\"someRef1\">someTitle1</a>;\n            const anchor2 = <a href=\"someRef2\">someTitle2</a>;\n            const anchor3 = <a href=\"someRef3\">someTitle1</a>; // should fail with line 3\n            const anchor4 = <a href=\"someRef4\">someTitle2</a>; // should fail with line 4\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": reactA11yAnchorsRule_1.DIFFERENT_HREF_DIFFERENT_TEXT_FAILURE_STRING + " First link at character: 29 line: 3",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": {
                    "character": 29,
                    "line": 5
                }
            },
            {
                "failure": reactA11yAnchorsRule_1.DIFFERENT_HREF_DIFFERENT_TEXT_FAILURE_STRING + " First link at character: 29 line: 4",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": {
                    "character": 29,
                    "line": 6
                }
            }
        ]);
    });
    it('should fail when different hrefs have same text in multiple repeated anchors', function () {
        var script = "\n            import React = require('react');\n            const anchor1 = <a href=\"someRef1\">someTitle</a>;\n            const anchor2 = <a href=\"someRef2\">someTitle</a>; // should fail with line 3\n            const anchor3 = <a href=\"someRef3\">someTitle</a>; // should fail with line 3 - not 4\n            const anchor4 = <a href=\"someRef4\">someTitle</a>; // should fail with line 3 - not 4 or 5\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": reactA11yAnchorsRule_1.DIFFERENT_HREF_DIFFERENT_TEXT_FAILURE_STRING + " First link at character: 29 line: 3",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 29, "line": 4 }
            },
            {
                "failure": reactA11yAnchorsRule_1.DIFFERENT_HREF_DIFFERENT_TEXT_FAILURE_STRING + " First link at character: 29 line: 3",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 29, "line": 5 }
            },
            {
                "failure": reactA11yAnchorsRule_1.DIFFERENT_HREF_DIFFERENT_TEXT_FAILURE_STRING + " First link at character: 29 line: 3",
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 29, "line": 6 }
            }
        ]);
    });
    it('should pass on anchor with image content when alt is unique', function () {
        var script = "\n            import React = require('react');\n            const anchor = <a href=\"someRef\"><img alt=\"someOtherTitle\"/>someTitle</a>;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should pass on anchor with image content when alt is empty', function () {
        var script = "\n            import React = require('react');\n            const anchor = <a href=\"someRef\"><img alt=\"\"/>someTitle</a>;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should fail on anchor with image content when alt is identical to text', function () {
        var script = "\n            import React = require('react');\n            const anchor = <a href=\"someRef\"><img alt=\"someTitle\"/><span>someTitle</span></a>;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": reactA11yAnchorsRule_1.UNIQUE_ALT_FAILURE_STRING,
                "name": "file.tsx",
                "ruleName": "react-a11y-anchors",
                "startPosition": { "character": 28, "line": 3 }
            }
        ]);
    });
});
//# sourceMappingURL=ReactA11yAnchorsRuleTests.js.map