// Requiring chai
const chai = require('chai');

// Helper Methods
const helpers = require('../helpers/helpers');

// Page Objects
const cartPage = require('../page_objects/cart');
const checkoutPage = require('../page_objects/checkout');
const inventoryPage = require('../page_objects/inventory');
const loginPage = require('../page_objects/login');

describe('Tray.io Take Home exercise', () => {
  it('adding and removing items from basket', () => {
    browser.url(loginPage.url);
    expect(browser).toHaveTitle('Swag Labs');

    const user = $(loginPage.loginCredsUser).getText().split('\n')[1];
    const pass = $(loginPage.loginCredsPass).getText().split('\n')[1];

    // logging in
    $(loginPage.email).addValue(user);
    $(loginPage.password).addValue(pass);
    $(loginPage.loginButton).click();

    // asserting that we're logged in
    expect(browser).toHaveUrl(inventoryPage.url);
    $(inventoryPage.filter).selectByVisibleText('Price (high to low)');
    const prices = $$(inventoryPage.inventoryItemPrice)
        .map((el) => Number(el.getText().replace(/[^0-9\.]+/g, '')));

    // asserting that the list is sorted
    chai.expect(helpers.isSorted(prices)).to.be.true;

    // adding the cheapest 2 items to the cart
    const addToCart = $$(inventoryPage.inventoryItemAddToCart);
    addToCart[addToCart.length-2].click();
    addToCart[addToCart.length-1].click();

    // asserting the added items to the cart to sum 2
    chai.expect(parseInt($(inventoryPage.cartCounter).getText())).to.eq(2);

    // go to cart
    $(inventoryPage.cart).click();
    expect(browser).toHaveUrl(cartPage.url);

    // remove the cheapest item
    const cartItems = $$(cartPage.itemPrices)
        .map((el) => Number(el.getText().replace(/[^0-9\.]+/g, '')));
    $$(cartPage.removeItem)[helpers.indexOfLowest(cartItems)].click();
    chai.expect(parseInt($(cartPage.cartCounter).getText())).to.eq(1);

    // go to checkout page
    $(cartPage.checkoutButton).click();
    expect(browser).toHaveUrl(checkoutPage.url);
  });
});
