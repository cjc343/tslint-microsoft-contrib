var globalProp1;
var globalProp2 = function () { };
var globalProp3 = function () { };
function globalFunctionShadow1() { }
var SetTimeoutModule;
(function (SetTimeoutModule) {
    var moduleProp1;
    var moduleProp2 = function () { };
    var moduleProp3 = function () { };
    var globalProp1;
    var globalFunctionShadow1 = 'not a function';
    function moduleFunction1(globalProp2, moduleProp1) {
        setTimeout(moduleProp1, 5);
        setTimeout(moduleProp2, 5);
        setTimeout(globalFunction1, 5);
        setTimeout(globalProp2, 5);
    }
    var View = (function () {
        function View(moduleProp1, globalProp3) {
            setTimeout(globalProp1, 5);
            setTimeout(moduleProp1, 5);
            setTimeout(globalProp2, 5);
        }
        View.prototype.method2 = function (globalProp3) {
            var f = function (moduleProp1) {
                var x = function (moduleProp2) {
                    setTimeout(globalProp1, 5);
                    setTimeout(globalProp2, 5);
                    setTimeout(globalProp3, 5);
                    setTimeout(globalFunction1, 5);
                    setTimeout(moduleProp1, 5);
                    setTimeout(moduleProp2, 5);
                    setTimeout(moduleProp3, 5);
                };
            };
        };
        Object.defineProperty(View.prototype, "someSetter", {
            set: function (moduleProp1) {
                setTimeout(moduleProp1, 5);
            },
            enumerable: true,
            configurable: true
        });
        return View;
    }());
})(SetTimeoutModule || (SetTimeoutModule = {}));
//# sourceMappingURL=NoStringBasedSetTimeoutTestInput-shadowedVariables.js.map