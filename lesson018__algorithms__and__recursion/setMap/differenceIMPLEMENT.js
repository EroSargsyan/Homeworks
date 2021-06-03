let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

const difference = (set1, set2) => {
  let result = [];
  for (let item of set1) {
    if (!set2.has(item)) {
      result.push(item);
    }
  }
  return result;
};

console.log(difference(setA, setC));
