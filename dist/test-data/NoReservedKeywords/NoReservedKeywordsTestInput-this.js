var SampleThis3 = (function () {
    function SampleThis3() {
    }
    return SampleThis3;
}());
var SampleThis4 = (function () {
    function SampleThis4() {
    }
    Object.defineProperty(SampleThis4.prototype, "this", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleThis4;
}());
var SampleThis5 = (function () {
    function SampleThis5() {
    }
    SampleThis5.prototype.this = function () { };
    return SampleThis5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-this.js.map