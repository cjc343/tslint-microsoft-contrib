var SampleDebugger3 = (function () {
    function SampleDebugger3() {
    }
    return SampleDebugger3;
}());
var SampleDebugger4 = (function () {
    function SampleDebugger4() {
    }
    Object.defineProperty(SampleDebugger4.prototype, "debugger", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleDebugger4;
}());
var SampleDebugger5 = (function () {
    function SampleDebugger5() {
    }
    SampleDebugger5.prototype.debugger = function () { };
    return SampleDebugger5;
}());
//# sourceMappingURL=NoReservedKeywordsTestInput-debugger.js.map