var SampleYield1;
(function (SampleYield1) {
    var yield;
})(SampleYield1 || (SampleYield1 = {}));
var SampleYield2;
(function (SampleYield2) {
    function yield() { }
})(SampleYield2 || (SampleYield2 = {}));
var SampleYield3 = (function () {
    function SampleYield3() {
    }
    return SampleYield3;
}());
var SampleYield4 = (function () {
    function SampleYield4() {
    }
    Object.defineProperty(SampleYield4.prototype, "yield", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleYield4;
}());
var SampleYield5 = (function () {
    function SampleYield5() {
    }
    SampleYield5.prototype.yield = function () { };
    return SampleYield5;
}());
function methodYield(yield) { }
var yield;
//# sourceMappingURL=NoReservedKeywordsTestInput-yield.js.map