function splice(arr, start, count, ...adder) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > count + start || i < start) {
      newArr.push(arr[i]);
    }
  }

  newArr.push(...adder);

  return newArr;
}

let array = [1, 2, 3, 45, 6, 78, "abcd"];

console.log(splice(array, 1, 3, "James", "John", 1));
