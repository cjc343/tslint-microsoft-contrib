var MyModule;
(function (MyModule) {
    var _ = { bind: null };
    var ErrorClass = (function () {
        function ErrorClass() {
        }
        ErrorClass.prototype.myMethod = function (param1) { };
        ErrorClass.prototype.perform = function () {
            setTimeout(_.bind(this.myMethod, 'some value'), 500);
        };
        return ErrorClass;
    }());
})(MyModule || (MyModule = {}));
//# sourceMappingURL=NoStringBasedSetTimeoutTestInput-error3.js.map