
class ProductsPage {
  get elemProductsHeading() {return $('//*[@class="product_label"]');}
  get lstsortlistbox() {return $('//*[@class="product_sort_container"]');}
  get btnAddtocartbutton1() {return $('//*[@class="inventory_list"]/div[1]/div[3]/button');}
  get btnAddtocartbutton2() {return $('//*[@class="inventory_list"]/div[2]/div[3]/button');}
  get imgShoppingCart() {return $('//*[@id="shopping_cart_container"]');}

}

module.exports = ProductsPage;
