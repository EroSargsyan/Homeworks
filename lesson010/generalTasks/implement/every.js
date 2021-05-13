// //First solution

let array = [1, 2, 3, 45, 6, 78];

function every(arr, foo) {
  let newArr = [];
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (foo(element, i, arr)) {
      newArr.push(element);
    }

    if (newArr.length == arr.length) {
      result = true;
    }
  }
  return result;
}

console.log(every(array, (n) => n >= 1));

//Second solution

// let array = [1, 2, 3, 45, 6, 78];

// function every(arr, foo) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (!foo(element, i, arr)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(every(array, (n) => n > 1));
