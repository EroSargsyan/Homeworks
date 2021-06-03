let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
let setC = new Set([3, 4, 5, 6]);

const union = (set1, set2) => {
  let result = [];
  result.push(...set1);
  for (let item of set2) {
    if (!set1.has(item)) {
      result.push(item);
    }
  }
  return result;
};

console.log(union(setA, setC));
