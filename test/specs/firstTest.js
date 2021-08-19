describe('Ecommerce application', ()=>{

    it('Login page title', () =>
    {
        //webdriverIO code
        browser.url("https://the-internet.herokuapp.com/login")
        console.log(browser.getTitle())
       

        //check is the title is the one that we need (the correct one)
       expect(browser).toHaveTitleContaining("The Internet")

       const username = $("#username");
       username.setValue("Hello World");
       

       const password = $("//*[@name = 'password']");
       password.setValue("1212hgjhvhgv");

       const login = $("//*[@type = 'submit']");
       login.click();

       const errorMessage = $(".flash");
       console.log (errorMessage.getText() + "is the message that is shown on the screen");

       browser.pause(3000)
       

    })



})