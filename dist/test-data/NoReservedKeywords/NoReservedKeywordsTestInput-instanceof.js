var SampleInstanceOf3 = (function () {
    function SampleInstanceOf3() {
    }
    return SampleInstanceOf3;
}());
var SampleInstanceOf4 = (function () {
    function SampleInstanceOf4() {
    }
    Object.defineProperty(SampleInstanceOf4.prototype, "instanceof", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleInstanceOf4;
}());
var SampleInstanceOf5 = (function () {
    function SampleInstanceOf5() {
    }
    SampleInstanceOf5.prototype.instanceof = function () { };
    return SampleInstanceOf5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-instanceof.js.map