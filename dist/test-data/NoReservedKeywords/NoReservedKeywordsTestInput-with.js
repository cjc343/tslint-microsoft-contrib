var SampleWith3 = (function () {
    function SampleWith3() {
    }
    return SampleWith3;
}());
var SampleWith4 = (function () {
    function SampleWith4() {
    }
    Object.defineProperty(SampleWith4.prototype, "with", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleWith4;
}());
var SampleWith5 = (function () {
    function SampleWith5() {
    }
    SampleWith5.prototype.with = function () { };
    return SampleWith5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-with.js.map