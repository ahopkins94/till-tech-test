function Calculator(order, amountPaid) {
  this.order = order;
  this.amountPaid = amountPaid;
  this.TAX = 0.2;
}

module.exports = Calculator;
