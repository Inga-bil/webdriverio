describe('Ecommerce application', ()=>{

    it('Login page title', () =>
    {
        //webdriverIO code
        browser.url("https://the-internet.herokuapp.com/login")
        console.log(browser.getTitle())
        browser.pause(3000)

        //check is the title is the one that we need (the correct one)
       expect(browser).toHaveTitleContaining("The Internet")


    })



})