let sent = "Keep your friends close, but your enemies closer.";
let sentArray = [];
sentArray = sent.split("");
newSentArray = [];
for (let item of sentArray) {
  if (item === "," || item === "." || item === "!") {
    continue;
  } else {
    newSentArray.push(item);
  }
}
let joinedArr = newSentArray.join("");
let result = joinedArr.split(" ");

console.log(result);
