function Receipt(order) {
  this.order = order;
  this.today = new Date();
  this.calculator = null;
}

Receipt.prototype.getCalculator = function(amountPaid, calculator = require('../src/calculator.js')) {
  this.calculator = new calculator(this.order, amountPaid);
};

module.exports = Receipt;
