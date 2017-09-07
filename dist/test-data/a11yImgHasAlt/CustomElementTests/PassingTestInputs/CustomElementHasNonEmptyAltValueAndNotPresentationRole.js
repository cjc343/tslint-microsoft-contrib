"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Picture = function (props) { return React.createElement("span", null); };
var validAltValue;
var a = React.createElement(Picture, { alt: 'validAltValue', role: 'button' });
var b = React.createElement(Picture, { alt: validAltValue, role: 'link' });
var c = React.createElement(Picture, { alt: 'validAltValue' });
var d = React.createElement("img", { alt: 'validAltValue', role: 'button link' });
var e = React.createElement("img", { aLt: validAltValue });
var f = React.createElement("img", { alt: 'validAltValue' });
//# sourceMappingURL=CustomElementHasNonEmptyAltValueAndNotPresentationRole.js.map