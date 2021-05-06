function add_ly(word) {
  return function add_suffix(ly) {
    return word + ly;
  };
}
let foo = add_ly("total");
console.log(foo("ly"));
