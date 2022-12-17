class FavouritesPage {

    get favouritesButton () {
        return $("#top-favorite")
    }

    get signUpLink () {
        return $("//li[@class='auth0-lock-tabs-current']//span[contains(text(),'Sign Up')]")
    }

    get emailInput () {
        return $('[type="email"]')
    }

    get passwordInput () {
        return $('[type="password"]')
    }

    get signUpButton () {
        return $('[id="1-submit"]')
    
    }


    get incorrectEmail () {
        return $('.auth0-lock-error-invalid-hint')
    
    }

   async signUp (email, password) {

      await this.signInOrRegisterButton.click()
      await this.emailInput.setValue(email)
      await this.passwordInput.setValue(password)
      await this.signUpButton.click()

   }

}



module.exports = new FavouritesPage;