var SampleFor3 = (function () {
    function SampleFor3() {
    }
    return SampleFor3;
}());
var SampleFor4 = (function () {
    function SampleFor4() {
    }
    Object.defineProperty(SampleFor4.prototype, "for", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleFor4;
}());
var SampleFor5 = (function () {
    function SampleFor5() {
    }
    SampleFor5.prototype.for = function () { };
    return SampleFor5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-for.js.map