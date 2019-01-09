function Receipt(order) {
  this.order = order;
  this.today = new Date();
  this.calculator = null;
}

Receipt.prototype.getCalculator = function(amountPaid, calculator = require('../src/calculator.js')) {
  this.calculator = new calculator(this.order, amountPaid);
};

Receipt.prototype.itemsFormat = function() {
  var items = this.order.items;
  string = "\n";
  for (var i = 0; i < items.length; i++) {
    string += " " + items[i].name + " " + items[i].quantity + " x " + items[i].price + "\n";
  }
  return string;
};

Receipt.prototype.display = function() {
  return this._dateFormat() + " " + this._timeFormat() + "\n" + this.order.coffeeshop.name + "\n" + this.order.coffeeshop.address + "\n" + this.order.coffeeshop.number + "\n" + this.itemsFormat() + "Tax: " + this.calculator.amountOfTax + "\nTotal: " + this.calculator.totalIncTax + "\nCash: " + this.calculator.amountPaid;
};

Receipt.prototype._pad = function(number) {
  return(number < 10 ? '0' : '') + number;
};


Receipt.prototype._dateFormat = function() {
  return this.today.getDate()+'/'+this.today.getMonth()+'/'+this.today.getFullYear();
};

Receipt.prototype._timeFormat = function() {
  return this._pad(this.today.getHours())+':'+this._pad(this.today.getMinutes())+':'+this._pad(this.today.getSeconds());
};

module.exports = Receipt;
