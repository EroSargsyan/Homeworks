function Shiritori() {
  this.words = [];
  this.game_over = false;
  this.play = function (word) {
    let wordArr = word.split("");
    // let lastLetter = wordArr[wordArr.length - 1];
    let firstLetter = wordArr[0];
    let wordRepeated = false;
    for (let item of this.words) {
      if (item === word) {
        wordRepeated = true;
      }
    }
    if (this.words.length === 0) {
      this.words.push(word);
    } else {
      let arraysLastItem = this.words[this.words.length - 1].split("");
      let lastItemLastLetter = arraysLastItem[arraysLastItem.length - 1];

      if (lastItemLastLetter === firstLetter && wordRepeated === false) {
        this.words.push(word);
        console.log(this.words);
      } else {
        console.log("Game over");
        this.game_over = true;
      }
    }
  };

  this.restart = function () {
    this.words = [];
    this.game_over = false;
    console.log("Game restarted");
  };
}

let game = new Shiritori();
game.play("abcd");
game.play("dbcd");
game.play("dbcd");
// console.log(game.words);
// game.restart();
