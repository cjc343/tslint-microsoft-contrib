var SampleEnum3 = (function () {
    function SampleEnum3() {
    }
    return SampleEnum3;
}());
var SampleEnum4 = (function () {
    function SampleEnum4() {
    }
    Object.defineProperty(SampleEnum4.prototype, "enum", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleEnum4;
}());
var SampleEnum5 = (function () {
    function SampleEnum5() {
    }
    SampleEnum5.prototype.enum = function () { };
    return SampleEnum5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-enum.js.map