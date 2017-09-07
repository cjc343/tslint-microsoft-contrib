var TestClassIssue46 = (function () {
    function TestClassIssue46(window) {
        this.window = window;
        setTimeout(function () { }, 100);
        window.setTimeout(function () { }, 100);
        setTimeout(function () { }, 100);
        window.setTimeout(function () { }, 100);
        var alertNum = 1;
        setTimeout("alert(" + alertNum + ")", 100);
        window.setTimeout("alert(" + alertNum + ")", 100);
        setTimeout("alert(" + alertNum + ")", 100);
        window.setTimeout("alert(" + alertNum + ")", 100);
    }
    return TestClassIssue46;
}());
//# sourceMappingURL=NoStringBasedSetTimeoutTestInput-issue46.js.map