var WrapperRequire;
(function (WrapperRequire) {
    var require;
    (function (require_1) {
        var require = (function () {
            function require() {
            }
            return require;
        }());
    })(require || (require = {}));
})(WrapperRequire || (WrapperRequire = {}));
var SampleRequire1;
(function (SampleRequire1) {
    var require;
})(SampleRequire1 || (SampleRequire1 = {}));
var SampleRequire2;
(function (SampleRequire2) {
    function require() { }
})(SampleRequire2 || (SampleRequire2 = {}));
var SampleRequire3 = (function () {
    function SampleRequire3() {
    }
    return SampleRequire3;
}());
var SampleRequire4 = (function () {
    function SampleRequire4() {
    }
    Object.defineProperty(SampleRequire4.prototype, "require", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleRequire4;
}());
var SampleRequire5 = (function () {
    function SampleRequire5() {
        this.func = function (require) { };
    }
    SampleRequire5.prototype.require = function () { };
    SampleRequire5.prototype.method = function (require) { };
    return SampleRequire5;
}());
function methodRequire(require) { }
//# sourceMappingURL=NoReservedKeywordsTestInput-require.js.map