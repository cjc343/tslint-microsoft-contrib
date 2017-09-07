var typedStringVariable = 'string variable';
var functionVariable = function () { };
var anyVariable = function () { };
var createFunction = function () { return function () { }; };
var untypedCreateFunction = function () { };
var stringFunction = function () { return ''; };
setInterval(function () { });
this.setInterval(function () { });
window.setInterval(function () { });
setInterval(function () { });
this.setInterval(function () { });
window.setInterval(function () { });
setInterval(functionVariable);
this.setInterval(functionVariable);
window.setInterval(functionVariable);
var a = setInterval(functionVariable);
var b = this.setInterval(functionVariable);
var c = window.setInterval(functionVariable);
setInterval(createFunction());
this.setInterval(createFunction());
window.setInterval(createFunction());
function invokeInterval(functionArg) {
    setInterval(functionArg);
}
setInterval("var x = 'should fail'");
setInterval(typedStringVariable);
setInterval(anyVariable);
setInterval(untypedCreateFunction());
setInterval(stringFunction());
this.setInterval("var x = 'should fail'");
this.setInterval(typedStringVariable);
this.setInterval(anyVariable);
this.setInterval(untypedCreateFunction());
this.setInterval(stringFunction());
window.setInterval("var x = 'should fail'");
window.setInterval(typedStringVariable);
window.setInterval(anyVariable);
window.setInterval(untypedCreateFunction());
window.setInterval(stringFunction());
function invokInterval2(stringArg) {
    setInterval(stringArg);
}
function invokeInterval3(anyArg) {
    setInterval(anyArg);
}
//# sourceMappingURL=NoStringBasedSetIntervalTestInput.js.map