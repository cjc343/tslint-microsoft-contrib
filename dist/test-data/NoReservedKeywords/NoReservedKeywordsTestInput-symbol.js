var SampleSymbol1;
(function (SampleSymbol1) {
    var symbol;
})(SampleSymbol1 || (SampleSymbol1 = {}));
var SampleSymbol2;
(function (SampleSymbol2) {
    function symbol() { }
})(SampleSymbol2 || (SampleSymbol2 = {}));
var SampleSymbol3 = (function () {
    function SampleSymbol3() {
    }
    return SampleSymbol3;
}());
var SampleSymbol4 = (function () {
    function SampleSymbol4() {
    }
    Object.defineProperty(SampleSymbol4.prototype, "symbol", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleSymbol4;
}());
var SampleSymbol5 = (function () {
    function SampleSymbol5() {
        this.func = function (symbol) { };
    }
    SampleSymbol5.prototype.symbol = function () { };
    SampleSymbol5.prototype.method = function (symbol) { };
    return SampleSymbol5;
}());
function methodSymbol(symbol) { }
var symbol;
//# sourceMappingURL=NoReservedKeywordsTestInput-symbol.js.map