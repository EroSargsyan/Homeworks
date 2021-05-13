//#First Solution

function sortBy(arr, str) {
  function compare(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else if (a == b) {
      return 0;
    }
  }

  function reverse(a, b) {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else if (a == b) {
      return 0;
    }
  }

  let sortedArr = [];
  if (str == "Asc") {
    sortedArr = arr.sort(compare);
  }

  if (str == "Desc") {
    sortedArr = arr.sort(reverse);
  }
  return sortedArr;
}

console.log(sortBy([4, 3, 2, 1], "Asc"));

//#Second Solution

// function sortBy(arr, str) {
//   let result = arr.sort((a, b) =>
//     str == "des"
//       ? a > b
//         ? -1
//         : a < b
//         ? 1
//         : 0
//       : str === "asc"
//       ? a < b
//         ? -1
//         : a > b
//         ? 1
//         : 0
//       : arr
//   );
//   return result;
// }

// console.log(sortBy([4, 3, 3, 2, 1], "asc"));
