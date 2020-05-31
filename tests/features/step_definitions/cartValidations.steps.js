const { Given, When, Then } = require('cucumber');

const Login = require('../../pages/Login.page.js');
const Products = require('../../pages/Products.page.js');
const Carts = require('../../pages/Cart.page.js');
const Checkout = require('../../pages/Checkout.page.js');
const CheckoutOverview = require('../../pages/CheckoutOverview.page.js');
const LoginPage = new Login();
const ProductsPage = new Products();
const CartsPage = new Carts();
const CheckoutPage = new Checkout();
const CheckoutOverviewPage = new CheckoutOverview();

Given(/^I am on the saucedemo Login Page$/, () => {
     LoginPage.openLoginPage();     
     LoginPage.txtUsername.waitForExist({ timeout: 5000 });
});

When(/^I enter (.*) in user id on login Page$/,  (strParameterValue) => {
     LoginPage.txtUsername.setValue(strParameterValue);
});

When(/^I enter (.*) in password on login Page$/,  (strParameterValue) => {
     LoginPage.txtPassword.setValue(strParameterValue);
});

When(/^I click on Login button on login Page$/,  () => {
     LoginPage.btnlogin.click();
});

Then(/^I should see products home page$/, () => {
    ProductsPage.elemProductsHeading.waitForExist({ timeout: 5000 });
    expect(ProductsPage.elemProductsHeading).toExist();
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
});

When(/^I select (.*) in sort list box on product home page$/, (sortValue) => {
    ProductsPage.lstsortlistbox.selectByVisibleText(sortValue);
});

Given(/^I am on products home page$/, () => {
    browser.url('https://www.saucedemo.com/inventory.html');
});

When(/^I click on add to cart button for first product$/, () => {
    ProductsPage.btnAddtocartbutton1.waitForExist({ timeout: 5000 });
    ProductsPage.btnAddtocartbutton1.click();
});

When(/^I click on add to cart button for secound product$/, () => {
    ProductsPage.btnAddtocartbutton2.waitForExist({ timeout: 5000 });
    ProductsPage.btnAddtocartbutton2.click();
});

When(/^I click on cart icon$/, () => {
    ProductsPage.imgShoppingCart.click();
    expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
});

Then(/^I should see first item as (.*) added to cart$/, (strParameterValue) => { 
    
    expect(CartsPage.elemFirstItemName.getText()).toMatch(strParameterValue);
});

Then(/^I should see Secound item as (.*) added to cart$/, (strParameterValue) => { 
    expect(CartsPage.elemSecoundItemName.getText()).toMatch(strParameterValue);
});

Given(/^I am on the carts details page$/, () => {
    browser.url('https://www.saucedemo.com/cart.html');
});

When(/^I click on remove button for first product in cart$/, () => {
    CartsPage.btnFirstRemove.waitForExist({ timeout: 5000 });
    CartsPage.btnFirstRemove.click();
});

When(/^I click on continue to shopping button user should navigate to products home page$/, () => {
    CartsPage.btnContinueOnShopping.waitForExist({ timeout: 5000 });
    CartsPage.btnContinueOnShopping.click();
});

Then(/^I should first item is removed from cart and first item is (.*)$/, (strParameterValue) => { 
    expect(CartsPage.elemFirstItemName.getText()).toMatch(strParameterValue);
});

Then(/^First Item in products list is (.*)$/, (strParameterValue) => {
    expect(CartsPage.elemFirstItemName.getText()).toMatch(strParameterValue);
});

Then(/^Secound Item in products list is (.*)$/, (strParameterValue) => { 
    expect(CartsPage.elemSecoundItemName.getText()).toMatch(strParameterValue);
});

Then(/^I should see price for first item in cart as (.*)$/, (strParameterValue) => { 
     expect(CartsPage.elemcartItem1Price.getText()).toMatch(strParameterValue);
}); 

Then(/^I should see price for Secound item in cart as (.*)$/, (strParameterValue) => { 
     expect(CartsPage.elemcartItem2Price.getText()).toMatch(strParameterValue);
});

Then(/^I click on Checkout button on cart page$/, () => { 
    CartsPage.btnCheckout.click();
});

Then(/^I should see checkout page$/, () => { 
    CheckoutPage.btnContinue.waitForExist({ timeout: 5000 });
    browser.url('https://www.saucedemo.com/checkout-step-one.html');
});

Then(/^I should be able to enter First Name as (.*)$/, (strParameterValue) => { 
    CheckoutPage.txtFirstName.setValue(strParameterValue);
});
Then(/^I should be able to enter Last Name as (.*)$/, (strParameterValue) => { 
    CheckoutPage.txtLastName.setValue(strParameterValue);
});

Then(/^I should be able to enter zip code as (.*)$/, (strParameterValue) => { 
    CheckoutPage.txtZipcode.setValue(strParameterValue);
});

Then(/^I should be able to click on Continue button on checkout page$/, () => { 
    CheckoutPage.btnContinue.click();
});

Then(/^I should see Finish button on Checkout Overview page$/, () => { 
    CheckoutOverviewPage.btnFinish.waitForExist({ timeout: 5000 });
    browser.url('https://www.saucedemo.com/checkout-step-two.html');
});

Then(/^I should be able to click on Finish button on checkout overview page$/, () => { 
    CheckoutOverviewPage.btnFinish.click();
});

Then(/^I should see total price on Checkout Overview page as (.*)$/, (strParameterValue) => { 
    console.log(CheckoutOverviewPage.elemTotalPrice.getText());
    expect(CheckoutOverviewPage.elemTotalPrice.getText()).toMatch("Total: $"+strParameterValue);
});


Then(/^I should be able to see Thank you message for order placement$/, () => { 
    CheckoutOverviewPage.elemThankYouMessage.waitForExist({ timeout: 5000 });
    browser.url('https://www.saucedemo.com/checkout-complete.html');
});








