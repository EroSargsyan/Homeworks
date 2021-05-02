let number = 1558;
number = number.toString().split("");
let product = [1];
let sum = [0];

for (let i = 0; i < number.length; i++) {
  product.push(number[i] * product[i]);
  sum.push(+number[i] + +sum[i]);
}
if (+product[product.length - 1] % +sum[sum.length - 1] === 0) {
  console.log(`${+product[product.length - 1] / +sum[sum.length - 1]}`);
} else {
  console.log(Math.floor(+product[product.length - 1] / +sum[sum.length - 1]));
}
