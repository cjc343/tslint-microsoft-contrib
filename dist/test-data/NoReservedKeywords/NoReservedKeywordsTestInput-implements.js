var SampleImplements1;
(function (SampleImplements1) {
    var implements;
})(SampleImplements1 || (SampleImplements1 = {}));
var SampleImplements2;
(function (SampleImplements2) {
    function implements() { }
})(SampleImplements2 || (SampleImplements2 = {}));
var SampleImplements3 = (function () {
    function SampleImplements3() {
    }
    return SampleImplements3;
}());
var SampleImplements4 = (function () {
    function SampleImplements4() {
    }
    Object.defineProperty(SampleImplements4.prototype, "implements", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleImplements4;
}());
var SampleImplements5 = (function () {
    function SampleImplements5() {
    }
    SampleImplements5.prototype.implements = function () { };
    return SampleImplements5;
}());
function method(implements) { }
var implements;
//# sourceMappingURL=NoReservedKeywordsTestInput-implements.js.map