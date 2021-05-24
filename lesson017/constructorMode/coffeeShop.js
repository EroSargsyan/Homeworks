function CoffeeShop(name, menu) {
  this.name = name;
  this.menu = menu;
  this.orders = [];
  this.listOrder = [];
}

let coffeeShop = new CoffeeShop("Foodicted", [
  { name: "barbeque", type: "dish", price: 50 },
  { name: "fries", type: "dish", price: 10 },
  { name: "pepsi", type: "drink", price: 5 },
  { name: "cocacola", type: "drink", price: 6 },
]);

CoffeeShop.prototype.addOrder = function (order) {
  for (let item of this.menu) {
    if (item.name === order) {
      this.orders.push(order);
      this.listOrder.push(order);
    }
  }
  if (this.orders.length === 0) {
    console.log("This item is currently unavailable");
  }
};

CoffeeShop.prototype.fulfillOrder = function () {
  if (this.orders.length === 0) {
    console.log(`All orders have been fulfilled!`);
  } else {
    for (let item of this.orders.reverse()) {
      console.log(`The ${item} is ready`);
      this.orders.shift(item);
      break;
    }
  }
};

CoffeeShop.prototype.listOrders = function () {
  if (this.listOrder.length === 0) {
    console.log([]);
  } else {
    console.log(this.listOrder);
  }
};

CoffeeShop.prototype.dueAmount = function () {
  console.log(this.listOrder.length);
};

CoffeeShop.prototype.cheapestItem = function () {
  let index = 0;
  let minPrice = this.menu[index].price;
  for (let i = 0; i < this.menu.length; i++) {
    if (minPrice > this.menu[i].price) {
      minPrice = this.menu[i].price;
      index = i;
    }
  }
  console.log(this.menu[index].name);
};

CoffeeShop.prototype.drinksOnly = function () {
  let arr = [];
  for (let i = 0; i < this.menu.length; i++) {
    if (this.menu[i].type === "drink") {
      arr.push(this.menu[i].name);
    }
  }
  console.log(arr);
};

CoffeeShop.prototype.foodOnly = function () {
  let arr = [];
  for (let i = 0; i < this.menu.length; i++) {
    if (this.menu[i].type === "dish") {
      arr.push(this.menu[i].name);
    }
  }
  console.log(arr);
};
//////////////testing/////////

coffeeShop.addOrder("pepsi");
coffeeShop.addOrder("jaguar");

// coffeeShop.dueAmount();
// coffeeShop.fulfillOrder();
// coffeeShop.fulfillOrder();
coffeeShop.drinksOnly();
coffeeShop.foodOnly();
