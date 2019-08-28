// 根据条件执行结果
function manyIfElse(conditionName) {
    var actionObj = {
        action0: '0',
        action1: '1',
        action2: '2',
        action3: '3',
        action4: '4',
        action5: '5',
    }
    var ret = actionObj[conditionName];
    if (ret) {
        console.log(ret);
    }
}
manyIfElse('action5');