class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get getter() {
    return `${this._name} , ${this._email} , ${this._gender}`;
  }

  toString() {
    if (this._gender === "female") {
      return `Ms. ${this._name}`;
    } else if (this._gender === "male") {
      return `Mr. ${this._name}`;
    }
  }
}

class Book {
  constructor() {}

  get getter() {
    return `${this._title} , ${this._author} , ${this._price} , ${this._quantity}`;
  }

  set setTitle(title) {
    this._title = title;
  }
  set setAuthor(author) {
    this._author = author;
  }
  set setPrice(price) {
    this._price = price;
  }

  set setQuantity(quantity) {
    this._quantity = quantity;
  }
  getProfit() {
    return this._price * this._quantity;
  }
}

////////////testing//////

let author = new Author("J. K. Rowling", "abc@gmail.com", "female");
console.log(author.getter);
console.log(author.toString());

///////////////////////

let book = new Book();

book.setPrice = 120;
book.setQuantity = 3;
book.setTitle = "Harry Potter";
book.setAuthor = "J.K. Rowling";
console.log(book.getProfit());
console.log(book.getter);
