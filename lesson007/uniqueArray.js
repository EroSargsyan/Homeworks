function checker(array1) {
  let array2 = [];
  let target = false;
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (j != i) {
        if (array1[i] === array1[j]) {
          target = true;
        }
      }
    }
  }
  if (target) {
    console.log("Found similarities");
  } else {
    console.log("No matches");
  }
}
let array1 = [1, 2, 3, 4, 5, 6, "", "hello", null, "hello"];
checker(array1);
