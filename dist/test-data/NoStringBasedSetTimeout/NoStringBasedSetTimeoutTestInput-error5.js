var MyModule;
(function (MyModule) {
    var ErrorClass = (function () {
        function ErrorClass() {
        }
        ErrorClass.prototype.myMethod = function (param1) { };
        ErrorClass.prototype.method = function () {
            [].forEach(function (view) {
                window.setTimeout(view.myMethod.bind(view), 0);
            });
        };
        return ErrorClass;
    }());
})(MyModule || (MyModule = {}));
//# sourceMappingURL=NoStringBasedSetTimeoutTestInput-error5.js.map