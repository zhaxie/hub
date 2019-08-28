//防抖函数--可用在抑制频繁请求;
var oInp = document.getElementById('inp');
var timer = null;

function debounce(hander, delay) {
    var timer = null;
    return function () {
        var _self = this, _arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            hander.apply(_self, _arg);
        }, delay);
    }
}
function ajax(e) {
    console.log(e, this.value);
}
    // onInp.oninput = debounce(ajax, 2000);