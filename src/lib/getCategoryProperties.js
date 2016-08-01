function getCategoryCN(categories, categoryEN) {
  var categoryCN = '';
  for(var i = 0; i < categories.length; i++) {
    if (categories[i].name === categoryEN) {
      categoryCN = categories[i].nameCN;
      break;
    }
  }
  return categoryCN;
}
function getCategoryColor(categories, categoryEN) {
  var color = '';
  for(var i = 0; i < categories.length; i++) {
    if (categories[i].name === categoryEN) {
      color = categories[i].bgColor;
      break;
    }
  }
  return color;
}

// var categories = {
//   taobao: "淘宝",
//   jiangjin: "奖金",
//   yiban: "一般"
// };

var categoriesArr = [
  {
    name: 'taobao',
    nameCN: "淘宝",
    bgColor: '#ff4200'
  },
  {
    name: 'jiangjin',
    nameCN: "奖金",
    bgColor: '#00deff'
  },
  {
    name: 'yiban',
    nameCN: "一般",
    bgColor: '#ffc000'
  }
];


module.exports = {
  getCategoryCN: getCategoryCN,
  // categories: categoriesArr,
  getCategoryColor: getCategoryColor
}
