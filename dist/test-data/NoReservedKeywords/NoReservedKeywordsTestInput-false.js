var SampleFalse3 = (function () {
    function SampleFalse3() {
    }
    return SampleFalse3;
}());
var SampleFalse4 = (function () {
    function SampleFalse4() {
    }
    Object.defineProperty(SampleFalse4.prototype, "false", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleFalse4;
}());
var SampleFalse5 = (function () {
    function SampleFalse5() {
    }
    SampleFalse5.prototype.false = function () { };
    return SampleFalse5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-false.js.map