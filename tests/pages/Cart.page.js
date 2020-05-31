
class CartPage {
  get elemFirstItemName() {return $('(//div[@class="inventory_item_name"])[1]');}
  get elemSecoundItemName() {return $('(//div[@class="inventory_item_name"])[2]');}
  get btnFirstRemove() {return $('(//button[text()="REMOVE"])[1]');}
  get elemcartItem1Price() {return $('(//div[@class="inventory_item_price"])[1]');} 
  get elemcartItem2Price() {return $('(//div[@class="inventory_item_price"])[2]');} 
  get btnContinueOnShopping() {return $('=Continue Shopping');}
  get btnCheckout() {return $('=CHECKOUT');}

}

module.exports = CartPage;
