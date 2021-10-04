const BasePage = require('./BasePage');
class HomePage extends BasePage{

    constructor(page){
        super(page)

        //locators

           this.title = '//span[@class="title"]'
           this.addToCard1 = '#add-to-cart-sauce-labs-bike-light'
           this.shoppingCard = '//a[@class="shopping_cart_link"]' 
    }


    async clickOnAddToCard(button){
       await this.page.click(button)

    }


}

module.exports = HomePage