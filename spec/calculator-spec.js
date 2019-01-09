describe("Calculator", function() {
  var Calculator = require('../src/calculator.js')
  var calculator;

  beforeEach(function() {
    item = jasmine.createSpyObj('item', ['price', 'quantity']);
    item.price = 3.5;
    item.quantity = 2;
    item2 = jasmine.createSpyObj('item', ['price', 'quantity']);
    item2.price = 4;
    item2.quantity = 1;
    order = jasmine.createSpyObj('order', ['items']);
    order.items = [item, item2];
    calculator = new Calculator(order, 15);
  });

  it("should have a constant tax", function() {
    expect(calculator.TAX).toEqual(0.2);
  });

  it("should calculate a total of items", function() {
    expect(calculator.total()).toEqual(11);
  });

});
