var SampleBreak3 = (function () {
    function SampleBreak3() {
    }
    return SampleBreak3;
}());
var SampleBreak4 = (function () {
    function SampleBreak4() {
    }
    Object.defineProperty(SampleBreak4.prototype, "break", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleBreak4;
}());
var SampleBreak5 = (function () {
    function SampleBreak5() {
    }
    SampleBreak5.prototype.break = function () { };
    return SampleBreak5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-break.js.map