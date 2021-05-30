let obj = {
  John: [100, 90, 80],
  Bob: [100, 70, 80],
  Menendes: [100, 100, 100],
  Vaxinak: [100, 20, 10],
};

function getBestStudent(obj) {
  let arr = Object.entries(obj);
  let grade = 0;
  let bestStud;
  arr = arr.map(([key, value]) => {
    return [
      key,
      value.reduce((acc, item) => {
        return acc + item;
      }, 0) / value.length,
    ];
  });

  for (let [key, value] of arr) {
    if (grade < value) {
      grade = value;
      bestStud = key;
    }
  }
  return bestStud;
}
console.log(getBestStudent(obj));
