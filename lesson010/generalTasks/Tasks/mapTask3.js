function parse(arr) {
  let result = arr.map((item) => {
    if (Number(item) == item) {
      return parseInt(item);
    } else if (isNaN(Number(item))) {
      return null;
    }
  });
  return result;
}

console.log(parse(["1", "px", "abc", "85", "34"]));
