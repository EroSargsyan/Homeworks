let array = "cheesecaiyyy".split(""); ////count vowels
let vowelArr = ["a", "e", "i", "o", "u", "y"];

function vowel(arr) {
  let vov = vowelArr;
  let result = 0;
  let i = 0;
  function count(arr, vov) {
    if (vov.length === 0) {
      return;
    }

    for (let item of arr) {
      if (item === vov[0]) {
        result++;
      }
    }
    count(arr, vov.slice(1));

    return result;
  }
  return count(arr, vov);
}

console.log(vowel(array));
