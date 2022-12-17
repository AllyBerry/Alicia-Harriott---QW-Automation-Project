const SignUpPage = require('../pageobjects/signUp.page')


before()
describe.only ('Create an account', () => {
    it('Should register succesfully', async () => {
       await browser.url('https://dev-mlluudmotpwoldtv.us.auth0.com/login?state=hKFo2SA0bmxyRGxJUnhxY1ZSTkRLVUJLSHZFdU1nR19PWC1sSaFupWxvZ2luo3RpZNkgb1d0M2w0bEpiZjA4b2xISG5lX2kzT250Zm50b00yZ2ejY2lk2SBHbzVxVW16cTFLcWNnTzFIUVdNbWI5ZHFxRFVEOElQdQ&client=Go5qUmzq1KqcgO1HQWMmb9dqqDUD8IPu&protocol=oauth2&scope=openid%20profile%20email&response_type=code&redirect_uri=https%3A%2F%2Fui-automation-camp.vercel.app%2Fapi%2Fauth%2Fcallback&nonce=lHjI3lJznSlFupPTCYNjswQFYIXI6ERXNlxem3kM-vc&code_challenge=Y22Cczz12E_vVTjLwrBqS6htGKQH6cimRIzzzAbSSWo&code_challenge_method=S256')
       await SignUpPage.signUp('alicia.harriott24@gmail.com','12Man12@ley')
              
    }) 

}); 
 
describe ('Invalid email', () => {
    it('should login with invalid credentials', async () => {
       await browser.url('https://dev-mlluudmotpwoldtv.us.auth0.com/login?state=hKFo2SA0bmxyRGxJUnhxY1ZSTkRLVUJLSHZFdU1nR19PWC1sSaFupWxvZ2luo3RpZNkgb1d0M2w0bEpiZjA4b2xISG5lX2kzT250Zm50b00yZ2ejY2lk2SBHbzVxVW16cTFLcWNnTzFIUVdNbWI5ZHFxRFVEOElQdQ&client=Go5qUmzq1KqcgO1HQWMmb9dqqDUD8IPu&protocol=oauth2&scope=openid%20profile%20email&response_type=code&redirect_uri=https%3A%2F%2Fui-automation-camp.vercel.app%2Fapi%2Fauth%2Fcallback&nonce=lHjI3lJznSlFupPTCYNjswQFYIXI6ERXNlxem3kM-vc&code_challenge=Y22Cczz12E_vVTjLwrBqS6htGKQH6cimRIzzzAbSSWo&code_challenge_method=S256')
       await SignUpPage.signUp('hello','12Man12@ley')
       await expect(SignUpPage.incorrectEmail).toHaveTextContaining('Email is invalid')
       
    }) 

}); 
