var SampleString1;
(function (SampleString1) {
    var string;
})(SampleString1 || (SampleString1 = {}));
var SampleString2;
(function (SampleString2) {
    function string() { }
})(SampleString2 || (SampleString2 = {}));
var SampleString3 = (function () {
    function SampleString3() {
    }
    return SampleString3;
}());
var SampleString4 = (function () {
    function SampleString4() {
    }
    Object.defineProperty(SampleString4.prototype, "string", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleString4;
}());
var SampleString5 = (function () {
    function SampleString5() {
        this.func = function (string) { };
    }
    SampleString5.prototype.string = function () { };
    SampleString5.prototype.method = function (string) { };
    return SampleString5;
}());
function methodString(string) { }
var string;
//# sourceMappingURL=NoReservedKeywordsTestInput-string.js.map