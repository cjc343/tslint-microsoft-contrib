var SampleElse3 = (function () {
    function SampleElse3() {
    }
    return SampleElse3;
}());
var SampleElse4 = (function () {
    function SampleElse4() {
    }
    Object.defineProperty(SampleElse4.prototype, "else", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleElse4;
}());
var SampleElse5 = (function () {
    function SampleElse5() {
    }
    SampleElse5.prototype.else = function () { };
    return SampleElse5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-else.js.map