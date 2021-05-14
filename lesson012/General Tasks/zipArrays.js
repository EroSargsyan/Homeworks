let arr1 = ["a", "b", "c"];
let arr2 = [1, 2];
let newArr = [];

function zipObject(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] != undefined) {
      newArr.push([arr1[i], arr2[i]]);
    } else {
      newArr.push([arr1[i], null]);
    }
  }

  return Object.fromEntries(newArr);
}

console.log(zipObject(arr1, arr2));
