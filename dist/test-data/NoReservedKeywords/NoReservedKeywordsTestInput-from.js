var WrapperFrom;
(function (WrapperFrom) {
    var from;
    (function (from_1) {
        var from = (function () {
            function from() {
            }
            return from;
        }());
    })(from || (from = {}));
})(WrapperFrom || (WrapperFrom = {}));
var SampleFrom1;
(function (SampleFrom1) {
    var from;
})(SampleFrom1 || (SampleFrom1 = {}));
var SampleFrom2;
(function (SampleFrom2) {
    function from() { }
})(SampleFrom2 || (SampleFrom2 = {}));
var SampleFrom3 = (function () {
    function SampleFrom3() {
    }
    return SampleFrom3;
}());
var SampleFrom4 = (function () {
    function SampleFrom4() {
    }
    Object.defineProperty(SampleFrom4.prototype, "from", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleFrom4;
}());
var SampleFrom5 = (function () {
    function SampleFrom5() {
        this.func = function (from) { };
    }
    SampleFrom5.prototype.from = function () { };
    SampleFrom5.prototype.method = function (from) { };
    return SampleFrom5;
}());
function methodFrom(from) { }
var from;
//# sourceMappingURL=NoReservedKeywordsTestInput-from.js.map