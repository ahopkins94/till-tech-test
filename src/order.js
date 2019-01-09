function Order(coffeeshop){
  this.coffeeshop = coffeeshop
  this.items = [];
}

Order.prototype.addItem = function(name, price, quantity, item = require('../src/item.js')) {
  for (var i = 0; i < this.coffeeshop.prices.length; i++) {
    if (this.coffeeshop.prices[i] != name + ": " + price) return null;}
  this.items.push(new item(name, price, quantity));
};

module.exports = Order;
