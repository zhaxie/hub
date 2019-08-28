// 数组去重
function uniquieArr(arr) {
    var newArr = [];
    var obj = {};

    arr.forEach(function (item) {
        if (!obj[item]) {
            newArr.push(item);
            obj[item] = item;
        }
    })
    return newArr;
}
console.log(uniquieArr(['a', 'b', 'c', 'e', 'e']));


// 数组去重
var arr4 = [30, 10, 50, 45, 30, 10, 111, 35, 1899, 50, 45];
var newArr4 = arr4.reduce(function (prev, cur) {
    prev.indexOf(cur) === -1 && prev.push(cur);
    return prev;
}, []);
console.log(newArr4);