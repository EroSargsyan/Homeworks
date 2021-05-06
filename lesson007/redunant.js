let str = "ananas";
function redunant(str) {
  return function innerRedunant(str) {
    return str;
  };
}
let foo = redunant(str);
console.log(foo(str));
