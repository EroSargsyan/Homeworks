let num = 14789;
let numArr = num.toString().split("");
let result = Math.max(...numArr) - Math.min(...numArr);
console.log(result);
