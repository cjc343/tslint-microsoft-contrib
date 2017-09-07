"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var num = 1;
var error = false;
var a = React.createElement("div", { "aria-hidden": !true });
var b = React.createElement("div", { "aria-hidden": "" + true });
var c = React.createElement("div", { "aria-hidden": 'tr' + 'ue' });
var d = React.createElement("div", { "aria-hidden": +123 });
var e = React.createElement("div", { "aria-hidden": -123 });
var f = React.createElement("div", { "aria-hidden": num });
var g = React.createElement("div", { "aria-hidden": this.props.hidden });
var h = React.createElement("div", { "aria-hidden": React.createElement("div", null) });
var i = React.createElement("input", { "aria-hidden": error ? 'true' : 'false' });
//# sourceMappingURL=canNotCheckUntilRunTime.js.map