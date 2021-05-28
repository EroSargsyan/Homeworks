class Account {
  constructor(name, balance) {
    this._name = name;
    this._id = Math.floor(Math.random() * 1000);
    this._balance = balance;
  }

  get getter() {
    return `${this._name} , ${this._id} , ${this._balance}`;
  }

  set name(name) {
    this._name = name;
  }

  set balance(balance) {
    this._balance += balance;
  }

  credit(amount) {
    this.balance = amount;
  }
  debit(amount) {
    if (amount <= this._balance) {
      this.balance = -amount;
    } else {
      throw new Error("Amount exceeded balance");
    }
  }

  transferTo(anotherAccount, amount) {
    if (amount <= this._balance) {
      this.balance = -amount;
      anotherAccount.credit(amount);
    } else {
      throw new Error("Amount exceeded balance");
    }
  }

  toString() {
    return `${this._name}'s balance is $${this._balance} `;
  }

  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst._id === accountSecond._id) {
      return "Same accounts";
    } else {
      return "Different accounts";
    }
  }
}

/////////////testing/////////////////

let saving = new Account("Saving account", 2000);
let regular = new Account("Regular account", 0);
saving.credit(1000);
// saving.debit(5000);
saving.transferTo(regular, 1000);
console.log(saving.toString());
console.log(regular.toString());
console.log(Account.identifyAccounts(regular, saving));
