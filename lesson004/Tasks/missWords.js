let sentence = "_, we have a _.";
let arraySentence2 = ["Houston", "problem"];
let arraySentence1 = sentence.toString().split("");
let posit = 0;
for (let i = 0; i < sentence.length - 1; i++) {
  if (arraySentence1[i] == "_") {
    arraySentence1[i] = arraySentence2[posit];
    posit++;
  }
}
let abc = arraySentence1.join("");
console.log(abc);
