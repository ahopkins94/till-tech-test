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
  
});
