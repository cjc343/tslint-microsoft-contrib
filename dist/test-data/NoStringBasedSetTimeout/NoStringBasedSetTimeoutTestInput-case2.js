var globalProp1;
var globalProp2 = function () { };
var globalProp3 = function () { };
function globalFunction1() { }
setTimeout(globalProp1, 5);
setTimeout(globalProp2, 5);
setTimeout(globalProp3, 5);
setTimeout(globalFunction1, 5);
var SetTimeoutModule;
(function (SetTimeoutModule) {
    var moduleProp1;
    var moduleProp2 = function () { };
    var moduleProp3 = function () { };
    function moduleFunction1() {
        setTimeout(moduleProp1, 5);
        setTimeout(moduleProp2, 5);
        setTimeout(moduleProp3, 5);
        setTimeout(moduleFunction1, 5);
    }
    var View = (function () {
        function View() {
            this.property2 = function () { };
            this.property3 = function () { };
        }
        View.method1 = function () { };
        View.prototype.method2 = function () {
            setTimeout(View.method1, 5);
            setTimeout(View.property4, 5);
            setTimeout(View.property5, 5);
            setTimeout(View.property6, 5);
            setTimeout(this.method2, 5);
            setTimeout(this.property1, 5);
            setTimeout(this.property2, 5);
            setTimeout(globalProp1, 5);
            setTimeout(globalProp2, 5);
            setTimeout(globalProp3, 5);
            setTimeout(globalFunction1, 5);
            setTimeout(moduleProp1, 5);
            setTimeout(moduleProp2, 5);
            setTimeout(moduleProp3, 5);
            setTimeout(moduleFunction1, 5);
            setTimeout(this.property1, 5);
            var f = function () {
                setTimeout(this.method2, 5);
                setTimeout(this.property1, 5);
                setTimeout(this.property2, 5);
                setTimeout(this.property3, 5);
            };
        };
        View.property5 = function () { };
        View.property6 = function () { };
        return View;
    }());
})(SetTimeoutModule || (SetTimeoutModule = {}));
//# sourceMappingURL=NoStringBasedSetTimeoutTestInput-case2.js.map