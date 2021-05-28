class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
    this.listOrder = [];
  }
  addOrder(order) {
    for (let item of this.menu) {
      if (item.name === order) {
        this.orders.push(order);
        this.listOrder.push(order);
      }
    }
    if (this.orders.length === 0) {
      console.log("This item is currently unavailable");
    }
  }
  fulfillOrder() {
    if (this.orders.length === 0) {
      console.log(`All orders have been fulfilled!`);
    } else {
      for (let item of this.orders.reverse()) {
        console.log(`The ${item} is ready`);
        this.orders.shift(item);
        break;
      }
    }
  }
  listOrders() {
    if (this.listOrder.length === 0) {
      return [];
    } else {
      return this.listOrder;
    }
  }
  dueAmount() {
    return this.listOrder.length;
  }

  cheapestItem() {
    let index = 0;
    let minPrice = this.menu[index].price;
    for (let i = 0; i < this.menu.length; i++) {
      if (minPrice > this.menu[i].price) {
        minPrice = this.menu[i].price;
        index = i;
      }
    }
    return this.menu[index].name;
  }

  drinksOnly() {
    let arr = [];
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].type === "drink") {
        arr.push(this.menu[i].name);
      }
    }
    return arr;
  }

  foodOnly() {
    let arr = [];
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].type === "dish") {
        arr.push(this.menu[i].name);
      }
    }
    return arr;
  }
}

let coffeeShop = new CoffeeShop("Foodicted", [
  { name: "barbeque", type: "dish", price: 50 },
  { name: "fries", type: "dish", price: 10 },
  { name: "pepsi", type: "drink", price: 5 },
  { name: "cocacola", type: "drink", price: 6 },
]);

//////////////testing/////////

coffeeShop.addOrder("pepsi");
coffeeShop.addOrder("jaguar");

console.log(coffeeShop.dueAmount());
coffeeShop.fulfillOrder();
coffeeShop.fulfillOrder();
console.log(coffeeShop.drinksOnly());
console.log(coffeeShop.foodOnly());
