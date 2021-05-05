function longestWord(sentence) {
  let wordArray = sentence.split(" ");
  let maxLength = 0;
  let result = "";

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxLength) {
      maxLength = wordArray[i].length;
      result = wordArray[i];
    }
  }

  return result;
}

console.log(
  longestWord(
    "A revolution aaaaaaaaaaaaaaaaa without dancing is a revolution not worth having."
  )
);
