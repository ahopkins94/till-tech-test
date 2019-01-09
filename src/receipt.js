function Receipt(order) {
  this.order = order;
  this.today = new Date();
  this.calculator = null;
}

module.exports = Receipt;
