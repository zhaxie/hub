// 模板函数
var template = '{aa}今年{bb}岁';
function render(list) {
  for (var item in list) {
    if (/{/.test(template)) {
      template = template.replace(new RegExp('{' + item + '}', 'mgi'), list[item]);
    }
  }
  return template;
}
console.log(render({
  aa: '小明',
  bb: '18'
}));

// 递归写render函数
function renderNew(obj) {
  var template = '<div>{aa}{ee}{bb}{bb}{bb}{aa}{bb}{ee}{bb}{aa}{bb}{cc}</div>';
  var renderNameList = Object.keys(obj);

  return (function relpaceThis(keyIndex) {
    var curKey = renderNameList[keyIndex];
    if (curKey) {
      template = template.replace(new RegExp('{' + curKey + '}', 'mgi'), obj[curKey]);
      keyIndex++;
      return relpaceThis(keyIndex, template);
    } else {
      return template;
    }
  }).call(renderNew, 0);
}

renderNewTimer = new Date().getTime()
console.log(renderNew({
  aa: '小明',
  ee: 'cm',
  bb: '18',
  cc: '170',
}))