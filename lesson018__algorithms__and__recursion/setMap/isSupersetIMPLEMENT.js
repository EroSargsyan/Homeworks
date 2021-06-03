let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3, 5]);
let setC = new Set([3, 4, 5, 6]);

const isSuperset = (set1, set2) => {
  let result = [];
  for (let item of set1) {
    if (set2.has(item)) {
      result.push(item);
    }
  }
  if (result.length === set2.size) {
    return true;
  } else {
    return false;
  }
};

console.log(isSuperset(setA, setB));
