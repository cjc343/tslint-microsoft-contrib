"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BaseClass = (function (_super) {
    __extends(BaseClass, _super);
    function BaseClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseClass.prototype.notALocalMethod = function () {
    };
    return BaseClass;
}(React.Component));
exports.BaseClass = BaseClass;
var MyComponent = (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.listener3 = function () { };
        _this.listener1 = _this.listener1.bind(_this);
        _this.listener2 = _this.listener2.bind(_this);
        _this.listener1 = _this.listener2.bind(_this);
        return _this;
    }
    MyComponent.prototype.listener1 = function () {
    };
    MyComponent.prototype.listener2 = function () {
    };
    MyComponent.prototype.render = function () {
        return React.createElement("div", { onClick: this.listener1 },
            "onMouseOver=",
            this.listener2,
            "> onMouseDown=",
            this.listener3,
            "> onMouseMove=",
            this.notALocalMethod,
            "> // this is not a real method, so it is OK");
    };
    return MyComponent;
}(BaseClass));
exports.MyComponent = MyComponent;
//# sourceMappingURL=ReactThisBindingIssue-passing.js.map