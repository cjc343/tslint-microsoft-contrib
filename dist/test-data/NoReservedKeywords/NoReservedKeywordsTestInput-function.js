var SampleFunction3 = (function () {
    function SampleFunction3() {
    }
    return SampleFunction3;
}());
var SampleFunction4 = (function () {
    function SampleFunction4() {
    }
    Object.defineProperty(SampleFunction4.prototype, "function", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleFunction4;
}());
var SampleFunction5 = (function () {
    function SampleFunction5() {
    }
    SampleFunction5.prototype.function = function () { };
    return SampleFunction5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-function.js.map