
class CheckoutOverviewPage {

  get btnFinish() {return $('=FINISH');}
  get elemTotalPrice() {return $('//*[@class="summary_total_label"]');}
  get elemThankYouMessage() {return $('//h2[text()="THANK YOU FOR YOUR ORDER"]');} 


  

}

module.exports = CheckoutOverviewPage;
