let word = "abg1dez".split("");
let result = [];
function brackets(str) {
  if (str.length === 0) {
    return;
  } else if (str.length === 1) {
    result.push(str);
  } else if (str.length === 2) {
    result.push(str.join(""));
  } else if (str.length > 2) {
    let firstEl = str.slice(0, 1) + "(";
    let lastEl = ")" + str.slice(-1);

    return (
      result.push(firstEl),
      brackets(str.slice(1, -1)),
      result.push(lastEl),
      result.join("")
    );
  }
}

console.log(brackets(word));
