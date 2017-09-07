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
    function MyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyComponent.prototype.listenerMethod = function () { };
    MyComponent.prototype.render = function () {
        var listener1 = function () { };
        var listener2 = function () { };
        var listener3 = _.bind(this.listenerMethod, this);
        var listener4 = this.listenerMethod.bind(this);
        return React.createElement("div", { onClick: listener1, onMouseOver: listener2, onMouseDown: listener3, onMouseOut: listener4 });
    };
    return MyComponent;
}(React.Component));
exports.MyComponent = MyComponent;
//# sourceMappingURL=ReactThisBindingIssue-local-instance.js.map