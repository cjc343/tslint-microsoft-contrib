var SampleVar3 = (function () {
    function SampleVar3() {
    }
    return SampleVar3;
}());
var SampleVar4a = (function () {
    function SampleVar4a() {
    }
    Object.defineProperty(SampleVar4a.prototype, "var", {
        get: function () { return this._var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleVar4a;
}());
var SampleVar4b = (function () {
    function SampleVar4b() {
    }
    return SampleVar4b;
}());
var SampleVar5 = (function () {
    function SampleVar5() {
    }
    SampleVar5.prototype.var = function () { };
    return SampleVar5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-var.js.map