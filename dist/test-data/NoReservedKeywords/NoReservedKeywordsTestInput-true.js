var SampleTrue3 = (function () {
    function SampleTrue3() {
    }
    return SampleTrue3;
}());
var SampleTrue4 = (function () {
    function SampleTrue4() {
    }
    Object.defineProperty(SampleTrue4.prototype, "true", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleTrue4;
}());
var SampleTrue5 = (function () {
    function SampleTrue5() {
    }
    SampleTrue5.prototype.true = function () { };
    return SampleTrue5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-true.js.map