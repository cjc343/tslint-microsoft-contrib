"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestHelper_1 = require("./TestHelper");
describe('importNameRule', function () {
    var ruleName = 'import-name';
    it('should pass on matching names of external module', function () {
        var script = "\n            import App = require('App');\n            import App = require('x/y/z/App');\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should pass on matching names of ES6 import', function () {
        var script = "\n            import App from 'App';\n            import App from 'x/y/z/App';\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should pass on matching names of simple import', function () {
        var script = "\n            import DependencyManager = DM.DependencyManager;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, []);
    });
    it('should fail on misnamed external module', function () {
        var script = "\n            import MyCoolApp = require('App');\n            import MyCoolApp2 = require('x/y/z/App');\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": "Misnamed import. Import should be named 'App' but found 'MyCoolApp'",
                "name": "file.ts",
                "ruleName": "import-name",
                "startPosition": { "character": 13, "line": 2 },
                "fix": {
                    "innerStart": 20,
                    "innerLength": 9,
                    "innerText": "App"
                }
            },
            {
                "failure": "Misnamed import. Import should be named 'App' but found 'MyCoolApp2'",
                "name": "file.ts",
                "ruleName": "import-name",
                "startPosition": { "character": 13, "line": 3 },
                "fix": {
                    "innerStart": 67,
                    "innerLength": 10,
                    "innerText": "App"
                }
            }
        ]);
    });
    it('should fail on misnamed import', function () {
        var script = "\n            import MyCoolApp from 'App';\n            import MyCoolApp2 from 'x/y/z/App';\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": "Misnamed import. Import should be named 'App' but found 'MyCoolApp'",
                "name": "file.ts",
                "ruleName": "import-name",
                "startPosition": { "character": 13, "line": 2 },
                "fix": {
                    "innerStart": 20,
                    "innerLength": 9,
                    "innerText": "App"
                }
            },
            {
                "failure": "Misnamed import. Import should be named 'App' but found 'MyCoolApp2'",
                "name": "file.ts",
                "ruleName": "import-name",
                "startPosition": { "character": 13, "line": 3 },
                "fix": {
                    "innerStart": 61,
                    "innerLength": 10,
                    "innerText": "App"
                }
            }
        ]);
    });
    it('should fail on misnamed rename', function () {
        var script = "\n            import Service = DM.DependencyManager;\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": "Misnamed import. Import should be named 'DependencyManager' but found 'Service'",
                "name": "file.ts",
                "ruleName": "import-name",
                "startPosition": { "character": 13, "line": 2 },
                "fix": {
                    "innerStart": 20,
                    "innerLength": 7,
                    "innerText": "DependencyManager"
                }
            }
        ]);
    });
    it('should fail import with punctuation', function () {
        var script = "\n            import UserSettings from \"./user-settings.page\";\n        ";
        TestHelper_1.TestHelper.assertViolations(ruleName, script, [
            {
                "failure": "Misnamed import. Import should be named 'userSettingsPage' but found 'UserSettings'",
                "name": "file.ts",
                "ruleName": "import-name",
                "startPosition": { "character": 13, "line": 2 },
                "fix": {
                    "innerStart": 20,
                    "innerLength": 12,
                    "innerText": "userSettingsPage"
                }
            }
        ]);
    });
    it('should pass on differing names when rule is configured with replacements', function () {
        var script = "\n            import Backbone = require('backbone');\n            import React = require('react');\n            import isPlainObject from 'is-plain-object';\n            import baseChartOptions = require('common/component/chart/options/BaseChartOptions');\n        ";
        var options = [true, {
                'backbone': 'Backbone',
                'react': 'React',
                'is-plain-object': 'isPlainObject',
                'BaseChartOptions': 'baseChartOptions'
            }];
        TestHelper_1.TestHelper.assertViolationsWithOptions(ruleName, options, script, []);
    });
});
//# sourceMappingURL=ImportNameRuleTests.js.map