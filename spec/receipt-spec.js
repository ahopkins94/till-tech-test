describe("Receipt", function() {
  var Receipt = require('../src/receipt.js');
  var receipt;
  var date;

  beforeEach(function() {
     jasmine.clock().install();
     var date = new Date(2018, 03, 13, 08, 30, 03);
     jasmine.clock().mockDate(date);
     item1 = jasmine.createSpyObj('item', ['name', 'price', 'quantity']);
     item1.name = 'Cafe Latte';
     item1.price = 4.75;
     item1.quantity = 2;
     item2 = jasmine.createSpyObj('item2', ['name', 'price', 'quantity']);
     item2.name = 'Americano';
     item2.price = 3.75;
     item2.quantity = 1;
     coffeeshop = jasmine.createSpyObj('coffeeshop', ['name', 'address', 'number', 'prices']);
     coffeeshop.name = 'The Coffee Connection';
     coffeeshop.address = '123 Lakeside Way';
     coffeeshop.number = '16503600708';
     coffeeshop.prices = {
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
     };
     order = jasmine.createSpyObj('order', ['coffeeshop', 'items']);
     order.items = [item1, item2];
     order.coffeeshop = coffeeshop;
     calculator = jasmine.createSpyObj('calculator', ['order', 'amountPaid', 'totalIncTax', 'amountOfTax', 'new']);
     calculator.order = order;
     calculator.amountPaid = 20;
     calculator.totalIncTax = 15.9;
     calculator.amountOfTax = 4.1;
     receipt = new Receipt(order);
   });

   afterEach(function() {
     jasmine.clock().uninstall();
   });

  it("should have an order", function() {
    expect(receipt.order).toEqual(order);
  });

});
