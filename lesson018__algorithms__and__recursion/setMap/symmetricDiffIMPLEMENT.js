let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

const symmetricDifference = (set1, set2) => {
  let result = [];
  for (let item of set1) {
    if (!set2.has(item)) {
      result.push(item);
    }
  }
  for (let item of set2) {
    if (!set1.has(item)) {
      result.push(item);
    }
  }

  return result;
};

console.log(symmetricDifference(setA, setC));
