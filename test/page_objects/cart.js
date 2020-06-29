const header = require('./sections/header');

module.exports = Object.assign({}, header, {
  url: 'https://www.saucedemo.com/cart.html',
  itemPrices: '.inventory_item_price',
  removeItem: '.item_pricebar .cart_button',
  checkoutButton: '.checkout_button',
});
