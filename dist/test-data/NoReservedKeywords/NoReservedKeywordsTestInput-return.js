var SampleReturn3 = (function () {
    function SampleReturn3() {
    }
    return SampleReturn3;
}());
var SampleReturn4 = (function () {
    function SampleReturn4() {
    }
    Object.defineProperty(SampleReturn4.prototype, "return", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleReturn4;
}());
var SampleReturn5 = (function () {
    function SampleReturn5() {
    }
    SampleReturn5.prototype.return = function () { };
    return SampleReturn5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-return.js.map