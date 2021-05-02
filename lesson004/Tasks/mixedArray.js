let rndArray = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let orderedArray = [];
for (let items of rndArray) {
  if (typeof items === "number") {
    if (items % 2 === 1) {
      orderedArray.unshift(items);
    } else {
      orderedArray.push(items);
    }
  }
}
console.log(orderedArray);
