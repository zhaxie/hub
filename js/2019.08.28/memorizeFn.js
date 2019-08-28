// 记忆函数, 保存函数的运行结果, 方便下次调用
function memorize(fn) {
    var cache = {};
    return function () {
        var key = arguments.length + Array.prototype.join.call(arguments);
        if (cache[key]) {
            return cache[key];
        } else {
            cache[key] = fn.apply(this, arguments);
            return cache[key];
        }
    }
}
function factorial() {
    return c = 1 + 2;
}
function factorial2() {
    return c = 4 + 2;
}
var newF = memorize(factorial);
var newF2 = memorize(factorial2);
console.log(newF(), newF2());