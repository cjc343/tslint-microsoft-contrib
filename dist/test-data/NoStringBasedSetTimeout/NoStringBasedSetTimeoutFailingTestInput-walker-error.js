var SetTimeoutSample;
(function (SetTimeoutSample) {
    'use strict';
    var MyClass = (function () {
        function MyClass() {
        }
        MyClass.prototype.onAnimationEnd = function () {
        };
        MyClass.prototype.method = function () {
            setTimeout(this.onAnimationEnd(), 300);
        };
        return MyClass;
    }());
})(SetTimeoutSample || (SetTimeoutSample = {}));
//# sourceMappingURL=NoStringBasedSetTimeoutFailingTestInput-walker-error.js.map