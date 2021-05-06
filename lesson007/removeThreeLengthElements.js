function filterByLength(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

let array = ["kia", "tesla", "bmw", "mercedes", "vaxinak"];
console.log(filterByLength(array));
