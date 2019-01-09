function CoffeeShop() {
  this.prices = [];
}

CoffeeShop.prototype._jsonSetUp = function() {
  var fs = require('fs');
  var fileString = fs.readFileSync('./hipstercoffee.json').toString();
  this.json = JSON.parse(fileString);
};

CoffeeShop.prototype.name = function() {
  this._jsonSetUp();
  return this.json[0].shopName;
};

CoffeeShop.prototype.address = function() {
  this._jsonSetUp();
  return this.json[0].address;
};

CoffeeShop.prototype.number = function() {
  this._jsonSetUp();
  return this.json[0].phone;
};

CoffeeShop.prototype.getItems = function() {
  this._jsonSetUp();
  var prices = this.json[0].prices[0];
  this.prices = prices;
};

module.exports = CoffeeShop;
