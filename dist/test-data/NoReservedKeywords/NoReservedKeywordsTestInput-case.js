var SampleCase3 = (function () {
    function SampleCase3() {
    }
    return SampleCase3;
}());
var SampleCase4 = (function () {
    function SampleCase4() {
    }
    Object.defineProperty(SampleCase4.prototype, "case", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleCase4;
}());
var SampleCase5 = (function () {
    function SampleCase5() {
    }
    SampleCase5.prototype.case = function () { };
    return SampleCase5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-case.js.map