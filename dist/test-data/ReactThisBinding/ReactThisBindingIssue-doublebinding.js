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
var MyComponent = (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.listener = _this.listener.bind(_this);
        _this.listener = _this.listener.bind(_this);
        return _this;
    }
    MyComponent.prototype.listener = function () {
    };
    MyComponent.prototype.render = function () {
        return React.createElement("div", { onClick: this.listener });
    };
    return MyComponent;
}(React.Component));
exports.MyComponent = MyComponent;
//# sourceMappingURL=ReactThisBindingIssue-doublebinding.js.map