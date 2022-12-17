const SignUpPage = require('../pageobjects/wishList.page')


describe.skip ('Fovourites', () => {
    it('Should navigate to favourites', async () => {
       await browser.url('https://ui-automation-camp.vercel.app/favorites')

       await expect(SignUpPage.successfulSignUpMessage).toHaveTextContaining('Thank you for registering')
       
    }) 


}); 