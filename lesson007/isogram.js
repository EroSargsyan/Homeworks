function isogram(str) {
  let strArray = str.split("");
  let target = false;
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < strArray.length; j++) {
      if (i != j) {
        if (strArray[i] === strArray[j]) {
          target = true;
        }
      }
    }
  }
  if (target) {
    console.log("Isogram");
  } else {
    console.log("Not a isogram");
  }
}

let str = "babcefgh";
isogram(str);
