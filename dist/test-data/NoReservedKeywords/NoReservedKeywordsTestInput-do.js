var SampleDo3 = (function () {
    function SampleDo3() {
    }
    return SampleDo3;
}());
var SampleDo4 = (function () {
    function SampleDo4() {
    }
    Object.defineProperty(SampleDo4.prototype, "do", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleDo4;
}());
var SampleDo5 = (function () {
    function SampleDo5() {
    }
    SampleDo5.prototype.do = function () { };
    return SampleDo5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-do.js.map