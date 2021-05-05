function invertValues(object) {
  const result = {};
  for (let key in object) {
    if (result[object[key]] === undefined) {
      result[object[key]] = key;
      continue;
    }
    if (typeof result[object[key]] !== "object") {
      result[object[key]] = Array(result[object[key]]);
    }
    result[object[key]].push(key);
  }
  return result;
}
console.log(invertValues({ a: "2", b: "4", c: "2", d: "3" }));

//This work wasn`t been done completly by me.
