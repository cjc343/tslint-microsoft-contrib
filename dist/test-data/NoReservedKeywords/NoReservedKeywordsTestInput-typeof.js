var SampleTypeOf3 = (function () {
    function SampleTypeOf3() {
    }
    return SampleTypeOf3;
}());
var SampleTypeOf4 = (function () {
    function SampleTypeOf4() {
    }
    Object.defineProperty(SampleTypeOf4.prototype, "typeof", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleTypeOf4;
}());
var SampleTypeOf5 = (function () {
    function SampleTypeOf5() {
    }
    SampleTypeOf5.prototype.typeof = function () { };
    return SampleTypeOf5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-typeof.js.map