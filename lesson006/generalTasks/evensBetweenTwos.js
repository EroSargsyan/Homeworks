function evenBetween(value1, value2) {
  let min = "";
  let max = "";
  let str;
  let array = [];
  if (value1 < value2) {
    min = value1;
    max = value2;
  } else {
    min = value2;
    max = value1;
  }
  outer: for (let i = min; i <= max; i++) {
    let item = String(i).split("");
    for (let j = 0; j < item.length; j++) {
      if (item[j] % 2 != 0) {
        continue outer;
      }
      str = i;
    }
    array.push(str);
    str = "";
  }
  return array;
}
console.log(evenBetween(30, 70));
