let str = "123456A";

function myRegExp(str) {
  let regexp = /\D|\s/gi;
  if ((str.length === 6 || str.length === 4) && regexp.test(str) === false) {
    return "Valid string";
  } else {
    return "Invalid string";
  }
}
console.log(myRegExp(str));
