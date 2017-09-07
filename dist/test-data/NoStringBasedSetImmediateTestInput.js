var typedStringVariable = 'string variable';
var functionVariable = function () { };
var anyVariable = function () { };
var createFunction = function () { return function () { }; };
var untypedCreateFunction = function () { };
var stringFunction = function () { return ''; };
setImmediate(function () { });
this.setImmediate(function () { });
window.setImmediate(function () { });
setImmediate(function () { });
this.setImmediate(function () { });
window.setImmediate(function () { });
setImmediate(functionVariable);
this.setImmediate(functionVariable);
window.setImmediate(functionVariable);
var a = setImmediate(functionVariable);
var b = this.setImmediate(functionVariable);
var c = window.setImmediate(functionVariable);
setImmediate(createFunction());
this.setImmediate(createFunction());
window.setImmediate(createFunction());
function invokeImmediate(functionArg) {
    setImmediate(functionArg);
}
setImmediate("var x = 'should fail'");
setImmediate(typedStringVariable);
setImmediate(anyVariable);
setImmediate(untypedCreateFunction());
setImmediate(stringFunction());
this.setImmediate("var x = 'should fail'");
this.setImmediate(typedStringVariable);
this.setImmediate(anyVariable);
this.setImmediate(untypedCreateFunction());
this.setImmediate(stringFunction());
window.setImmediate("var x = 'should fail'");
window.setImmediate(typedStringVariable);
window.setImmediate(anyVariable);
window.setImmediate(untypedCreateFunction());
window.setImmediate(stringFunction());
function invoke2Immediate(stringArg) {
    setImmediate(stringArg);
}
function invoke3Immediate(anyArg) {
    setImmediate(anyArg);
}
//# sourceMappingURL=NoStringBasedSetImmediateTestInput.js.map