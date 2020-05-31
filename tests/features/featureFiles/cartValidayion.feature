Feature: Validate the cart functionality of saucelab site

  @Smoketest
  Scenario Outline: As a user, I should be able to login to application

    Given I am on the saucedemo Login Page
    When I enter <userid> in user id on login Page
    And I enter <password> in password on login Page
    And I click on Login button on login Page
    Then I should see products home page

    Examples:
      | userid          | password    |
      | standard_user   |secret_sauce |

  @Smoketest
  Scenario Outline: As a user, I should be able to add 2 items to cart

    Given I am on products home page
    And First Item in products list is <item1>
    And Secound Item in products list is <item2>
    When I click on add to cart button for first product
    And I click on add to cart button for secound product
    And I click on cart icon
    Then I should see first item as <item1> added to cart
    And I should see Secound item as <item2> added to cart
      Examples:
      | item1              | item2                   |
      | Sauce Labs Backpack| Sauce Labs Bike Light   |

  @Smoketest
  Scenario Outline: As a user, I should be able to remove item from cart

    Given I am on the carts details page
    When I click on remove button for first product in cart
    Then I should first item is removed from cart and first item is <item1>
      Examples:
      | item1                   |
      | Sauce Labs Bike Light   |

  @Smoketest
  Scenario Outline: As a user, I should be able to continue shopping from cart after I click on Continue on shopping button in cart page

    Given I am on the carts details page
    When I click on continue to shopping button user should navigate to products home page
    And I should see products home page 
    Examples:
      | item1                 |
      | Sauce Labs Backpack   |

  @Smoketest
  Scenario Outline: As a user, I should be able to checkout cart items

    Given I should see products home page
    And First Item in products list is <item1>
    And I click on add to cart button for first product
    And I click on cart icon
    And I should see first item as <item2> added to cart
    And I should see Secound item as <item1> added to cart
    And I should see price for first item in cart as <item2Price>
    And I should see price for Secound item in cart as <item1Price>
    When I click on Checkout button on cart page
    And I should see checkout page
    And I should be able to enter First Name as <FirstName>
    And I should be able to enter Last Name as <LastName>
    And I should be able to enter zip code as <ZipCode>
    And I should be able to click on Continue button on checkout page
    Then I should see Finish button on Checkout Overview page
    And I should see total price on Checkout Overview page as <TotalPrice>
    And I should be able to click on Finish button on checkout overview page
    And I should be able to see Thank you message for order placement
    Examples:
      | item1              | item2                   |item1Price|item2Price |FirstName|LastName|ZipCode|TotalPrice|
      | Sauce Labs Backpack| Sauce Labs Bike Light   |29.99     |9.99       |varsha|Nirantar|60656|43.18|