function clearSelected(sentence, word) {
  while (sentence.includes(word)) {
    sentence = sentence.replace(word, "");
  }
  console.log(sentence);
}

clearSelected("This function removes selected word", "function");
