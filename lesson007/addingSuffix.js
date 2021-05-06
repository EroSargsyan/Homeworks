let word = "total";
let suffix = "ly";

function add_ly(word) {
  return function add_suffix(suffix) {
    return word + suffix;
  };
}
let foo = add_ly(word);
console.log(foo(suffix));
