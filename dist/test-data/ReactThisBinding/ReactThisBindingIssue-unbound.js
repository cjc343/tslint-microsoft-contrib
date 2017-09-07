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
    MyComponent.prototype.listener = function () {
    };
    MyComponent.prototype.render = function () {
        return React.createElement("div", { onClick: this.listener },
            "// a jsx self-closing element triggers a violation",
            React.createElement("span", { onClick: this.listener }));
    };
    return MyComponent;
}(React.Component));
exports.MyComponent = MyComponent;
//# sourceMappingURL=ReactThisBindingIssue-unbound.js.map