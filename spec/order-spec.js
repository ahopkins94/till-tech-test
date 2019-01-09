describe("Order", function() {
  var Order = require('../src/order.js');
  var order;

  it("should add an item to items", function() {
    coffeeshop = jasmine.createSpyObj('coffeeshop', ['prices']);
    coffeeshop.prices = ["Cafe Latte: " + 4.75];
    order = new Order(coffeeshop);
    order.addItem("Cafe Latte", 4.75, 2);
    expect(order.items.length).toEqual(1);
  });

  it("should not add an item to items if it is not on the coffeeshop's prices list", function() {
    coffeeshop = jasmine.createSpyObj('coffeeshop', ['prices']);
    coffeeshop.prices = ["Cafe Latte: " + 4.75];
    order = new Order(coffeeshop);
    order.addItem("chips", 4.75, 2);
    expect(order.items.length).toEqual(0);
  });

  it("should not add an item to items if it is not on the coffeeshop's prices list", function() {
    coffeeshop = jasmine.createSpyObj('coffeeshop', ['prices']);
    coffeeshop.prices = ["Cafe Latte: " + 4.75];
    order = new Order(coffeeshop);
    order.addItem("Cafe Latte", 4, 2);
    expect(order.items.length).toEqual(0);
  });
  
});
