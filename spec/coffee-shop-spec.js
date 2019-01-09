describe("CoffeeShop", function() {
  var CoffeeShop = require('../src/coffee-shop.js');
  var coffeeShop;

  it("should have a name", function() {
    coffeeShop = new CoffeeShop();
    expect(coffeeShop.name()).toEqual("The Coffee Connection");
  });

  it("should have an address", function() {
    coffeeShop = new CoffeeShop();
    expect(coffeeShop.address()).toEqual("123 Lakeside Way");
  });

});
