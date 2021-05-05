function checker(word, arr) {
  let sortedWord = word.split("").sort().join("");
  let sortedArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    sortedArr.push(arr[i].split("").sort().join(""));
    if (sortedArr[i] === sortedWord) {
      result.push(sortedArr[i]);
    }
  }

  if (result.length === 0) {
    console.log("No matches");
  } else {
    console.log(result);
  }
}

checker("listen", ["enlists", "google", "inlets", "banana"]);
