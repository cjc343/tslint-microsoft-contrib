var SampleWhile3 = (function () {
    function SampleWhile3() {
    }
    return SampleWhile3;
}());
var SampleWhile4 = (function () {
    function SampleWhile4() {
    }
    Object.defineProperty(SampleWhile4.prototype, "while", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleWhile4;
}());
var SampleWhile5 = (function () {
    function SampleWhile5() {
    }
    SampleWhile5.prototype.while = function () { };
    return SampleWhile5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-while.js.map