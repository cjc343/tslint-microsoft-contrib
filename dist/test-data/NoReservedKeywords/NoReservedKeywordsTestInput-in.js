var SampleIn3 = (function () {
    function SampleIn3() {
    }
    return SampleIn3;
}());
var SampleIn4 = (function () {
    function SampleIn4() {
    }
    Object.defineProperty(SampleIn4.prototype, "in", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleIn4;
}());
var SampleIn5 = (function () {
    function SampleIn5() {
    }
    SampleIn5.prototype.in = function () { };
    return SampleIn5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-in.js.map