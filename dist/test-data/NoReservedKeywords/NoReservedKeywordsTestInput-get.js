var WrapperGet;
(function (WrapperGet) {
    var get;
    (function (get_1) {
        var get = (function () {
            function get() {
            }
            return get;
        }());
    })(get || (get = {}));
})(WrapperGet || (WrapperGet = {}));
var SampleGet1;
(function (SampleGet1) {
    var get;
})(SampleGet1 || (SampleGet1 = {}));
var SampleGet2;
(function (SampleGet2) {
    function get() { }
})(SampleGet2 || (SampleGet2 = {}));
var SampleGet3 = (function () {
    function SampleGet3() {
    }
    return SampleGet3;
}());
var SampleGet4 = (function () {
    function SampleGet4() {
    }
    Object.defineProperty(SampleGet4.prototype, "get", {
        get: function () { return this.var; },
        set: function (value) { },
        enumerable: true,
        configurable: true
    });
    return SampleGet4;
}());
var SampleGet5 = (function () {
    function SampleGet5() {
        this.func = function (get) { };
    }
    SampleGet5.prototype.get = function () { };
    SampleGet5.prototype.method = function (get) { };
    return SampleGet5;
}());
function methodGet(get) { }
var get;
//# sourceMappingURL=NoReservedKeywordsTestInput-get.js.map