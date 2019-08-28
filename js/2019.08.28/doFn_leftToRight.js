// 自左向右执行函数
function d() {
    var dRet = 'd';
    return dRet;
}
function e(dRet) {
    return eRet = dRet
}
function f(eRet) {
    return fRet = eRet;
}
function composeLeftToRight() {
    var args = Array.prototype.slice.call(arguments);
    var start = 0;
    var len = args.length - 1;

    return (function () {
        var result = args[start]();
        start += 1;
        while (len <= start) {
            result = args[start](result);
        }
        return result;
    }).call(compose);
}
console.log(composeLeftToRight(d, e, f));




// 自右向左执行函数
function a(bRet) {
    return aRet = bRet;
}
function b(cRet) {
    return bRet = cRet;
}
function c() {
    var cRet;
    return cRet = 0;
}
function compose() {
    var args = Array.prototype.slice.call(arguments);
    var len = args.length - 1;
    return (function () {
        var result = args[len]();
        while (len--) {
            result = args[len](result);
        }
        return result;
    }).call(compose);
}
console.log(compose(a, b, c))