let argument1 = "Elon Musk";
let argument2 = "Hello World";
function foo1(argument1) {
  return function foo2(argument2) {
    if (argument2 === "Hello World") {
      return argument1;
    }
  };
}

let printAfter = foo1(argument1);
console.log(printAfter(argument2));
