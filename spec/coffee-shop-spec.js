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

  it("should have a name", function() {
    coffeeShop = new CoffeeShop();
    expect(coffeeShop.number()).toEqual("16503600708");
  });

  it("should have items", function() {
    coffeeShop = new CoffeeShop();
    coffeeShop.getItems();
    expect(coffeeShop.items).toEqual({
      "Cafe Latte": 4.75,
      "Flat White": 4.75,
      "Cappucino": 3.85,
      "Single Espresso": 2.05,
      "Double Espresso": 3.75,
      "Americano": 3.75,
      "Cortado": 4.55,
      "Tea": 3.65,
      "Choc Mudcake": 6.40,
      "Choc Mousse": 8.20,
      "Affogato": 14.80,
      "Tiramisu": 11.40,
      "Blueberry Muffin": 4.05,
      "Chocolate Chip Muffin": 4.05,
      "Muffin Of The Day": 4.55
    });
  });

});
