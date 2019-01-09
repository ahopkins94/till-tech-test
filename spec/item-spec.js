describe("Item", function() {
  var Item = require('../src/item.js');
  var item;

  it("should have a name", function() {
    item = new Item("Cafe Latte", 4.75, 2);
    expect(item.name).toEqual("Cafe Latte");
  });

});
