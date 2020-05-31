
class CheckoutPage {
  get txtFirstName() {return $('//*[@id="first-name"]');}
  get txtLastName() {return $('//*[@id="last-name"]');}
  get txtZipcode() {return $('//*[@id="postal-code"]');}
  get btnContinue() {return $('//*[@value="CONTINUE"]');}
}

module.exports = CheckoutPage;
