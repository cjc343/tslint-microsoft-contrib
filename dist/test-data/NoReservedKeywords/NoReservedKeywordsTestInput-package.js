var SamplePackage1;
(function (SamplePackage1) {
    var package;
})(SamplePackage1 || (SamplePackage1 = {}));
var SamplePackage2;
(function (SamplePackage2) {
    function package() { }
})(SamplePackage2 || (SamplePackage2 = {}));
var SamplePackage3 = (function () {
    function SamplePackage3() {
    }
    return SamplePackage3;
}());
var SamplePackage4 = (function () {
    function SamplePackage4() {
    }
    Object.defineProperty(SamplePackage4.prototype, "package", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SamplePackage4;
}());
var SamplePackage5 = (function () {
    function SamplePackage5() {
    }
    SamplePackage5.prototype.package = function () { };
    return SamplePackage5;
}());
function methodPackage(package) { }
var package;
//# sourceMappingURL=NoReservedKeywordsTestInput-package.js.map