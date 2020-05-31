const genericTestData = require('../files/testData/applicationData.js');

class LoginPage {
  get txtUsername() {return $('#user-name');}
  get txtPassword() {return $('#password'); }
  get btnlogin() {return $('//*[@value="LOGIN"]');}

  
  openLoginPage() {
    browser.url(genericTestData['url']);
  }

}

module.exports = LoginPage;
