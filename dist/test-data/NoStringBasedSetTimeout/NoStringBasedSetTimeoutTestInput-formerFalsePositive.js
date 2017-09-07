function invoke(functionArg1, functionArg2) {
    if (functionArg2 === void 0) { functionArg2 = function () { }; }
    setTimeout(functionArg1);
    setTimeout(functionArg2);
}
//# sourceMappingURL=NoStringBasedSetTimeoutTestInput-formerFalsePositive.js.map