var WrapperModule;
(function (WrapperModule) {
    var module;
    (function (module_1) {
        var module = (function () {
            function module() {
            }
            return module;
        }());
    })(module || (module = {}));
})(WrapperModule || (WrapperModule = {}));
var SampleModule1;
(function (SampleModule1) {
    var module;
})(SampleModule1 || (SampleModule1 = {}));
var SampleModule2;
(function (SampleModule2) {
    function module() { }
})(SampleModule2 || (SampleModule2 = {}));
var SampleModule3 = (function () {
    function SampleModule3() {
    }
    return SampleModule3;
}());
var SampleModule4 = (function () {
    function SampleModule4() {
    }
    Object.defineProperty(SampleModule4.prototype, "module", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleModule4;
}());
var SampleModule5 = (function () {
    function SampleModule5() {
        this.func = function (module) { };
    }
    SampleModule5.prototype.module = function () { };
    SampleModule5.prototype.method = function (module) { };
    return SampleModule5;
}());
function methodModule(module) { }
//# sourceMappingURL=NoReservedKeywordsTestInput-module.js.map