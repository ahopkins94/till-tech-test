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

module.exports = Calculator;
