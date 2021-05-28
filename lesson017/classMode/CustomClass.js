class CustomClass {
  constructor(name) {
    this._name = name;
    this._history = [];
  }
  log(a, b, c, ...args) {
    if (this._history.length === 0) {
      this._history.push(`${this._name}: ${JSON.stringify(a, b, c, args)}`);
    } else {
      this._history.push(`${JSON.stringify(a, b, c, args)}`);
    }
  }
  history() {
    return this.history;
  }
  clearHistory() {
    this._history = [];
  }
}

let regularClass = new CustomClass("Regular");
regularClass.log([1, 2, 3, 4, 5, 6, 7, 8]);
let fancyClass = new CustomClass("Fancy");
fancyClass.log({ a: 1, b: 2, c: 3, d: 4 });
regularClass.log([10, 11, 22]);

regularClass.clearHistory();
console.log(regularClass._history);
