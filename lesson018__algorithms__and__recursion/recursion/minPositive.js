let array = [56, -9, 87, -23, 0, -105, 55, 1, 4];
let min = Infinity;
function posit(arr) {
  let filtered = arr.filter((item) => item > 0);

  if (filtered.length === 0) {
    return;
  }

  if (filtered[0] < min) {
    min = filtered[0];
  }
  posit(filtered.slice(1));
  return min;
}
console.log(posit(array));

////////////second solution//////////////

// let array = [56, -9, 87, -23, 0, -105, 55, 1];
// let min = Infinity;
// function posit(arr, i) {
//   let filtered = arr.filter((item) => item > 0);

//   if (i > filtered.length) {
//     return;
//   }

//   if (filtered[i] < min) {
//     min = filtered[i];
//   }
//   posit(filtered, i + 1);
//   return min;
// }
// console.log(posit(array, 0));
