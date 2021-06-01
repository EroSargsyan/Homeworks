let array = [1, [3, 4, [1, 2]], 10];
let newArray = [];
function flatten(arr) {
  arr.map((item) => {
    if (!Array.isArray(item)) {
      newArray.push(item);
    } else if (Array.isArray(item)) {
      flatten(item);
    }
  });
  return newArray;
}

console.log(flatten(array));
