class ProductPage {

    get fittedHatFavouriteIcon () {
        return $("div[id='product-0'] div[class='css-1m8iww1']")
    }

    get truckerHatFavouriteIcon () {
        return $("div[id='product-1'] div[class='css-1m8iww1']")
    }

    get mousePadFavouriteIcon () {
        return $("div[id='product-2'] div[class='css-1m8iww1']")
    }

    get pillowFavouriteIcon () {
        return $("div[id='product-3'] div[class='css-1m8iww1']")
    }

    get mugFavouriteIcon () {
        return $("div[id='product-4'] div[class='css-1m8iww1']")
    
    }


   async signUp () {

      await this.fittedHatFavouriteIcon.click()
      await this.truckerHatFavouriteIcon.click()
      await this.mousePadFavouriteIcon.click()
      await this.pillowFavouriteIcon.click()
      await this.mugFavouriteIcon.click()
      

   }

}



module.exports = new ProductPage;