function CoffeeShop() {
  this.items = [];
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

module.exports = CoffeeShop;
