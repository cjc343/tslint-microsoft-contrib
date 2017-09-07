var functionVariable = function () { };
var createFunction = function () { return function () { }; };
setTimeout(function () { });
this.setTimeout(function () { });
window.setTimeout(function () { });
setTimeout(function () { });
this.setTimeout(function () { });
window.setTimeout(function () { });
setTimeout(functionVariable);
this.setTimeout(functionVariable);
window.setTimeout(functionVariable);
var a = setTimeout(functionVariable);
var b = this.setTimeout(functionVariable);
var c = window.setTimeout(functionVariable);
setTimeout(createFunction());
this.setTimeout(createFunction());
window.setTimeout(createFunction());
//# sourceMappingURL=NoStringBasedSetTimeoutTestInput-case3.js.map