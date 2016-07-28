function getCategoryCN(categoryEN) {
  return categories[categoryEN];
}

var categories = {
  taobao: "淘宝",
  jiangjin: "奖金",
  yiban: "一般"
};

var categoriesArr = [
  {
    name: 'taobao',
    nameCN: "淘宝"
  },
  {
    name: 'jiangjin',
    nameCN: "奖金"
  },
  {
    name: 'yiban',
    nameCN: "一般"
  }
];


module.exports = {
  getCategoryCN: getCategoryCN,
  categories: categoriesArr
}
