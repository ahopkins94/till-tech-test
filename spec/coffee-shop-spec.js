describe("CoffeeShop", function() {
  var CoffeeShop = require('../src/coffee-shop.js');
  var coffeeShop;

  it("should have a name", function() {
    coffeeShop = new CoffeeShop();
    expect(coffeeShop.name()).toEqual("The Coffee Connection");
  });

});
