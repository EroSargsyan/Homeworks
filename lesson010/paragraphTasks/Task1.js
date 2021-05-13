function camelCase(str) {
  let splitedStr = str.split("-");
  let uppercaseStr = splitedStr.map((word, index) =>
    index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  let joinedArr = uppercaseStr.join("");
  return joinedArr;
}

console.log(camelCase("background-color"));
