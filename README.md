Till Tech Test
==============

[Original spec](https://github.com/makersacademy/course/blob/master/individual_challenges/till_tech_test.md)

Node.js back-end business logic for printing a receipt. Testing in Jasmine.

## Installation

1) Clone the repository
2) Run `npm install` to install local dependencies
3) Run `jasmine` to run the tests

## Deployment in node

$ node  
$ .load ./src/calculator.js  
$ .load ./src/coffee-shop.js  
$ .load ./src/item.js  
$ .load ./src/receipt.js  
$ .load ./src/order.js  
$ var coffeeShop = new CoffeeShop()  
$ coffeeShop.getItems()  
$ var order = new Order(coffeeShop)  
$ order.addItem('Cafe Latte', 4.75, 1)  
$ var receipt = new Receipt(order)  
$ receipt.getCalculator(5)  
$ receipt.display()  

## Contributing

If you have any suggestions, please create a GitHub issue, or feel free to make a pull request!
