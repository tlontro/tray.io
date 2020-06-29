const header = require('./sections/header');

module.exports = Object.assign({}, header, {
  url: 'https://www.saucedemo.com/inventory.html',
  filter: '.product_sort_container',
  inventoryItemPrice: '.inventory_item .inventory_item_price',
  inventoryItemAddToCart: '.inventory_item .btn_inventory',
});
