var SampleCatch3 = (function () {
    function SampleCatch3() {
    }
    return SampleCatch3;
}());
var SampleCatch4 = (function () {
    function SampleCatch4() {
    }
    Object.defineProperty(SampleCatch4.prototype, "catch", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleCatch4;
}());
var SampleCatch5 = (function () {
    function SampleCatch5() {
    }
    SampleCatch5.prototype.catch = function () { };
    return SampleCatch5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-catch.js.map