function Calculator(order, amountPaid) {
  this.order = order;
  this.amountPaid = amountPaid;
  this.TAX = 0.2;
}

Calculator.prototype.total = function() {
  var total = 0;
  var items = this.order.items;
  for (var i = 0; i < items.length; i++) {
    total += (items[i].price * items[i].quantity);
  }
  return total;
};

Calculator.prototype.totalIncTax = function() {
  return this.amountOfTax() + this.total();
};


Calculator.prototype.amountOfTax = function() {
  return (this.TAX * this.total());
};

module.exports = Calculator;
